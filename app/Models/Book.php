<?php

namespace App\Models;

use App\Traits\Filterable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;


class Book extends Model
{
    use HasFactory;
    use Filterable;

    protected $filterable = [
        'sort',
        'category',
        'author',
        'star'
    ];

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

    public function getStarAvgAttribute(){
        return ;
    }

    public function scopeDefault(){
        return Book::select(
            'book.id', 'book_title', 'book_price', 'book_cover_photo',
            'category_name','author_name', 'discount_price',
//            'review_title', 'review_details', 'review_date', 'rating_start'
        )
            ->selectRaw("CASE
                    WHEN (discount_end_date IS NULL AND DATE(NOW()) >= discount_start_date )
                        THEN discount_price
                    WHEN (discount_end_date IS NOT NULL AND (DATE(NOW()) >= discount_start_date AND DATE(NOW()) <= discount_end_date))
                        THEN discount_price
                    ELSE book_price
                    END as final_price")
            ->leftjoin("discount", "discount.book_id", '=', 'book.id')
            ->leftjoin("category", "category.id", '=', 'book.category_id')
            ->leftjoin("author", "author.id", '=', 'book.author_id')
//            ->leftjoin("review", "review.book_id", '=', 'book.id')
            ->groupby('book.id','category_name','author_name','discount_price', 'discount_end_date', 'discount_start_date');
    }

    public function scopeSale(){
        return Book::select(
            'book.id', 'book_title', 'book_price', 'book_cover_photo',
            'category_name','author_name', 'discount_price')
            ->selectRaw("CASE
                    WHEN (discount_end_date IS NULL AND DATE(NOW()) >= discount_start_date )
                        THEN book_price  - discount_price
                    WHEN (discount_end_date IS NOT NULL AND (DATE(NOW()) >= discount_start_date AND DATE(NOW()) <= discount_end_date))
                        THEN book_price  - discount_price
                    ELSE book_price
                    END as sub_price")
            ->leftjoin("discount", "discount.book_id", '=', 'book.id')
            ->leftjoin("category", "category.id", '=', 'book.category_id')
            ->leftjoin("author", "author.id", '=', 'book.author_id');
    }

    public function scopeRecommend(){
        return Book::select(
            'book.id', 'book_title', 'book_price', 'book_cover_photo',
            'category_name','author_name', 'discount_price')
            ->selectRaw('AVG(review.rating_start) as avg_star')
            ->selectRaw("CASE
                    WHEN (discount_end_date IS NULL AND DATE(NOW()) >= discount_start_date )
                        THEN discount_price
                    WHEN (discount_end_date IS NOT NULL AND (DATE(NOW()) >= discount_start_date AND DATE(NOW()) <= discount_end_date))
                        THEN discount_price
                    ELSE book_price
                    END as final_price")
            ->leftjoin("discount", "discount.book_id", '=', 'book.id')
            ->leftjoin("author", "author.id", '=', 'book.author_id')
            ->leftjoin("category", "category.id", '=', 'book.category_id')
            ->join("review", "review.book_id", '=', 'book.id')
            ->groupby('book.id','category_name','author_name','discount_price', 'discount_end_date', 'discount_start_date');
    }

    public function scopePopular(){
        return Book::select(
            'book.id', 'book_title', 'book_price', 'book_cover_photo',
            'category_name','author_name', 'discount_price')
            ->selectRaw('COUNT(review.book_id) as total_reviews')
            ->selectRaw("CASE
                    WHEN (discount_end_date IS NULL AND DATE(NOW()) >= discount_start_date )
                        THEN discount_price
                    WHEN (discount_end_date IS NOT NULL AND (DATE(NOW()) >= discount_start_date AND DATE(NOW()) <= discount_end_date))
                        THEN discount_price
                    ELSE book_price
                    END as final_price")
            ->leftjoin("discount", "discount.book_id", '=', 'book.id')
            ->leftjoin("author", "author.id", '=', 'book.author_id')
            ->leftjoin("category", "category.id", '=', 'book.category_id')
            ->join("review", "review.book_id", '=', 'book.id')
            ->groupby('book.id','category_name','author_name','discount_price', 'discount_end_date', 'discount_start_date');
    }

    public function scopeDetail(){
        return Book::select(
            'book.id', 'book_title', 'book_summary', 'book_price', 'book_cover_photo',
            'category_name','author_name', 'discount_price',
            'review_title', 'review_details', 'review_date', 'rating_start')
            ->selectRaw('COUNT(review.book_id) as total_reviews')
            ->selectRaw('AVG(review.rating_start) as avg_star')
            ->selectRaw("CASE
                    WHEN (discount_end_date IS NULL AND DATE(NOW()) >= discount_start_date )
                        THEN discount_price
                    WHEN (discount_end_date IS NOT NULL AND (DATE(NOW()) >= discount_start_date AND DATE(NOW()) <= discount_end_date))
                        THEN discount_price
                    ELSE book_price
                    END as final_price")
            ->leftjoin("discount", "discount.book_id", '=', 'book.id')
            ->leftjoin("author", "author.id", '=', 'book.author_id')
            ->leftjoin("category", "category.id", '=', 'book.category_id')
            ->leftjoin("review", "review.book_id", '=', 'book.id')
            ->groupby('book.id','category_name','author_name','discount_price', 'discount_end_date', 'discount_start_date','review_title', 'review_details','review_date','rating_start');
    }

    public function scopeFeatured(){
        return Book::select(
            'book.id', 'book_title', 'book_price', 'book_cover_photo',
            'category_name','author_name', 'discount_price',
//            'review_title', 'review_details', 'review_date', 'rating_start'
        )
            ->selectRaw('COUNT(review.book_id) as total_reviews')
            ->selectRaw("CASE
                    WHEN (discount_end_date IS NULL AND DATE(NOW()) >= discount_start_date )
                        THEN discount_price
                    WHEN (discount_end_date IS NOT NULL AND (DATE(NOW()) >= discount_start_date AND DATE(NOW()) <= discount_end_date))
                        THEN discount_price
                    ELSE book_price
                    END as final_price")
            ->leftjoin("discount", "discount.book_id", '=', 'book.id')
            ->leftjoin("author", "author.id", '=', 'book.author_id')
            ->leftjoin("category", "category.id", '=', 'book.category_id')
            ->leftjoin("review", "review.book_id", '=', 'book.id')
            ->groupby('book.id','category_name','author_name','discount_price', 'discount_end_date', 'discount_start_date'
//                ,'review_title', 'review_details','review_date','rating_start'
            );
    }

    public function filterCategory($query, $value)
    {
        return $query->where('book.category_id', $value);
    }

    public function filterAuthor($query, $value)
    {
        return $query->where('book.author_id', $value);
    }

    public function filterStar($query, $value)
    {
        if (is_numeric($value)) {
            return $query
                ->havingRaw("COALESCE(AVG(CAST(rating_start as INT)), 0) >= ?", [$value]);
        }
    }
}
