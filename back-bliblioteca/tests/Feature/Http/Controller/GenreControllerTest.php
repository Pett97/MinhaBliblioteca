<?php

namespace Tests\Feature\Http\Controller;

use App\Http\Controllers\GenresController;
use App\Models\Genre;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Http\Request;
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

        $this->assertEquals(200, $response->getStatusCode());
        $this->assertCount(2, $response->getData());
    }

    public function test_can_get_one_genre()
    {
        $genero = $this->generos->first();
        $response = $this->controller->show($genero);

        $this->assertEquals(200, $response->getStatusCode());
        $this->assertCount(1, $response->getData());
        $this->assertNotCount(!2, $response->getData());
    }

    public function test_can_delete_one_genre()
    {
        $genero = $this->generos->first();
        $response = $this->controller->destroy($genero);

        $this->assertEquals(200, $response->getStatusCode());

        $this->assertDatabaseMissing('genres', ['name' => $genero->name]);
    }

    public function test_can_update_one_genre()
    {
        $genero = Genre::factory()->create(['name' => 'AntigoGenero']);

        $request = Request::create("api/genre/{$genero->id}", 'PUT', ["name" => "NovoGenero"]);

        $response = $this->controller->update($request, $genero);

        $this->assertEquals(200, $response->getStatusCode());

        $genero->refresh();

        $this->assertEquals('NovoGenero', $genero->name);

        $this->assertDatabaseMissing('genres', ['name' => 'AntigoGenero']);

        $this->assertDatabaseHas('genres', ['name' => "NovoGenero"]);
    }
}
