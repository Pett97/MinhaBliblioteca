<?php

namespace Tests\Feature;

use App\Models\Autor;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

use function PHPUnit\Framework\assertEquals;

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
        $newAutor = new Autor(['name' => "ChicoTeste"]);

        $this->assertEquals("ChicoTeste", $newAutor->name);

        $newAutor->name = "FulanoTeste";

        $this->assertEquals("FulanoTeste",$newAutor->name);
    }
}
