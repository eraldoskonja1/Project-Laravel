<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;
use App\Http\Controllers\Controller;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // Logic to fetch and display a list of users
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        // Logic to display a form for creating a new user
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // Logic to store a newly created user
    }
    public function edit(Request $request)
    {
        $allUsers = User::all();
        return Inertia::render('Users', [
            'users' => $allUsers,

        ]);
    }

    public function editUser($id)
    {
        $user = User::find($id);
        return Inertia::render('User/Edit', [
            'user' => $user
        ]);
    }
    public function updateUser($id, Request $request)
    {
        $user = User::find($id);
        $user->name = $request->name;
        // $user->email = $request->email;
        $user->password = $request->password;
        $user->update();
        return redirect()->route('users');
    }
    public function deleteUser($id)
    {
        $user = User::find($id);
        $user->delete();
        return redirect()->route('users');
    }
    public function newRegistry(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
            // 'email' => 'required|string|lowercase|email|max:255|unique:' . User::class,
            'password' => ['required', Rules\Password::defaults()],
        ]);

        $roleMapping = [
            'admin' => 1,
            'operator' => 2,
        ];
        
        $user = User::create([
            'name' => $request->name,
            // 'email' => $request->email,
            'role_id' => $roleMapping[$request->role],
            'password' => Hash::make($request->password),
        ]);

        event(new Registered($user));


        return redirect(route('users'));
    }

    
    // Other controller methods such as show(), edit(), update(), destroy(), etc.
}
