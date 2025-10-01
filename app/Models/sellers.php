<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class sellers extends Model
{
    use HasFactory;

    protected $table = 'sellers';

    protected $fillable = [

        'firstname',
        'lastname',
        'mobile'

    ];
}
