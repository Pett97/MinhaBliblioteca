<?php

namespace Tests\Unit;

use App\Models\Book;
use App\Models\Genre;
use App\Models\Autor;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class BookTest extends TestCase
{
    use RefreshDatabase;

    private Book $bookTest;

    protected function setUp(): void
    {
        parent::setUp();
        $this->bookTest = Book::factory()->create();
    }

    public function test_can_create_a_book()
    {
        $this->assertDatabaseHas('books', ['name' => $this->bookTest->name]);
    }

    public function test_can_update_name_of_a_book()
    {   
        $this->assertDatabaseHas('books', ['name' => $this->bookTest->name]);

        $nomeOriginal = $this->bookTest->name;

        $this->bookTest->update(['name' => "Nome Alterado"]);
        $this->bookTest->refresh();

        $this->assertDatabaseHas('books', ['name' => 'Nome Alterado']);
        $this->assertDatabaseMissing('books', ['name' => $nomeOriginal]);
    }

    public function test_can_update_genre_of_a_book()
    {
        $oldGenre = $this->bookTest->genre_id;
        $newGenre = Genre::factory()->create();

        $this->bookTest->update(['genre_id' => $newGenre->id]);
        $this->bookTest->refresh();

        $this->assertDatabaseHas('books', ['id' => $this->bookTest->id, 'genre_id' => $newGenre->id]);
        $this->assertDatabaseMissing('books', ['id' => $this->bookTest->id, 'genre_id' => $oldGenre]);
    }

    public function test_can_update_autor_of_a_book()
    {
        $oldAutor = $this->bookTest->autor_id;
        $newAutor = Autor::factory()->create();

        $this->bookTest->update(['autor_id' => $newAutor->id]);
        $this->bookTest->refresh();

        $this->assertDatabaseHas('books', ['id' => $this->bookTest->id, 'autor_id' => $newAutor->id]);
        $this->assertDatabaseMissing('books', ['id' => $this->bookTest->id, 'autor_id' => $oldAutor]);
    }

    public function test_can_update_pages_of_a_book()
    {
        $oldPages = $this->bookTest->pages;
        $newPages = 250;

        $this->bookTest->update(['pages' => $newPages]);
        $this->bookTest->refresh();

        $this->assertDatabaseHas('books', ['id' => $this->bookTest->id, 'pages' => $newPages]);
        $this->assertDatabaseMissing('books', ['id' => $this->bookTest->id, 'pages' => $oldPages]);
    }

    public function test_can_update_publication_date_of_a_book()
    {
        $oldDate = $this->bookTest->publication_date;
        $newDate = now()->subYears(5)->format('Y-m-d');

        $this->bookTest->update(['publication_date' => $newDate]);
        $this->bookTest->refresh();

        $this->assertDatabaseHas('books', ['id' => $this->bookTest->id, 'publication_date' => $newDate]);
        $this->assertDatabaseMissing('books', ['id' => $this->bookTest->id, 'publication_date' => $oldDate]);
    }
}
