<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class BookResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id'=>$this->id,
            'name'=>$this->name,
            'genre_id'=>$this->genre_id,
            'autor_id'=>$this->autor_id,
            'pages'=>$this->pages,
            'publication_date'=>$this->publication_date
        ];
    }
}
