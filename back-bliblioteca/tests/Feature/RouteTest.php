<?php

namespace Tests\Feature;

use App\Models\Autor;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Hash;
use Tests\TestCase;

class RouteTest extends TestCase
{
    private $userTeste;
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();

        $this->userTeste = User::factory()->create();

        Autor::factory(2)->create();
    }

    public function test_can_get_all_autors()
    {
        $response = $this->actingAs($this->userTeste)->get('/api/autor');

        $response->assertStatus(200);
    }

    public function test_can_get_one_autor()
    {
        $autor = Autor::first();
        $response = $this->actingAs($this->userTeste)->get("/api/autor/{$autor->id}");

        $response->assertStatus(200);
    }

    public function test_cant_get_one_autor()
    {
        $autor = Autor::first();
        $response = $this->get("/api/autor/{$autor->id}");

        $response->assertStatus(500);
    }
}
