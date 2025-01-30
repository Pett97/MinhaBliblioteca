<?php

use App\Http\Controllers\AutorController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;


Route::group(['prefix' => 'user', 'as' => 'user.'], function () {
    Route::post('create', [UserController::class, 'create']);
    Route::post('login', [UserController::class, 'login']);
});

Route::apiResource('autor', AutorController::class);
