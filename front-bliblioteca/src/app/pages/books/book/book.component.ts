import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgFor } from '@angular/common';
import { AppConstants } from '../../../app-constants';

@Component({
  selector: 'app-book',
  imports: [ReactiveFormsModule, NgFor],
  standalone: true,
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent implements OnInit {

  isLoading = true;
  bookForm: FormGroup;
  errorMessage: string = '';
  generos: any[] = [];
  autores: any[] = [];

  constructor(private router: Router, private http: HttpClient, private appConstants: AppConstants) {

    this.bookForm = new FormGroup({
      name: new FormControl("", [Validators.required, Validators.minLength(3)]),
      publication_date: new FormControl("", [Validators.required]),
      select_genero_book: new FormControl(""),
      select_autor_book: new FormControl("")
    });
  }

  ngOnInit(): void {
    this.getBook(history.state.id);
    this.getAutores();
    this.getGeneros();
  }

  private getBook(id: number) {
    if (!id) {
      this.router.navigate(["livros"]);
      return;
    }
  
    this.isLoading = true;
  
    this.http.get(`${this.appConstants.booksUrl}/${id}`).subscribe({
      next: (res: any) => {
        if (res[0]) { 
          this.bookForm.patchValue({
            name: res[0].name,
            publication_date: res[0].publication_date,
            select_genero_book: res[0].genre_id || "0",
            select_autor_book: res[0].autor_id || '0'
          });
        } else {
          this.errorMessage = "Livro não encontrado";
        }
      },
      error: () => {
        this.errorMessage = "Erro ao encontrar o livro";
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }

  private getGeneros() {
    this.http.get(this.appConstants.GenresUrl).subscribe({
      next: (res: any) => {
        this.generos = res;
      },
      error: (err) => {
        console.log(err);
        alert("Erro Trazer Generos");
      },
      complete: () => { }
    })
  }

  private getAutores() {
    this.http.get(this.appConstants.AutorsUrl).subscribe({
      next: (res: any) => {
        this.autores = res;
      },
      error: (err) => {
        alert("Erro Trazer Autores");
      }
    })
  }

  voltar() {
    this.router.navigate(['livros']);
  }

  atualizar() {
    this.http.patch(`${this.appConstants.booksUrl}/${history.state.id}`,this.bookForm.value).subscribe({
      next:(res:any)=>{
        alert("Livro Atualizado com sucesso");
        this.router.navigate(['livros']);
      },
      error:(err)=>{
        alert("Erro ao Atualizar Livro");
        console.log(err);
      },
      complete() {
        
      },
    })
  }
}
