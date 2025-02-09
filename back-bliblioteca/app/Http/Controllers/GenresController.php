<?php

namespace App\Http\Controllers;

use App\Http\Resources\GenreResource;
use App\Models\Genre;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;

class GenresController extends Controller implements HasMiddleware
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
        $Genres = Genre::all();

        if ($Genres->isEmpty()) {
            return response()->json(['message' => 'Nenhum Genero foi encontrado']);
        }

        return response()->json(GenreResource::collection($Genres));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): JsonResponse
    {
        $fields = $request->validate([
            'name' => 'required|max:255'
        ]);

        $Genre = Genre::create($fields);

        return response()->json(['message' => 'Novo Genero Criado Com sucesso', "Genero" => new GenreResource($Genre)]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Genre $Genre): JsonResponse
    {
        return response()->json([new GenreResource($Genre)]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Genre $Genre)
    {
        $fields = $request->validate([
            'name' => 'required|max:255'
        ]);

        $Genre->update($fields);

        return response()->json(['message' => "Genero Atualizado com sucesso", "Genero" => new GenreResource($Genre)]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Genre $Genre): JsonResponse
    {
        $Genre->delete();

        return response()->json([
            'message' => 'Genero excluído com sucesso'
        ]);
    }
}
