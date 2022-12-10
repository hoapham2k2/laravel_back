<?php

namespace App\Http\Controllers;

use App\Models\Auction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\DB;

class AuctionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // $auction = Auction::select('nft_id')->join('campaigns', 'auctions.campaign_id', '=', 'campaigns.id');
        $auction = DB::table('auctions')->join('campaigns', 'auctions.campaign_id', '=', 'campaigns.id')->select('auctions.*', 'campaigns.*')->get();
        return response()->json($auction);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'nft_id' => 'required',
            'campaign_id' => 'required',
            'status' => 'required'
        ]);

        $auction = Auction::create($request->all());

        return response()->json([
            'message' => 'auction created',
            'auction' => $auction
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\auction  $auction
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $auction = DB::table('auctions')->join('campaigns', 'auctions.campaign_id', '=', 'campaigns.id')->select('auctions.*', 'campaigns.*')->where('nft_id', $id)->get()->first();

        return $auction;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\auction  $auction
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $auction = DB::table('auctions')->where('nft_id', $id)->get()->first();
        $auction->status = "Done";
        
        $auction->save();

        return response()->json([
            'message' => 'auction updated!',
            'auction' => $auction
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\auction  $auction
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, auction $auction)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\auction  $auction
     * @return \Illuminate\Http\Response
     */
    public function destroy(auction $auction)
    {
        //
    }

     /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\auction  $auction
     * @return \Illuminate\Http\Response
     */
    public function updateStatus($id)
    {
        Auction::where('nft_id', $id)->update(array('status' => "Done"));
        

        return response()->json([
            'message' => 'auction updated!',
        ]);
    }
}
