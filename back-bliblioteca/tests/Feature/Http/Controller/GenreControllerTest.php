<?php

namespace Tests\Feature\Http\Controller;

use App\Http\Controllers\GenresController;
use App\Models\Genre;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class GenreControllerTest extends TestCase
{
    use RefreshDatabase;
    private GenresController $controller;
    private Collection $generos;

    protected function setUp(): void
    {
        parent::setUp();
        $this->controller = new GenresController();
        $this->generos = Genre::factory(2)->create();
    }

    public function test_can_list_all_genres()
    {
        $response = $this->controller->index();

        $this->assertEquals(200,$response->getStatusCode());
        $this->assertCount(2,$response->getData());
    }

    public function test_can_get_one_genre()
    {
        $genero = $this->generos->first();
        $response = $this->controller->show($genero);

        $this->assertEquals(200,$response->getStatusCode());
        $this->assertCount(1,$response->getData());
        $this->assertNotCount(!2,$response->getData());
    }
}
