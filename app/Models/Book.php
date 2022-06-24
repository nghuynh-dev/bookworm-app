<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;


class Book extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $table = 'book';

    public function author()
    {
        return $this->belongsTo(Author::class);
    }
    public function category()
    {
        return $this->belongsTo(Category::class);
    }
    public function discounts()
    {
        return $this->hasOne(Discount::class);
    }
    public function reviews()
    {
        return $this->hasMany(Review::class);
    }
    public function order_items()
    {
        return $this->hasMany(Review::class);
    }

    public function scopeSale(){
        return Book::select(
            'book.id', 'book_title', 'book_price', 'book_cover_photo',
            'category_name','author_name', 'discount_price',
            DB::raw("CASE
                    WHEN (discount_end_date IS NULL AND DATE(NOW()) >= discount_start_date )
                        THEN book_price  - discount_price
                    WHEN (discount_end_date IS NOT NULL AND (DATE(NOW()) >= discount_start_date AND DATE(NOW()) <= discount_end_date))
                        THEN book_price  - discount_price
                    ELSE book_price
                    END as sub_price"))
            ->join("discount", "discount.book_id", '=', 'book.id')
            ->join("category", "category.id", '=', 'book.category_id')
            ->join("author", "author.id", '=', 'book.author_id')
            ->orderBy("sub_price");
    }

    public function scopeRecommend(){
        return Book::select(
            'book.id', 'book_title', 'book_price', 'book_cover_photo',
            'category_name','author_name', 'discount_price',
            DB::raw('AVG(review.rating_start) as avg_star'),
            DB::raw("CASE
                    WHEN (discount_end_date IS NULL AND DATE(NOW()) >= discount_start_date )
                        THEN discount_price
                    WHEN (discount_end_date IS NOT NULL AND (DATE(NOW()) >= discount_start_date AND DATE(NOW()) <= discount_end_date))
                        THEN discount_price
                    ELSE book_price
                    END as final_price"))
            ->leftjoin("discount", "discount.book_id", '=', 'book.id')
            ->leftjoin("author", "author.id", '=', 'book.author_id')
            ->leftjoin("category", "category.id", '=', 'book.category_id')
            ->join("review", "review.book_id", '=', 'book.id')
            ->groupby('book.id','category_name','author_name','discount_price', 'discount_end_date', 'discount_start_date')
            ->orderBy("avg_star", 'DESC')
            ->orderBy( "final_price", 'ASC');
    }

    public function scopePopular(){
        return Book::select(
            'book.id', 'book_title', 'book_price', 'book_cover_photo',
            'category_name','author_name', 'discount_price',
            DB::raw('COUNT(review.book_id) as total_reviews'),
            DB::raw("CASE
                    WHEN (discount_end_date IS NULL AND DATE(NOW()) >= discount_start_date )
                        THEN discount_price
                    WHEN (discount_end_date IS NOT NULL AND (DATE(NOW()) >= discount_start_date AND DATE(NOW()) <= discount_end_date))
                        THEN discount_price
                    ELSE book_price
                    END as final_price"))
            ->leftjoin("discount", "discount.book_id", '=', 'book.id')
            ->leftjoin("author", "author.id", '=', 'book.author_id')
            ->leftjoin("category", "category.id", '=', 'book.category_id')
            ->join("review", "review.book_id", '=', 'book.id')
            ->groupby('book.id','category_name','author_name','discount_price', 'discount_end_date', 'discount_start_date')
            ->orderBy("total_reviews", 'DESC')
            ->orderBy( "final_price", 'ASC');
    }

    public function scopeDetail(){
        return Book::select(
            'book.id', 'book_title', 'book_summary', 'book_price', 'book_cover_photo',
            'category_name','author_name', 'discount_price',
            'review_title', 'review_details', 'review_date', 'rating_start',
            DB::raw('COUNT(review.book_id) as total_reviews'),
            DB::raw('AVG(review.rating_start) as avg_star'),
            DB::raw("CASE
                    WHEN (discount_end_date IS NULL AND DATE(NOW()) >= discount_start_date )
                        THEN discount_price
                    WHEN (discount_end_date IS NOT NULL AND (DATE(NOW()) >= discount_start_date AND DATE(NOW()) <= discount_end_date))
                        THEN discount_price
                    ELSE book_price
                    END as final_price"))
            ->leftjoin("discount", "discount.book_id", '=', 'book.id')
            ->leftjoin("author", "author.id", '=', 'book.author_id')
            ->leftjoin("category", "category.id", '=', 'book.category_id')
            ->join("review", "review.book_id", '=', 'book.id')
            ->groupby('book.id','category_name','author_name','discount_price', 'discount_end_date', 'discount_start_date','review_title', 'review_details','review_date','rating_start');
    }
}
