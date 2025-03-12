import { Component } from '@angular/core';
import { AppConstants } from '../../../app-constants';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-create-genre',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-genre.component.html',
  styleUrl: './create-genre.component.css'
})
export class CreateGenreComponent {

  generoForm: FormGroup;
  constructor(private router:Router,private http: HttpClient, private appConstants: AppConstants) {
    this.generoForm = new FormGroup({
      name: new FormControl("", [Validators.required, Validators.minLength(3)])
    });
  }

  salvar(){
    if(this.generoForm.valid){
      this.http.post(this.appConstants.GenresUrl,this.generoForm.value).subscribe({
        next:(res:any)=>{
          alert("Genero Salvo com Sucesso");
          this.router.navigate(["generos"]);
        },
        error:(err)=>{
          alert("Não foi possivel salvar o Genero");
          console.log(err)
        }
      })
    }
    else{
      alert("o Formulário não esta valido")
      return;
    }
  }

  voltar():void{
    this.router.navigate(["generos"]);
  }

}
