<?php

use App\Http\Controllers\Api\SellersController;
use App\Http\Controllers\ClientsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::apiResource('sellers',SellersController::class);
Route::post('/sellers/login', [SellersController::class, 'login']);
Route::apiResource('clients', ClientsController::class);
Route::post('/clientsStore', [ClientsController::class, 'store']);
Route::get('/clientsGet/{id}', [ClientsController::class, 'show']);


Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
