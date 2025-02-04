<?php

namespace App\Http\Controllers;

use App\Http\Resources\AutorResource;
use App\Models\Autor;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;

class AutorController extends Controller implements HasMiddleware
{

    public static function middleware()
    {
        return [
            new Middleware('auth:sanctum', except: [])
        ];
    }
    /**
     * Display a listing of the resource.
     */
    public function index(): JsonResponse
    {
        $autors = Autor::all();

        if ($autors->isEmpty()) {
            return response()->json(['message' => 'Nenhum autor foi encontrado']);
        }

        return response()->json(AutorResource::collection($autors));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): JsonResponse
    {
        $fields = $request->validate([
            'name' => 'required|max:255'
        ]);

        $autor = Autor::create($fields);

        return response()->json(['message' => 'Novo Autor Criado Com sucesso', "autor" => new AutorResource($autor)]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Autor $autor): JsonResponse
    {
        return response()->json([new AutorResource($autor)]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Autor $autor)
    {
        $fields = $request->validate([
            'name' => 'required|max:255'
        ]);

        $autor->update($fields);

        return response()->json(['message' => "Autor Atualizado com sucesso", "autor" => new AutorResource($autor)]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Autor $autor): JsonResponse
    {
        $autor->delete();

        return response()->json([
            'message' => 'Autor excluído com sucesso'
        ]);
    }
}
