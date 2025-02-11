<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Book extends Model
{
    /** @use HasFactory<\Database\Factories\BookFactory> */
    use HasFactory;

    protected $fillable = [
        'name',
        'genre_id',
        'autor_id',
        'pages',
        'publication_date'
    ];

    public function genre(): ?BelongsTo
    {
        return $this->belongsTo(Genre::class);
    }

    public function autor(): ?BelongsTo
    {
        return $this->belongsTo(Autor::class);
    }
}
