<?php

namespace Tests\Unit;

use App\Models\Autor;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class AutorTest extends TestCase
{
    use RefreshDatabase;
    public function test_should_can_get_the_name_of_autor()
    {
        $newAutor = new Autor(['name' => "ChicoTeste"]);

        $this->assertEquals("ChicoTeste", $newAutor->name);
    }

    public function test_should_can_change_the_name_of_autor()
    {
        $newAutor = new Autor(['name' => "KikoTeste"]);

        $this->assertEquals("KikoTeste", $newAutor->name);

        $newAutor->name = "FulanoTeste";

        $this->assertEquals("FulanoTeste", $newAutor->name);
    }

    public function test_can_save_the_autor_in_database()
    {
        $newAutor = Autor::factory()->create(['name' => 'AutorTeste']);

        $this->assertDatabaseHas('autors', [
            'name' => $newAutor->name,
        ]);
    }

    public function test_can_delete_the_autor_in_database()
    {
        $newAutor = Autor::factory()->create(['name' => 'AutorTeste']);

        $this->assertDatabaseHas('autors', [
            'name' => $newAutor->name,
        ]);

        $newAutor->delete();

        $this->assertDatabaseMissing('autors', ['name' => $newAutor->name]);
    }

    public function test_can_update_autor_name_in_database()
    {
        $newAutor = Autor::factory()->create(['name' => 'AutorTeste']);

        $this->assertDatabaseHas('autors', [
            'name' => $newAutor->name,
        ]);

        $newAutor->update(['name' => "Juliana"]);

        $this->assertDatabaseMissing('autors', ['name' => "AutorTeste"]);
        $this->assertDatabaseHas('autors', ['name' => 'Juliana']);
    }
}
