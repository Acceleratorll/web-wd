<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Place extends Model
{
    protected $fillable = [
        'name',
        'place_desc',
    ];
    use HasFactory;
    
    public function invitation()
    {
        return $this->belongsTo(Invitations::class);
    }
}
