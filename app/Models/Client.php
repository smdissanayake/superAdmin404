<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    use HasFactory;

    protected $table = 'clients';

    protected $fillable = [
        'seller_id',
        'firstname',
        'shopname',
        'mobile',
        'latitude',
        'longitude',
        'address',
        'village',
        'district',
        'buying_status',
        'payment_status',
        'payment_date',
        'payment_amount',
        'note',
        'status',
    ];

   public function seller()
    {
        return $this->belongsTo(Seller::class);
    }
}
 