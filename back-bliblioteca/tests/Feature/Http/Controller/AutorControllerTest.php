<?php

namespace Tests\Feature\Http\Controller;

use App\Http\Controllers\AutorController;
use App\Models\Autor;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\Request;
use Tests\TestCase;

class AutorControllerTest extends TestCase
{

    use RefreshDatabase;

    private AutorController $controller;

    protected function setUp(): void
    {
        parent::setUp();
        Autor::factory(2)->create();
        $this->controller = new AutorController();
    }

    public function test_can_get_all_autors()
    {
        $response = $this->controller->index();

        $this->assertEquals(200, $response->getStatusCode());
        $this->assertCount(2, $response->getData(true));
    }

    public function test_can_get_one_autor()
    {
        $autor = Autor::first();
        $response = $this->controller->show($autor);

        $this->assertEquals(200, $response->getStatusCode());
        $this->assertCount(1, $response->getData(true));
    }

    public function test_can_update_the_autor()
    {
        $autor = Autor::first();


        $request = Request::create("/api/autors/{$autor->id}", 'PUT', ['name' => "Fulana123"]);


        $response = $this->controller->update($request, $autor);


        $this->assertEquals(200, $response->getStatusCode());


        $this->assertDatabaseHas('autors', [
            'id' => $autor->id,
            'name' => 'Fulana123'
        ]);
    }

    public function test_can_delete_one_autor()
    {
        $autor = Autor::first();

        $response = $this->controller->destroy($autor);


        $this->assertEquals(200, $response->getStatusCode());


        $this->assertDatabaseMissing('autors', [
            'name' => $autor->name
        ]);
    }
}
