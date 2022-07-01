<?php

namespace App\Repositories\Book;

use App\Http\Resources\BookCollection;
use App\Http\Resources\BookResource;
use App\Models\Book;
use Illuminate\Http\Response;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response as ResponseAlias;

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
    public function getBooksSale(){
        $books = Book::detail()->sale()->limit(config('app.perPage'))->get();
        $books = BookResource::collection($books);

        return response()->json([
            "message" => "10 books sale",
            "data" => $books
        ],200);
    }
    public function getBooksRecommend(){
        $books = Book::detail()->recommend()->limit(config('app.perPage8'))->get();
        $books = BookResource::collection($books);

        return response()->json([
            "message" => "8 books recommend",
            "data" => $books
        ],200);
    }
    public function getBooksPopular(){
        $books = Book::detail()->popular()->limit(config('app.perPage8'))->get();
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
    public function getBookFilter(Request $request){
        $params = $request->all();
//        dd($params);
        if (!key_exists('show', $params)) {
            return response()->json([
                'error' => 'Request is missing attribute'
            ], ResponseAlias::HTTP_MISDIRECTED_REQUEST);
        }
        $filterBooks = Book::detail()->filter($params)->paginate($params['show'])->appends(request()->query());
        $books = new BookCollection($filterBooks);

        return response()->json($books, ResponseAlias::HTTP_OK);
    }
}
