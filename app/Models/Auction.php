<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class auction extends Model
{
    use HasFactory;
    protected $fillable = ['nft_id', 'campaign_id', 'status', 'endAt'];
    public $timestamps = true;

    public function campaign()
    {
        return $this->belongsTo(Campaign::class, 'campaign_id');
    }
}
