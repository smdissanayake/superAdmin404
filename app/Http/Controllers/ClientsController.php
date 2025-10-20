<?php

namespace App\Http\Controllers;

use App\Http\Resources\ClientResource;
use App\Http\Controllers\Controller;
use App\Models\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ClientsController extends Controller
{

    public function index()
    {
        $clients = Client::all();
        if ($clients->count() > 0) {
            return ClientResource::collection($clients);
        } else {
            return response()->json([
                'message' => 'No clients found',
                'data' => []
            ], 200);
        }
        // return ClientResource::collection($clients);
        // return response()->json(['message' => 'Client deleted']);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'seller_id'       => 'required|exists:sellers,id',
            'firstname'       => 'required|string|max:255',
            'shopname'        => 'required|string|max:255',
            'mobile'          => 'required|string|max:20',
            'latitude'        => 'nullable|string',
            'longitude'       => 'nullable|string',
            'address'         => 'nullable|string|max:255',
            'village'         => 'nullable|string|max:255',
            'district'        => 'nullable|string|max:255',
            'buying_status'   => 'nullable|string|max:50',
            'payment_status'  => 'nullable|string|max:50',
            'payment_date'    => 'nullable|string',
            'payment_amount'  => 'nullable|string',
            'note'            => 'nullable|string',
            'status'          => 'nullable|string|max:50',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Validation failed',
                'errors' => $validator->errors(),
            ], 422);
        }

        try {
            $client = Client::create($validator->validated());
        } catch (\Throwable $e) {
            return response()->json([
                'message' => 'Failed to create client',
                'error' => $e->getMessage(),
            ], 500);
        }

        return (new ClientResource($client))
            ->additional(['message' => 'Client created successfully']);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        // Treat the provided id as a seller_id and return all clients for that seller.
        $clients = Client::where('seller_id', $id)
            ->with('seller')
            ->get();

        if ($clients->count() > 0) {
            return ClientResource::collection($clients);
        }

        return response()->json([
            'message' => 'No clients found for the given seller id',
            'data' => []
        ], 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
