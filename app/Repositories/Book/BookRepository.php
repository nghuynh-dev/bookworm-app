<?php

namespace App\Repositories\Book;

use App\Http\Resources\BookResource;
use App\Models\Book;
use Illuminate\Http\Request;
//use Your Model


class BookRepository
{
    public function getBooksAll(){
        $books = Book::detail()->paginate(10);
        $books = BookResource::collection($books);

        return response()->json([
            "message" => "all books",
            "data" => $books
        ],200);
    }
    public function getBooksSale(){
        $books = Book::detail()->sale()->limit(10)->get();
        $books = BookResource::collection($books);

        return response()->json([
            "message" => "10 books sale",
            "data" => $books
        ],200);
    }
    public function getBooksRecommend(){
        $books = Book::detail()->recommend()->limit(8)->get();
        $books = BookResource::collection($books);

        return response()->json([
            "message" => "8 books recommend",
            "data" => $books
        ],200);
    }
    public function getBooksPopular(){
        $books = Book::detail()->popular()->limit(8)->get();
        $books = BookResource::collection($books);

        return response()->json([
            "message" => "8 books popular",
            "data" => $books
        ],200);
    }
    public function getBookDetail($id){
        $book = Book::detail()->findOrFail($id);
        $book = new BookResource($book);
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
        //http://127.0.0.1:8000/api/books/condition?category=1
        if($request->category){
            $books_query->where('category_id', $request->category)->orderBy("book.id");
        }
        //http://127.0.0.1:8000/api/books/condition?author=1
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

//        if($request->sortBy && in_array($request->sortBy,['category_id','author_id','star'])){
//            $sortBy=$request->sortBy;
//        }else{
//            $sortBy='category_id';
//        }
//        if($request->sortOrder && in_array($request->sortOrder,['asc','desc'])){
//            $sortOrder=$request->sortOrder;
//        }else{
//            $sortOrder='desc';
//        }
        // paginate http://127.0.0.1:8000/api/books/condition?author=1&paginate=2
        if($request->perPage){
            $perPage=$request->perPage;
        }else{
            $perPage=5;
        }
        if($request->paginate){
            $books= $books_query->paginate($perPage);
        }else{
            $books= $books_query->get();
        }

        $books= $books_query
//            ->orderBy( $sortBy,$sortOrder)
            ->get();
            return response()->json([
            "message" => "condition book",
            "data" => $books
        ],200);
    }

}
