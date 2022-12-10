<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\CampaignController;
use App\Http\Controllers\AuctionController;
use App\Http\Controllers\TransactionController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::post('/camp', [CampaignController::class, 'store']);
Route::put('/camp/{campaign}', [CampaignController::class, 'update']);
Route::get('/camp', [CampaignController::class, 'index']);
Route::get('/camp/{campaign}', [CampaignController::class, 'show']);
Route::post('/auction', [AuctionController::class, 'store']);
Route::put('/auction/{id}', [AuctionController::class, 'updateStatus']);
Route::get('/auction', [AuctionController::class, 'index']);
Route::get('/auction/{id}', [AuctionController::class, 'show']);
Route::post('/trans', [TransactionController::class, 'store']);
Route::get('/trans', [TransactionController::class, 'index']);
Route::get('/trans/{id}', [TransactionController::class, 'show']);
