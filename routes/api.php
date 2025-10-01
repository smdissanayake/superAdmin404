<?php

use App\Http\Controllers\Api\SellersController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::apiResource('sellers',SellersController::class);

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
