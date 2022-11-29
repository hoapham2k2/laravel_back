<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class transaction extends Model
{
    use HasFactory;
    protected $fillable = ['trans_id', 'account_address', 'amount', 'is_nft_trans'];
    public $timestamps = true;

    
}
