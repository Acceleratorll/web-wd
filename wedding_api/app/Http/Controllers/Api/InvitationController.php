<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Bride\CreateBrideRequest;
use App\Models\Invitations;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer-master/src/Exception.php';
require 'PHPMailer-master/src/PHPMailer.php';
require 'PHPMailer-master/src/SMTP.php';

class InvitationController extends Controller
{
    public function createInvit(Request $request)
    {

        $invitation = Invitations::create([
            'template_id' => $request['template_id'],
            'email' => $request['email'],
            'password' => $request['password'],
        ]);

        $this->createBride($request);
    }

    public function createBride($request)
    {
        $Bride = Invitations::create([
            'name' => $request['name'],
            'email' => $request['email'],
            'password' => $request['password'],
        ]);
    }

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
}
