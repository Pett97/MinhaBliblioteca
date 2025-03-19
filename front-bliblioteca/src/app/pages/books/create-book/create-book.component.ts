import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { AppConstants } from '../../../app-constants';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-create-book',
  imports: [ReactiveFormsModule, NgFor],
  standalone: true,
  templateUrl: './create-book.component.html',
  styleUrl: './create-book.component.css'
})
export class CreateBookComponent implements OnInit {

  bookForm: FormGroup;
  generos: any[] = [];
  autores: any[] = [];

  constructor(private http: HttpClient, private router: Router, private appConstants: AppConstants) {

    this.bookForm = new FormGroup({
      name: new FormControl("", [Validators.required, Validators.minLength(3)]),
      publication_date: new FormControl("", [Validators.required]),
      select_genero_book: new FormControl(""),
      select_autor_book: new FormControl("")
    });
  }

  ngOnInit(): void {
    this.getAutores();
    this.getGeneros();
  }

  private getGeneros() {
    this.http.get(this.appConstants.GenresUrl).subscribe({
      next: (res: any) => {
        this.generos = res;
      },
      error: (err) => {
        alert("Erro Trazer Generos");
      }
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


  protected voltar():void {
    this.router.navigate(["livros"]);
  }

  protected salvar() {
    if(!this.bookForm.valid){
      return;
    }
    
    console.log(this.bookForm.value);

    this.http.post(this.appConstants.booksUrl,this.bookForm.value).subscribe({
      next:(res:any)=>{
        alert("Livro Criado com Sucesso");
      },
      error:(err)=>{
        alert("Não Foi Possivel Cadastrar Livro");
        console.log(err);
      }
    })
  }
}
