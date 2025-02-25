<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Testador',
            'email' => 'testador@bol.com',
            'password' => Hash::make('123456789', ['rounds' => 12]),
        ]);
        
        $this->call([
            AutorSeeder::class,
            GenreSeeder::class,
            BookSeeder::class
        ]);
    }
}
