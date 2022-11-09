<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Invitations extends Model
{
    use HasFactory;
    
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    
    public function template()
    {
        return $this->belongsTo(Template::class);
    }

    
    public function gallery()
    {
        return $this->hasMany(Gallery::class);
    }
    
    public function brides()
    {
        return $this->hasMany(Brides::class);
    }

    
    public function groom()
    {
        return $this->hasMany(Groom::class);
    }
    
    public function guest()
    {
        return $this->hasMany(Guest::class);
    }
    
    public function place()
    {
        return $this->hasMany(Place::class);
    }
}
