<?php

use App\Http\Controllers\Api\AuthController;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('/register', [AuthController::class, 'register']);
// Route::post('/login', [AuthController::class, 'login']);

Route::get('/users', function () {
    $users = User::get();
    return response()->json($users);
});

Route::middleware(['auth:sanctum'])->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/profile', [UserController::class, 'index']);
    Route::post('/profile/{id}', [UserController::class, 'update']);
    Route::post('/invitation', [InvitationController::class, 'create']);
});

// ShareLinkGan
Route::get('/undangan/{id}', [GuestController::class, 'index']);

// GUEST
Route::post('/guest', [GuestController::class, 'index']);
Route::post('/guest/send', [GuestController::class, 'send']);
