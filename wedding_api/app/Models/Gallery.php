<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Gallery extends Model
{
    protected $fillable = [
        'invitation_id',
        'name'
    ];
    use HasFactory;

    public function invitation()
    {
        return $this->belongsTo(Invitations::class);
    }
}
