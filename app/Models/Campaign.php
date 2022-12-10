<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class campaign extends Model
{
    use HasFactory;
    protected $fillable = ['id', 'title', 'description', 'img1_url', 'zone'];
    public $timestamps = true;

    public function auction()
    {
        return $this->hasOne(Auction::class, 'campaign_id');
    }
}
