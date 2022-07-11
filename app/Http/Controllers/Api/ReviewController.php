<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Repositories\Review\ReviewRepository;
use Illuminate\Http\Request;

class ReviewController extends Controller
{
    protected $reviewRepository;
<<<<<<< HEAD
    public function __construct(ReviewRepository $reviewRepository)
    {
        $this->reviewRepository = $reviewRepository;
    }
    public function getBookReview($id)
    {
        return $this->reviewRepository->getBookReview($id);
    }
=======
    public function __construct(ReviewRepository $reviewRepository){
        $this->reviewRepository = $reviewRepository;
    }
    public function getBookReview($id){
        return $this->reviewRepository->getBookReview($id);
    }

>>>>>>> d9685d60ef33f6005776fca24a3d3bf39cd54703
}
