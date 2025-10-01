<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\SellersResource;
use App\Models\sellers;
use Illuminate\Http\Request;

class SellersController extends Controller
{
    public function index()
    {

        $sellers = sellers::get();
        if ($sellers) {
            return SellersResource::collection($sellers);
        } else {
            return response()->json(['message' => 'no Record Found'], 200);
        }
    }

    public function show() {}

    public function update() {}
}
