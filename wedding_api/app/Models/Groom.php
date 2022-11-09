<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Groom extends Model
{
    use HasFactory;
    
    public function invitation()
    {
        return $this->belongsTo(Invitations::class);
    }
}
