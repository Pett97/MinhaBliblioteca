<?php

namespace Tests\Feature\Http\Route;

use App\Models\Autor;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class RouteAutorTest extends TestCase
{
    use RefreshDatabase;

    private $userTeste;

    protected function setUp(): void
    {
        parent::setUp();

        $this->userTeste = User::factory()->create();
        Autor::factory(2)->create();
    }

    public function test_can_get_all_autors()
    {
        $response = $this->actingAs($this->userTeste)->json('GET', '/api/autor');

        $response->assertStatus(200);
    }

    public function test_cant_get_all_autors()
    {
        $response = $this->json('GET', '/api/autor');

        $response->assertStatus(401);
    }

    public function test_can_get_one_autor()
    {
        $autor = Autor::first();

        $response = $this->actingAs($this->userTeste)->json('GET', "/api/autor/{$autor->id}");

        $response->assertStatus(200);
    }

    public function test_cant_get_one_autor()
    {
        $autor = Autor::first();

        $response = $this->json('GET', "/api/autor/{$autor->id}");

        $response->assertStatus(401);
    }

    public function test_can_update_one_autor()
    {
        $autor = Autor::first();

        $newDataAutor = ['name' => "atualizarNome"];

        $response = $this->actingAs($this->userTeste)
            ->json('PUT', "/api/autor/{$autor->id}", $newDataAutor);

        $response->assertStatus(200);

        $this->assertDatabaseMissing('autors', ['name' => $autor->name]);
        $this->assertDatabaseHas('autors', ['id' => $autor->id, 'name' => $newDataAutor['name']]);
    }

    public function test_cant_update_one_autor()
    {
        $autor = Autor::first();

        $newDataAutor = ['name' => "atualizarNome"];

        $response = $this->json('PUT', "/api/autor/{$autor->id}", $newDataAutor);

        $response->assertStatus(401);
    }

    public function test_can_delete_one_autor()
    {
        $autor = Autor::first();

        $response = $this->actingAs($this->userTeste)
            ->json('DELETE', "/api/autor/{$autor->id}");

        $response->assertStatus(200);
        $this->assertDatabaseMissing('autors', ['id' => $autor->id]);
    }

    public function test_cant_delete_one_autor()
    {
        $autor = Autor::first();

        $response = $this->json('DELETE', "/api/autor/{$autor->id}");

        $response->assertStatus(401);
    }
}
