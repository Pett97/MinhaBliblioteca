<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class UserController extends Controller
{

    /**
     * cria um usuario no banco 
     */
    public function create(Request $request): JsonResponse
    {
        $fields = $request->validate([
            'name' => 'required|max:255',
            'email' => 'required|email|unique:users',
            'password' => 'required|confirmed'
        ]);

        $user = User::create($fields);

        $token = $user->createToken($request->name);

        return response()->json(['message' => "Usuario Criado Com Sucesso", 'user' => [
            'name' => $user->name,
            'email' => $user->email,
            'token' => $token->plainTextToken
        ]]);
    }
}
