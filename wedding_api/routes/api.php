<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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
Route::post('/login', [AuthController::class, 'login']);

Route::middleware(['auth:sanctum'])->group(function(){
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::post('/profile', [UserController::class, 'index']);
    Route::post('/profile/update', [UserController::class, 'update']);
    // Route::post('/template', [TemplateController::class, 'index']);
    Route::post('/invitation', [InvitationController::class, 'index']);
    Route::post('/invitation/create', [InvitationController::class, 'create']);
});

Route::post('/invitation/bride', [BrideController::class, 'index']);
Route::post('/invitation/bride/create', [BrideController::class, 'create']);
Route::post('/invitation/groom', [GroomController::class, 'index']);
Route::post('/invitation/groom/create', [GroomController::class, 'create']);
Route::post('/invitation/place', [PlaceController::class, 'index']);
Route::post('/invitation/place/create', [PlaceController::class, 'create']);


Route::post('/guest', [GuestController::class, 'index']);
Route::post('/guest/send', [GuestController::class, 'send']);