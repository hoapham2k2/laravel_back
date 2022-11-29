<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class campaign extends Model
{
    use HasFactory;
    protected $fillable = ['id', 'title', 'desc', 'img1_url','img2_url', 'zone'];
    public $timestamps = true;

    public function auction()
    {
        return $this->hasOne(Auction::class, 'campaign_id');
    }
}
