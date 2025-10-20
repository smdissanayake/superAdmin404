<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ClientResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id'        => $this->id,
            'firstname' => $this->firstname,
            'shopname'  => $this->shopname,
            'mobile'    => $this->mobile,
            'latitude'  => $this->latitude,
            'longitude' => $this->longitude,
            'seller_id' => $this->seller_id,

                        'seller_name' => $this->whenLoaded('seller')
                ? trim(($this->seller->firstname ?? '') . ' ' . ($this->seller->lastname ?? '')) ?: null
                : ($this->seller ? trim(($this->seller->firstname ?? '') . ' ' . ($this->seller->lastname ?? '')) ?: null 
                : null),
        ];
    }
}
