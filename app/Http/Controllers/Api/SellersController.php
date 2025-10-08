<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\SellersResource;
use App\Models\Seller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class SellersController extends Controller
{
    public function index()
    {
        $sellers = seller::all();

        if ($sellers->count() > 0) {
            return SellersResource::collection($sellers);
        } else {
            return response()->json([
                'message' => 'No sellers found',
                'data' => []
            ], 200);
        }
    }

    public function login(Request $request)
    {
        $request->validate([
            'mobile' => 'required|string',
            'password' => 'required|string',
        ]);

        // DB එකේ seller එක check කරනවා
        $seller = Seller::where('mobile', $request->mobile)->first();

        if (!$seller) {
            return response()->json([
                'success' => false,
                'message' => 'Seller not found'
            ], 404);
        }

        // Password verify කරන්න
        if (Hash::check($request->password, $seller->password)) {
            return response()->json([
                'success' => true,
                'message' => 'Login successful',
                'data' => $seller
            ], 200);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Invalid password'
            ], 401);
        }
    }

    public function show() {}

    public function update() {}
}
