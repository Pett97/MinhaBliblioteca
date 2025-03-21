import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { BooksComponent } from './pages/books/books.component';
import { GenresComponent } from './pages/genres/genres.component';
import { GenreComponent } from './pages/genres/genre/genre.component';
import { CreateGenreComponent } from './pages/genres/create-genre/create-genre.component';
import { AutorsComponent } from './pages/autors/autors.component';
import { CreateAutorComponent } from './pages/autors/create-autor/create-autor.component';
import { AutorComponent } from './pages/autors/autor/autor.component';
import { CreateBookComponent } from './pages/books/create-book/create-book.component';
import { BookComponent } from './pages/books/book/book.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: "login",
    component: LoginComponent,
    title: "Home Minha Bliblioteca"
  },
  {
    path: "livros",
    component: BooksComponent
  },
  {
    path:"criar-book",
    component:CreateBookComponent
  },
  {
    path:'book/:id',
    component:BookComponent
  },
  {
    path: "generos",
    component: GenresComponent,
  },
  {
    path: "genero/:id",
    component: GenreComponent
  },
  {
    path: "genero-criar",
    title: "Criar Novo Genero",
    component: CreateGenreComponent
  },
  {
    path: "autores",
    title: "Autores",
    component: AutorsComponent,
  },
  {
    path: 'autor-criar',
    title: "Criar Novo Autor",
    component: CreateAutorComponent
  },
  {
    path:"autor/:id",
    title:"Autor",
    component:AutorComponent
  }
];
