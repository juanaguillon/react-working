<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{

    protected $primaryKey = "id";

    
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', "id"
    ];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [
        'pass'
        
    ];
}
