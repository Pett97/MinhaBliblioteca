<?php

namespace Database\Seeders;

use App\Models\Autor;
use App\Models\Book;
use App\Models\Genre;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BookSeeder extends Seeder
{
    
    public function run(): void
    {
        Book::factory()->create();
    }
}
