<?php

namespace App\Repositories\Book;

use App\Http\Resources\BookResource;
use App\Models\Book;
use Illuminate\Http\Request;
//use Your Model


class BookRepository
{
    public function model()
    {
    }
    public function getBooksAll(){
        $books = Book::sale()->get();
        return response()->json([
            "message" => "all books sale",
            "data" => $books
        ],200);
    }
    public function getBooksSale(){
        $books = Book::sale()
            ->orderBy("sub_price")
            ->limit(10)->get();
        return response()->json([
            "message" => "10 books sale",
            "data" => $books
        ],200);
    }
    public function getBooksRecommend(){
        $books = Book::recommend()
            ->orderBy("avg_star", 'DESC')
            ->orderBy( "final_price", 'ASC')
            ->limit(8)->get();
        return response()->json([
            "message" => "8 books recommend",
            "data" => $books
        ],200);
    }
    public function getBooksPopular(){
        $books = Book::popular()
            ->orderBy("total_reviews", 'DESC')
            ->orderBy( "final_price", 'ASC')
            ->limit(8)->get();
//        dd($books);
        return response()->json([
            "message" => "8 books popular",
            "data" => $books
        ],200);
    }
    public function getBookDetail($id){
        $book = Book::detail()->findOrFail($id);
//        $book = new BookResource($book);
        return response()->json([
            "message" => "Detail book",
            "data" => $book
        ],200);
    }
    public function getBookCondition(Request $request){
//        $size = $request->query("paginate");
//        $books = Book::featured()
//            ->sort($request)
//            ->filter($request)
//            ->paginate($size);
//        dd($books);
//         = Book::featured();
        $books_query = Book::default();
        if($request->category){
            $books_query->where('category_id', $request->category)->orderBy("book.id");
        }
        if($request->author){
            $books_query->where('author_id', $request->author)->orderBy("book.id");
        }
        //bug at
        if($request->star){
            $books_query
                ->join("review", "review.book_id", 'book.id')
                ->selectRaw('AVG(review.rating_start) as avg_star')
//                ->whereBetween('avg_star',[$request->star, $request->star +1] )
                ->orderBy("book.id");
        }
        $books= $books_query
//            ->orderBy( "final_price", 'ASC')
            ->get();

            return response()->json([
            "message" => "condition book",
            "data" => $books
        ],200);
    }

}
