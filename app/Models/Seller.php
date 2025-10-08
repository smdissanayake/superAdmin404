<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Seller extends Model
{
    use HasFactory;


    // table name (optional, Laravel auto detects plural form)
    protected $table = 'sellers';

    // fillable fields
    protected $fillable = [
        'firstname',
        'lastname',
        'mobile',
        'password',
        'position',
        'village',
        'distric',
        'status',
        'referd',
    ];
    public function clients()
    {
        return $this->hasMany(Client::class);
    }


    // hide password when sending JSON
    protected $hidden = [
        'password',
    ];
}
