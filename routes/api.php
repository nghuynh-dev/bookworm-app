<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Resources\AuthorResource;
use App\Models\Author;
use App\Http\Controllers\Api\BookController;

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

Route::prefix('books')->group(function () {
    Route::get('/',[BookController::class,'index']);
    Route::get('/sale', [BookController::class,'getBooksSale']);
    Route::get('/recommend',[BookController::class,'getBooksRecommend']);
    Route::get('/popular',[BookController::class,'getBooksPopular']);
    Route::get('/detail/{id}',[BookController::class,'getBookDetail']);
    Route::get('/filter',[BookController::class,'getBookFilter']);
});



