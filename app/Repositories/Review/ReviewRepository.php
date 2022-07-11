<?php

namespace App\Repositories\Review;

use App\Http\Resources\BookResource;
use App\Http\Resources\ReviewBookCollection;
use App\Models\Book;
use App\Models\Review;

<<<<<<< HEAD
class ReviewRepository
{
    public function getBookReview($id)
    {
=======
class ReviewRepository{
    public function getBookReview($id){
>>>>>>> d9685d60ef33f6005776fca24a3d3bf39cd54703
        $bookDetail = Book::detail()->findOrFail($id);
        $bookDetail = new BookResource($bookDetail);
        $reviews = Book::findOrFail($id)->reviews()->paginate(4);
        $reviews = new ReviewBookCollection($reviews);

        $group = Review::detail($id)->get();

        return response()->json([
            'book' => $bookDetail,
            'count' => $group,
            'reviews' => $reviews,
        ]);
    }
}
