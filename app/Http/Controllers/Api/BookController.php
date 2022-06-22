<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\UpdateBookRequest;
use App\Models\Discount;
use Illuminate\Http\Request;
use Illuminate\Http\Response;


use App\Models\Book;
use App\Http\Resources\BookResource;
use App\Http\Resources\BookCollection;
use App\Http\Requests\StoreBookRequest;
use Illuminate\Support\Facades\DB;


class BookController extends Controller
{
    protected $book;

    public function __construct(Book $book)
    {
        $this->book = $book;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $books = Book::paginate(10);
        $bookResource = BookResource::collection($books);

        return $this->sentResponse($bookResource, 'successs', 200);
    }




    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(StoreBookRequest $request)
    {
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(Request $request, $id)
    {
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(UpdateBookRequest $request, $id)
    {
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id)
    {
    }
    // get 10 book most discount
    public function onSale()
    {
        $books = Book::select(
            'book.id',
            'book_title',
            'book_summary',
            'book_price',
            'book_cover_photo',
            'author_name',
            'discount_price',
            DB::raw(
                "case
                    WHEN (discount_end_date IS NULL
                        AND DATE(NOW()) >= discount_start_date )
                            THEN book_price  - discount_price
                    WHEN (discount_end_date IS NOT NULL
                        AND (DATE(NOW()) >= discount_start_date
                        AND DATE(NOW()) <= discount_end_date))
                            THEN book_price  - discount_price
                ELSE book_price
                end as sub_price"))
            ->join("discount", "discount.book_id", '=', 'book.id')
            ->leftJoin("category", "category.id", '=', 'book.category_id')
            ->leftJoin("author", "author.id", '=', 'book.author_id')
            ->leftJoin("review", "review.book_id", '=', 'book.id')
            ->groupBy("discount.discount_end_date", "discount.discount_start_date", "author.author_name", "book.id", "discount.discount_price")
            ->orderBy("sub_price")
            ->get()->take(10);
        return response()->json([
            'message' => 'Sale',
            'data' => $books
        ], 200);
    }
    // 8 books avg star
    public function onRecommend()
    {
        $books = Book::select(
                'book.id',
                'book_title',
                'book_summary',
                'book_price',
                'book_cover_photo',
                'author_name',
                "discount_price",
                DB::raw('AVG(review.rating_start) as avg_star'),
            DB::raw(
                "case
                    WHEN (discount_end_date IS NULL
                        AND DATE(NOW()) >= discount_start_date )
                            THEN discount_price
                    WHEN (discount_end_date IS NOT NULL
                        AND (DATE(NOW()) >= discount_start_date
                        AND DATE(NOW()) <= discount_end_date))
                            THEN discount_price
                ELSE book_price
                end as final_price")
            )
            ->leftJoin("discount", "discount.book_id", '=', 'book.id')
            ->leftJoin("author", "author.id", '=', 'book.author_id')
            ->join("review", "review.book_id", '=', 'book.id')
            ->groupBy("book.id", "author.author_name","discount.discount_start_date", "discount.discount_end_date","discount.discount_price")
            ->orderBy("avg_star", 'DESC')
            ->orderBy("final_price", 'ASC')
            ->get()
            ->take(8);
        return response()->json([
            'message' => 'Recommend',
            'data' => $books
        ], 200);
    }
    // 8 books most review
    public function onPopular(){
        $books = Book::select(
            'book.id',
            'book_title',
            'book_summary',
            'book_price',
            'book_cover_photo',
            'author_name',
            "discount_price",
            DB::raw('COUNT(review.book_id) as total_reviews'),
            DB::raw(
                "case
                    WHEN (discount_end_date IS NULL
                        AND DATE(NOW()) >= discount_start_date )
                            THEN discount_price
                    WHEN (discount_end_date IS NOT NULL
                        AND (DATE(NOW()) >= discount_start_date
                        AND DATE(NOW()) <= discount_end_date))
                            THEN discount_price
                ELSE book_price
                end as final_price")
        )
            ->leftJoin("discount", "discount.book_id", '=', 'book.id')
            ->leftJoin("author", "author.id", '=', 'book.author_id')
            ->join("review", "review.book_id", '=', 'book.id')
            ->groupBy("book.id", "author.author_name","discount.discount_start_date", "discount.discount_end_date","discount.discount_price")
            ->orderBy("total_reviews", 'DESC')
            ->orderBy("final_price", 'ASC')
            ->get()
            ->take(8);
        return response()->json([
            'message' => 'Popular',
            'data' => $books
        ], 200);
    }

    public function list($page){
        $books = Book::select(
            'book.id',
            'book_title',
            'book_summary',
            'book_price',
            'book_cover_photo',
            'author_name',
            "discount_price",
            DB::raw('COUNT(review.book_id) as total_reviews'),
            DB::raw(
                "case
                    WHEN (discount_end_date IS NULL
                        AND DATE(NOW()) >= discount_start_date )
                            THEN discount_price
                    WHEN (discount_end_date IS NOT NULL
                        AND (DATE(NOW()) >= discount_start_date
                        AND DATE(NOW()) <= discount_end_date))
                            THEN discount_price
                ELSE book_price
                end as final_price")
        )
            ->leftJoin("discount", "discount.book_id", '=', 'book.id')
            ->leftJoin("author", "author.id", '=', 'book.author_id')
            ->join("review", "review.book_id", '=', 'book.id')
            ->groupBy("book.id", "author.author_name","discount.discount_start_date", "discount.discount_end_date","discount.discount_price")
            ->orderBy("total_reviews", 'DESC')
            ->orderBy("final_price", 'ASC')
            ->get()
            ->take($page);
        return response()->json([
            'message' => 'list with paginate',
            'data' => $books
        ], 200);
    }

}
