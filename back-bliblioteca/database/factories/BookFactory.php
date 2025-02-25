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
            'name' => $this->faker->sentence(3),
            'genre_id' => Genre::factory(),
            'autor_id' => Autor::factory(),
            'pages' => $this->faker->numberBetween(50, 1000),
            'publication_date' => $this->faker->date('Y-m-d'),
        ];
    }
}
