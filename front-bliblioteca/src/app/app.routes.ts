import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { BooksComponent } from './pages/books/books.component';

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
  }
];
