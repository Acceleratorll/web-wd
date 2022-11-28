<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Requests\admin\CreateTemplateeRequest;
use App\Models\Template;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function index(){
        $template = Template::all();
        return response()->json(['success' => true, 'data' => $template]);
    }

    public function add(CreateTemplateeRequest $Request){
        $tmp = Template::create([
            'name' => request('name'),
            'desc' => request('desc'),
        ]);

        return response()->json(['success' => true, 'data'=>$tmp]);
    }
}
