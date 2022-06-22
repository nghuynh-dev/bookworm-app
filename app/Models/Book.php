<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\FilterTrait;


class Book extends Model
{
    use HasFactory;
    use FilterTrait;
//    protected $fillable = [
//        'category_id',
//        'author_id',
//        'book_title',
//        'book_summary',
//        'book_price',
//        'book_cover_photo',
//    ];
    public $timestamps = false;
    protected $table = 'book';

    protected $filterable = [
        'sort',
        'category',
        'author',
        'star'
    ];

    public static function detail()
    {
    }

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
        return $this->hasMany(Discount::class);
    }

    public function reviews()
    {
        return $this->hasMany(Review::class);
    }

    public function order_items()
    {
        return $this->hasMany(Review::class);
    }


}
