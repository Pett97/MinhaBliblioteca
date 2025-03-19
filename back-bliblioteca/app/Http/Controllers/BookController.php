<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Log;
use App\Http\Resources\BookResource;
use App\Models\Book;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;

class BookController extends Controller implements HasMiddleware
{

    public static function middleware()
    {
        return [
            new Middleware('auth:sanctum', except: [])
        ];
    }

    public function index(): JsonResponse
    {
        $books = Book::all();

        if ($books->isEmpty()) {
            return response()->json(['message' => "Nenhum Livro Foi Encontrado"]);
        }

        return response()->json(BookResource::collection($books));
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): JsonResponse
    {
        $fields = $request->validate([
            'name' => 'required|max:255',
            'publication_date' => 'required|date_format:Y-m-d'
        ]);

        if($request->has('select_genero_book')){
            $fields['genre_id'] = $request['select_genero_book'];
        }

        if($request->has('select_autor_book')){
            $fields['autor_id'] = $request["select_autor_book"];
        }

        if($request->has("pages")){
            $fields['pages'] = $request['pages'];
        }

        $book = Book::create($fields);

        return response()->json(['message' => "Novo Livro criado com sucesso", "Livro:" => new BookResource($book)]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Book $book): JsonResponse
    {
        return response()->json([new BookResource($book)]);
    }

    public function update(Request $request, Book $book): JsonResponse
    {
        $fields = $request->validate([
            'name' => 'required|max:255',
            'publication_date' => 'required|date_format:Y-m-d'
        ]);

        $book->update($fields);

        return response()->json(['message' => "Livro Atualizado com sucesso", "Livro" => new BookResource($book)]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Book $book)
    {
        $book->delete();

        return response()->json(['message' => "Livro Excluido Com Sucesso"]);
    }
}
