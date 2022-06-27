<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\UpdateBookRequest;
use App\Models\Discount;
use App\Models\Review;
use App\Repositories\Book\BookRepository;
use Illuminate\Http\Request;
use Illuminate\Http\Response;


use App\Models\Book;
use App\Models\Category;
use App\Http\Resources\BookResource;
use App\Http\Resources\BookCollection;
use App\Http\Requests\StoreBookRequest;
use Illuminate\Support\Facades\DB;


class BookController extends Controller
{
    protected $bookRepository;
    public function __construct(BookRepository $bookRepository){
        $this->bookRepository = $bookRepository;
    }

    public function index(){
        return $this->bookRepository->getBooksAll();
    }
    public function getBooksSale(){
        return $this->bookRepository->getBooksSale();
    }
    public function getBooksRecommend(){
        return $this->bookRepository->getBooksRecommend();
    }
    public function getBooksPopular(){
        return $this->bookRepository->getBooksPopular();
    }
    public function getBookDetail($id){
        return $this->bookRepository->getBookDetail($id);
    }
    public function getBookCondition(Request $request){
        return $this->bookRepository->getBookCondition($request);
    }
}
