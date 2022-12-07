<?php

namespace App\Http\Controllers;

use App\Models\Campaign;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class CampaignController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        Log::info('show all campaign');
        $campaigns = Campaign::All();
        return response()->json($campaigns);
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
        // $request->validate([
        //     'title' => 'required',
        //     'desc' => 'required',
        //     'img1_url' => 'required',
        //     'img2_url' => 'required',
        //     'zone' => 'required'
        // ]);

        $campaign = Campaign::create($request->all());

        return response()->json([
            'message' => 'campaign created',
            'campaign' => $campaign
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\campaign  $campaign
     * @return \Illuminate\Http\Response
     */
    public function show(Campaign $campaign)
    {
        return $campaign;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\campaign  $campaign
     * @return \Illuminate\Http\Response
     */
    public function edit(campaign $campaign)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Campaign  $campaign
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Campaign $campaign)
    {
        // $request->validate([
        //     'title' => 'required',
        //     'desc' => 'required',
        //     'img1_url' => 'required',
        //     'img2_url' => 'required',
        //     'zone' => 'required'
        // ]);
        
        Log::info($request->input('title'));
        $campaign->title = $request->input('title');
        $campaign->description = $request->input('description');
        $campaign->img1_url = $request->input('img1_url');
        $campaign->zone = $request->input('zone');
        
        $campaign->save();

        return response()->json([
            'message' => 'campaign updated!',
            'campaign' => $campaign
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\campaign  $campaign
     * @return \Illuminate\Http\Response
     */
    public function destroy(campaign $campaign)
    {
        //
    }
}