import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { AppConstants } from '../../../app-constants';

@Component({
  selector: 'app-create-autor',
  imports: [ReactiveFormsModule],
  templateUrl: './create-autor.component.html',
  styleUrl: './create-autor.component.css'
})
export class CreateAutorComponent {

  autorForm: FormGroup;
  constructor(private router: Router, private http: HttpClient, private appConstans: AppConstants) {

    this.autorForm = new FormGroup({
      name: new FormControl("", [Validators.required, Validators.minLength(3)])
    });
  }


  salvar(): void {
    if (!this.autorForm.valid) {
      alert("Verificar Os Dados");
      return;
    }
    try {
      this.http.post(this.appConstans.AutorsUrl, this.autorForm.value).subscribe({
        next: (res: any) => {
          alert("Autor Criado Com Sucesso");
          this.router.navigate(["autores"]);
        },
        error: (err) => {
          alert("não Foi Possivel Criar Autor");
        },
        complete: () => {
          this.router.navigate(["autores"]);
        }
      })
    } catch (error) {
      console.log(error);
    }
  }

  voltar(): void {
    this.router.navigate(["autores"]);
  }
}
