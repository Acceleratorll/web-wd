<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Bride\CreateBrideRequest;
use App\Models\Brides;
use App\Models\Gallery;
use App\Models\Groom;
use App\Models\Invitations;
use App\Models\Place;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// require 'PHPMailer-master/src/Exception.php';
// require 'PHPMailer-master/src/PHPMailer.php';
// require 'PHPMailer-master/src/SMTP.php';

class InvitationController extends Controller
{
    public function share()
    {
        // $validator = Validator::make($request->all(), [
        //     'email' => 'required|email|unique:subscribers'
        // ]);
        // if ($validator->fails()) {
        //     return new JsonResponse(
        //         [
        //             'success' => false,
        //             'message' => $validator->errors()
        //         ],
        //         422
        //     );
        // }
        // $email = $request->all()['email'];
        // $subscriber = Subscriber::create([
        //     'email' => $email
        // ]);
        // if ($subscriber) {
        //     Mail::to($email)->send(new Subscribe($email));
        //     return new JsonResponse(
        //         [
        //             'success' => true,
        //             'message' => "Thank you for subscribing to our email, please check your inbox"
        //         ],
        //         200
        //     );
        // }
    }

    public function index(){
        $user_id = auth()->user()->id;
        $invi = Invitations::where('user_id', $user_id)->get();
        return response()->json(['success' => true, 'data' => [
            'invi' => $invi,
        ]]);
    }

    public function show($id){
        $invi = Invitations::where('id', $id)->get();
        $bride = Brides::where('invitation_id', $id)->get();
        $groom = Groom::where('invitation_id', $id)->get();
        $place = Place::where('invitation_id', $id)->get();
        $gallery = Gallery::where('invitation_id', $id)->get();
        return response()->json(['success' => true, 'data' =>[
            'invi' => $invi,
            'bride' => $bride,
            'groom' => $groom,
            'place' => $place,
            'gallery' => $gallery
        ]]);
    }

    public function createInvit(Request $request)
    {
        $invitation = Invitations::create([
            'template_id' => $request['template_id'],
            'user_id' => auth()->user()->id,
            'date' => $request['date'],
            'time_start' => $request['time_start'],
            'time_end' => $request['time_end'],
        ]);

        $invit_id = $invitation->id;
        
        $bride = $this->createBride($request, $invit_id);
        $groom = $this->createGroom($request, $invit_id);
        $place = $this->createPlace($request, $invit_id);
        $gallery = $this->createGallery($request, $invit_id);
        
        return response()->json(['success' => true, 'data' => [
            'invi' => $invitation, 
            'bride' => $bride,
            'groom' => $groom,
            'place' => $place,
            'gallery' => $gallery
            ]]);
    }


    public function createBride($request, $invit_id)
    {
        $bride = Brides::create([
            'invitation_id' => $invit_id,
            'name' => $request['name'],
            'father' => $request['father'],
            'mother' => $request['mother'],
        ]);
        return $bride;
    }

    public function createGroom($request, $invit_id)
    {
        $groom = Groom::create([
            'invitation_id' => $invit_id,
            'name' => $request['name_groom'],
            'father' => $request['father_groom'],
            'mother' => $request['mother_groom'],
        ]);
        return $groom;
    }

    public function createPlace($request, $invit_id)
    {
        $place = Place::create([
            'name' => $request['name_place'],
            'invitation_id' => $invit_id,
            'place_desc' => $request['place_desc'],
        ]);
        return $place;
    }

    public function createGallery($request, $invit_id)
    {
        $gallery = Gallery::create([
            'name' => $request['name_gallery'],
            'invitation_id' => $invit_id,
        ]);
        return $gallery;
    }

}
