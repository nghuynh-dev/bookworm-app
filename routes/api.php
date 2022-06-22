<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Resources\AuthorResource;
use App\Models\Author;
use App\Http\Controllers\Api\BookController;
use App\Http\Controllers\Api\DiscountController;

use App\Http\Controllers\Api\FilterController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


//http://127.0.0.1:8000/api/books
Route::apiResource('/books', BookController::class);
//http://127.0.0.1:8000/api/sale
Route::get('/sale',[BookController::class,'onSale']);
//http://127.0.0.1:8000/api/recommend
Route::get('/recommend',[BookController::class,'onRecommend']);
//http://127.0.0.1:8000/api/popular
Route::get('/popular',[BookController::class,'onPopular']);


Route::resource('discounts', DiscountController::class );

Route::resource('/filters', FilterController::class);


