<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SellersResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        // return parent::toArray($request);

        return [
            'id'        => $this->id,
            'firstname' => $this->firstname,
            'lastname'  => $this->lastname,
            'mobile'    => $this->mobile,
            'position'  => $this->position,
            'village'   => $this->village,
            'distric'   => $this->distric,
            'status'    => $this->status,
            'referd'    => $this->referd,
            'created_at' => $this->created_at->toDateTimeString(),
        ];
    }
}
