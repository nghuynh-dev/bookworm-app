<?php

namespace App\Http\Resources;

use App\Models\Discount;
use Illuminate\Http\Resources\Json\ResourceCollection;

class BookCollection extends ResourceCollection
{
    public $collects = Discount::class;

    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
//         return parent::toArray($request);
        return [
            'book' => $this->collection,
            'meta' => [
                'total' => $this->total()
            ]
        ];
    }
}
