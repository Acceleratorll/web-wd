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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('/register', [AuthController::class, 'register']);
// Route::post('/login', [AuthController::class, 'login']);

Route::get('/users', function () {
    $users = User::get();
    return response()->json($users);
});

// Route::get('/users/{id}', function ($id) {
//     $users = User::get();
//     return response()->json($users . $id);
// });

Route::get('/users/{id}', function ($id) {
    return 'users' . $id;
});


Route::middleware(['auth:sanctum'])->group(function () {
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/profile', [UserController::class, 'index']);
    Route::post('/profile/{id}', [UserController::class, 'update']);
    Route::post('/invitation', [InvitationController::class, 'createInvit']);
});

Route::post('login', [AuthController::class, 'login']);
Route::post('register', [AuthController::class, 'register']);

// ShareLinkGan
Route::get('/undangan/{id}', [GuestController::class, 'index']);

// GUEST
Route::post('/guest', [GuestController::class, 'index']);
Route::post('/guest/send', [GuestController::class, 'send']);

// Route::post('login', [App\Http\Controllers\API\AuthController::class, 'login'])->name('login');

// Route::group(['middleware' => 'api'], function () {
//     Route::post('logout', [AuthController::class, 'logout']);
//     Route::post('refresh', [AuthController::class, 'refresh']);
//     Route::post('me', [AuthController::class, 'me']);
// });

// Route::post('/invitation/bride', [BrideController::class, 'index']);
// Route::post('/invitation/bride/create', [BrideController::class, 'create']);
// Route::post('/invitation/groom', [GroomController::class, 'index']);
// Route::post('/invitation/groom/create', [GroomController::class, 'create']);
// Route::post('/invitation/place', [PlaceController::class, 'index']);
// Route::post('/invitation/place/create', [PlaceController::class, 'create']);
