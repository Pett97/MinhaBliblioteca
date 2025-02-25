<?php

namespace Tests\Unit;

use App\Models\Genre;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class GenreTest extends TestCase
{
  use RefreshDatabase;
  /**
   * A basic feature test example.
   */
  private Genre $novoGenero;
  protected function setUp(): void
  {
    parent::setUp();
    $this->novoGenero = Genre::factory()->create();
  }

  public function test_can_create_a_genre()
  {
    $this->assertDatabaseHas('genres', ['name' => $this->novoGenero->name]);
  }

  public function test_can_update_name_genre()
  {
    $nomeOriginal = $this->novoGenero->name;
    $this->assertDatabaseHas('genres', ['name' => $this->novoGenero->name]);

    $novoNome = "testeNovoNome";

    $this->novoGenero->update(['name' => $novoNome]);

    $this->novoGenero->refresh();

    $this->assertDatabaseHas('genres', ['name' => $novoNome]);

    $this->assertDatabaseMissing('genres', ['name' => $nomeOriginal]);
  }

  public function test_can_delete_genre()
  {
    $this->novoGenero->delete();

    $this->assertDatabaseMissing('genres', ['name' => $this->novoGenero->name]);
  }
}
