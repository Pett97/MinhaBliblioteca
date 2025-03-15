import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AppConstants } from '../../../app-constants';

@Component({
  selector: 'app-autor',
  imports: [ReactiveFormsModule],
  standalone: true,
  templateUrl: './autor.component.html',
  styleUrl: './autor.component.css'
})
export class AutorComponent implements OnInit {

  isLoading = true;
  autor: any;
  autorForm: FormGroup;

  constructor(private router: Router, private http: HttpClient, private appConstants: AppConstants) {
    this.autorForm = new FormGroup({
      id: new FormControl({ value: '', disabled: true }),
      name: new FormControl("", [Validators.required, Validators.minLength(3)])
    });
  }

  ngOnInit(): void {
    this.getAutor(history.state.autorID)
  }

  private getAutor(id: number) {
    if (!id) {
      this.router.navigate(["autores"]);
      alert("Não Foi Possivel Buscar Dados");
      return;
    }

    this.isLoading = true;

    this.http.get(`${this.appConstants.AutorsUrl}/${id}`).subscribe({
      next: (res: any)=>{
        if (res.length > 0) {
          this.autorForm.patchValue({
            id: res[0].id,
            name: res[0].name
          });
        } else {
          alert("Autor não encontrado");
        }
      },
      error: (err) => {
        alert("Erro");
        console.log(err);
      },
      complete: () => {
        this.isLoading = false;
      }
    })
  }

  voltar(): void {
    this.router.navigate(["autores"]);
  }

  atualizar() {
    if(this.autorForm.valid){
      this.http.patch(`${this.appConstants.AutorsUrl}/${history.state.autorID}`,this.autorForm.value).subscribe({
        next:(res:any)=>{
          alert("Autor Atualizado com Sucesso");
        },
        error:(err)=>{
          alert("Erro Ao Atualizar o Autor");
          console.log(err);
        },
        complete:()=>{
          this.router.navigate(['autores']);
        }
      })
    }
  }
}
