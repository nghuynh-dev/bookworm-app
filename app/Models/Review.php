<?php

namespace App\Models;

use App\Traits\Filterable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    use HasFactory;
    use Filterable;
    public $timestamps = false;
    protected $table = 'review';

    protected $filterable = [
        'sort',
        'star'
    ];
    protected $casts = [
        'rating_start' => 'integer',
    ];
    public function scopeDetail($query, $id)
    {
        return $query
            ->where('book_id', $id)
<<<<<<< HEAD
=======
//            ->selectRaw("case when rating_start like '2' then 1 else null end")
//            ->selectRaw("count(case when rating_start like '2' then 1 else null end) as two_star")
//            ->selectRaw("count(case when rating_start like '3' then 1 else null end) as three_star")
//            ->selectRaw("count(case when rating_start like '4' then 1 else null end) as four_star")
//            ->selectRaw("count(case when rating_start like '5' then 1 else null end) as five_star")
>>>>>>> d9685d60ef33f6005776fca24a3d3bf39cd54703
            ->selectRaw("count(rating_start) as count_star")
            ->selectRaw("ROUND(AVG(CAST(rating_start as INT)),2) as avg_star");
    }
    public function sortDesc($query)
    {
        return $query
            ->orderBy('review_date', 'DESC');
    }
    public function sortAsc($query)
    {
        return $query
            ->orderBy('review_date', 'ASC');
    }
    public function filterStar($query, $value)
    {
        if (is_numeric($value)) {
            if ($value == 0) {
                return $query
<<<<<<< HEAD
                    ->whereRaw(('CAST(rating_start as INT)'), '>=', $value);
            }
            return $query
                ->whereRaw(('CAST(rating_start as INT)'), '=', $value);
=======
                    ->whereRaw(('CAST(rating_start as INT)'),'>=',$value);
            }
            return $query
                ->whereRaw(('CAST(rating_start as INT)'),'=',$value);
>>>>>>> d9685d60ef33f6005776fca24a3d3bf39cd54703
        }
        return $query;
    }
}
