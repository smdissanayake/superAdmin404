<?php

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

// Allow both POST (JSON body) and GET (query param) for easier testing
Route::post('/searchuser', [UserController::class, 'searchUser']);
Route::get('/searchuser', [UserController::class, 'searchUser']);
