<?php

namespace App\Http\Resources;


use App\Models\Discount;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\DB;

class BookResource extends JsonResource
{


    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */

    public function toArray($request)
    {
        return [
            'book_id' => $this->id,
            'book_title' => $this->book_title,
            'book_summary' =>$this->book_summary,
            'book_price' => $this->book_price,
            'book_cover_photo' => $this->book_cover_photo,
            'author' => new AuthorResource($this->author),
            'category' => new CategoryResource($this->category),
//            'discount' =>new DiscountResource($this->discounts),
            'discount' => DiscountResource::collection($this->discounts)
        ];

    }
}
