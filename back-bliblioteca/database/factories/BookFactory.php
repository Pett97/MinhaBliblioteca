<?php

namespace Database\Factories;

use App\Models\Autor;
use App\Models\Genre;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Book>
 */
class BookFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->name,
            'genre_id' => Genre::factory()->create()->id,
            'autor_id' => Autor::factory()->create()->id,
            'publication_date' => $this->date('Y-m-d')
        ];
    }
}
