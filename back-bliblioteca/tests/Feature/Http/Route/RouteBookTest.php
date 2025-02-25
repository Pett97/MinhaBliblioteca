<?php

namespace Tests\Feature\Http\Route;

use App\Models\Book;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class RouteBookTest extends TestCase
{
    use RefreshDatabase;

    private $userTeste;
    private $books;
    private $baseUrl = "/api/book";

    protected function setUp(): void
    {
        parent::setUp();
        $this->userTeste = User::factory()->create();
        $this->books = Book::factory(2)->create();
    }

    public function test_can_get_all_books()
    {
        $response = $this->actingAs($this->userTeste)->json('GET', $this->baseUrl);

        $response->assertStatus(200);
    }

    public function test_cant_get_all_books()
    {
        $response = $this->json('GET', $this->baseUrl);


        $response->assertStatus(401);
    }


    public function test_can_get_one_book()
    {
        $bookId = $this->books->first()->id;

        $response = $this->actingAs($this->userTeste)->json('GET', "{$this->baseUrl}/$bookId");

        $response->assertStatus(200);
    }

    public function test_cant_get_one_book()
    {
        $bookId = $this->books->first()->id;

        $response = $this->json('GET', "{$this->baseUrl}/$bookId");

        $response->assertStatus(401);
    }

    public function test_can_delete_one_book()
    {
        $bookId = $this->books->first()->id;

        $response = $this->actingAs($this->userTeste)->json('DELETE', "{$this->baseUrl}/$bookId");

        $response->assertStatus(200);
    }

    public function test_cant_delete_one_book()
    {
        $bookId = $this->books->first()->id;

        $response = $this->json('DELETE', "{$this->baseUrl}/$bookId");

        $response->assertStatus(401);
    }

    public function test_can_update_one_book()
    {
        $bookId = $this->books->first()->id;

        $newDataBook =  ["name" => "novoNomeGenero", 'publication_date' => "2025-12-12"];

        $response = $this->actingAs($this->userTeste)->json('PUT', "{$this->baseUrl}/$bookId", $newDataBook);

        $response->assertStatus(200);
    }

    public function test_cant_update_one_book()
    {
        $bookId = $this->books->first()->id;

        $newDataBook =  ["name" => "novoNomeGenero", 'publication_date' => "2025-12-12"];

        $response = $this->json('PUT', "{$this->baseUrl}/$bookId", $newDataBook);

        $response->assertStatus(401);
    }
}
