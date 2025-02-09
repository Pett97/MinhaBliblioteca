<?php

namespace Tests\Feature\Http\Route;

use App\Models\Genre;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class RouteGenreTest extends TestCase
{
    use RefreshDatabase;

    private $userTeste;
    private $generos;
    private $baseUrl = "/api/genre";

    protected function setUp(): void
    {
        parent::setUp();
        $this->userTeste = User::factory()->create();
        $this->generos = Genre::factory(3)->create();
    }

    public function test_can_get_all_genres()
    {
        $response = $this->actingAs($this->userTeste)->json('GET', $this->baseUrl);

        $response->assertStatus(200);
    }

    public function test_cant_get_any_genre()
    {
        $response = $this->json('GET', $this->baseUrl);

        $response->assertStatus(401);
    }

    public function test_can_get_one_genre()
    {
        $generoId = $this->generos->first()->id;

        $response = $this->actingAs($this->userTeste)->json('GET', "{$this->baseUrl}/$generoId");

        $response->assertStatus(200);
    }

    public function test_cant_get_one_genre()
    {
        $generoId = $this->generos->first()->id;

        $response = $this->json('GET', "{$this->baseUrl}/$generoId");

        $response->assertStatus(401);
    }

    public function test_can_delete_one_genre()
    {
        $generoId = $this->generos->first()->id;

        $response = $this->actingAs($this->userTeste)->json('DELETE', "{$this->baseUrl}/$generoId");

        $response->assertStatus(200);
    }

    public function test_cant_delete_one_genre()
    {
        $generoId = $this->generos->first()->id;

        $response = $this->json('DELETE', "{$this->baseUrl}/$generoId");

        $response->assertStatus(401);
    }

    public function test_can_update_one_genre()
    {
        $generoId = $this->generos->first()->id;

        $newDataGenre =  ["name" => "novoNomeGenero"];

        $response = $this->actingAs($this->userTeste)->json('PUT', "{$this->baseUrl}/$generoId", $newDataGenre);

        $response->assertStatus(200);
    }

    public function test_cant_update_one_genre()
    {
        $generoId = $this->generos->first()->id;

        $newDataGenre =  ["name" => "novoNomeGenero"];

        $response = $this->json('PUT', "{$this->baseUrl}/$generoId", $newDataGenre);

        $response->assertStatus(401);
    }
}
