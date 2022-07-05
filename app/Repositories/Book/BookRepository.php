<?php

namespace App\Repositories\Book;

use App\Http\Resources\BookCollection;
use App\Http\Resources\BookResource;
use App\Models\Author;
use App\Models\Book;
use App\Models\Category;
use Illuminate\Http\Response;
use Illuminate\Http\Request;

//use Your Model


class BookRepository
{
    public function getBooksAll(){
        $books = Book::detail()->paginate(config('app.perPage'));
        $books = new BookCollection($books);

        return response()->json([
            "message" => "all books",
            "data" => $books
        ],200);
    }
//    public function getBooksSale(){
//        $books = Book::detail()->sale()->limit(config('app.perPage'))->get();
//        $books = BookResource::collection($books);
//
//        return response()->json([
//            "message" => "10 books sale",
//            "data" => $books
//        ],200);
//    }
//    public function getBooksRecommend(){
//        $books = Book::detail()->recommend()->limit(config('app.perPage8'))->get();
//        $books = BookResource::collection($books);
//
//        return response()->json([
//            "message" => "8 books recommend",
//            "data" => $books
//        ],200);
//    }
//    public function getBooksPopular(){
//        $books = Book::detail()->popular()->limit(config('app.perPage8'))->get();
//        $books = BookResource::collection($books);
//        return response()->json([
//            "message" => "8 books popular",
//            "data" => $books
//        ],200);
//    }
    public function getBookDetail($id){
        $book = Book::detail()->findOrFail($id);
        $book = new BookResource($book);
        return response()->json([
            "message" => "Detail book",
            "data" => $book
        ],200);
    }
    public function getBookFilter(Request $request){
        $params = $request->all();
//        dd($params);
        if (!key_exists('show', $params)) {
            return response()->json([
                'error' => 'Request is missing attribute'
            ], 421);
        }
        $filterBooks = Book::detail()->filter($params)->paginate($params['show'])->appends(request()->query());
        $books = new BookCollection($filterBooks);

        return response()->json($books, 200);
    }

    public function getType(){
        $categories = Category::orderBy('category_name')->get();
        $authors = Author::orderBy('author_name')->get();
        $stars = [1,2,3,4,5];
        return response()->json([
            'categories' => $categories,
            'authors' => $authors,
            'star' => $stars
        ],  200);
    }
}
