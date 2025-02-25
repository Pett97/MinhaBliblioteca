<?php

namespace Tests\Feature\Http\Controller;

use App\Http\Controllers\BookController;
use App\Models\Book;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\Request;
use Tests\TestCase;


class BookControllerTest extends TestCase
{
    use RefreshDatabase;
    private BookController $controller;
    private Collection $books;

    protected function setUp(): void
    {
        parent::setUp();
        $this->controller = new BookController();
        $this->books = Book::factory(2)->create();
    }

    public function test_can_get_all_books()
    {
        $response = $this->controller->index();

        $this->assertEquals(200, $response->getStatusCode());
        $this->assertCount(2, $response->getData());
    }

    public function test_can_get_one_book()
    {

        $book = $this->books->first();

        $response = $this->controller->show($book);

        $this->assertEquals(200, $response->getStatusCode());
    }

    public function test_can_update_a_book()
    {
        $book = Book::factory()->create([
            'name' => 'Xubuntu',
            'publication_date' => '2024-02-02'
        ]);

        $resquest = Request::create("api/book/{$book->id}", 'PUT', ['name' => "LivroAtualizado", 'publication_date' => "2025-02-12"]);

        $response = $this->controller->update($resquest, $book);

        $this->assertEquals(200, $response->getStatusCode());
        $book->refresh();
        $this->assertEquals('LivroAtualizado', $book->name);

        $this->assertDatabaseMissing('books', ['name' => "Xubuntu"]);
        $this->assertDatabaseHas('books', ['name' => "LivroAtualizado"]);
    }

    public function test_can_get_delte_a_book()
    {
        $book = $this->books->first();

        $response = $this->controller->destroy($book);

        $this->assertEquals(200, $response->getStatusCode());

        $this->assertDatabaseMissing('books', ['name' => $book->name]);
    }
}
