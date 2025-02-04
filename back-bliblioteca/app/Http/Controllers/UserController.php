<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

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

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        $user = User::where('email', $request->email)->first();

        if (!$user) {
            return response()->json(['message' => "Não Foi encontrado nenhum usuario com esse email"]);
        }

        if ($user && !Hash::check($request->password, $user->password)) {
            return response()->json(['message' => 'senha não confere']);
        }

        $token = $user->createToken($user->name);
        return response()->json(['message' => "login efetuado com sucesso", "user" => $user, "token" => $token->plainTextToken]);
    }
}
