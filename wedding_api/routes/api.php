<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\InvitationController;
use App\Http\Controllers\Api\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\User;

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

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::middleware(['auth:sanctum'])->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/profile', [UserController::class, 'index']);
    Route::post('/profile/{id}', [UserController::class, 'update']);
    Route::post('/invitation', [InvitationController::class, 'createInvit']);
});

// ShareLinkGan
Route::get('/undangan/{id}', [GuestController::class, 'index']);

// GUEST
Route::post('/tamu', [GuestController::class, 'index']);
Route::post('/guest/send', [GuestController::class, 'send']);

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

// Route::get('/users', function () {
    //     $users = User::get();
    //     return response()->json($users);
    // });
    
    // Route::get('/users/{id}', function ($id) {
        //     $users = User::get();
//     return response()->json($users . $id);
// });

// Route::get('/users/{id}', function ($id) {
//     return 'users' . $id;
// });