<?php

use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Models\User;
use Illuminate\Support\Facades\Redirect;

Route::get('/', function () {
    return Redirect::route('login');
});


Route::get('/fotourgjente', function () {
    return Inertia::render('FotoUrgjente');
})->middleware(['auth', 'verified'])->name('fotourgjente');

Route::get('/shperndarjeurgjente', function () {
    return Inertia::render('ShperndarjeUrgjente', ['users' => User::all()]);
})->middleware(['auth', 'verified'])->name('shperndarjeurgjente');




Route::get('/raporturgjent', function () {
    return Inertia::render('RaportUrgjent');
})->middleware(['auth', 'verified'])->name('raporturgjent');

Route::get('/fotonormale', function () {
    return Inertia::render('FotoNormale');
})->middleware(['auth', 'verified'])->name('fotonormale');

Route::get('/shperndarjenormale', function () {
    return Inertia::render('ShperndarjeNormale', ['users' => User::all()]);
})->middleware(['auth', 'verified'])->name('shperndarjenormale');

Route::get('/raportnormal', function () {
    return Inertia::render('RaportNormal');
})->middleware(['auth', 'verified'])->name('raportnormal');

Route::get('/fototndryshe', function () {
    return Inertia::render('FototNdryshe');
})->middleware(['auth', 'verified'])->name('fototndryshe');

Route::get('/shperndarjendryshe', function () {
    return Inertia::render('ShperndarjeNdryshe', ['users' => User::all()]);
})->middleware(['auth', 'verified'])->name('shperndarjendryshe');

Route::get('/fotorikontroll', function () {
    return Inertia::render('FotoRikontroll');
})->middleware(['auth', 'verified'])->name('fotorikontroll');

Route::get('/shperndarjerikontroll', function () {
    return Inertia::render('ShperndarjeRikontroll', ['users' => User::all()]);
})->middleware(['auth', 'verified'])->name('shperndarjerikontroll');



//Route::post('/users', [UserController::class, 'myUsers'])->middleware(['auth', 'verified'])->name('myUsers');



// Route::get('/users', [UserController::class, 'myUsers'])->middleware(['auth', 'verified'])->name('myUsers');




Route::controller(UserController::class)->group(function () {
    Route::get('/users', 'edit')->name('users');
    Route::get('/user/{id}', 'editUser')->name('users.edit');
    Route::post('/user/{id}', 'updateUser')->name('users.update');
    Route::delete('/user/{id}', 'deleteUser')->name('users.delete');
    Route::post('/newRegistry', 'newRegistry')->name('users.registry');
})->middleware(['auth', 'verified']);


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
