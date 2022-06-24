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
        $books = Book::sale()->limit(10)->get();
        return response()->json([
            "message" => "10 books sale",
            "data" => $books
        ],200);
    }
    public function getBooksRecommend(){
        $books = Book::recommend()->limit(8)->get();
        return response()->json([
            "message" => "8 books recommend",
            "data" => $books
        ],200);
    }
    public function getBooksPopular(){
        $books = Book::popular()->limit(8)->get();
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

}
