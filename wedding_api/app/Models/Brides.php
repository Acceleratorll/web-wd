<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Brides extends Model
{
    protected $fillable = [
        'name',
        'father',
        'mother',
    ];

    use HasFactory;

    public function invitation()
    {
        return $this->belongsTo(Invitations::class);
    }
}
