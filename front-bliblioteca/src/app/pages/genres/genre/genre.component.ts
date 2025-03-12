import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppConstants } from '../../../app-constants';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-genre',
  imports: [ReactiveFormsModule],
  standalone: true,
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {

  isLoading = true;
  errorMessage: string = '';
  generoForm: FormGroup;

  constructor(private route: Router, private http: HttpClient, private appConstants: AppConstants) {
    this.generoForm = new FormGroup({
      id: new FormControl({ value: '', disabled: true }),
      name: new FormControl('', [Validators.required, Validators.minLength(3)])
    });
  }

  ngOnInit() {
    this.getGenero(history.state.generoId);
  }

  getGenero(generoId: number) {
    if (!generoId) {
      this.route.navigate(["generos"]);
      return;
    }

    this.isLoading = true;

    this.http.get(`${this.appConstants.GenresUrl}/${generoId}`).subscribe({
      next: (res: any) => {
        if (res.length > 0) {
          this.generoForm.patchValue({
            id: res[0].id,
            name: res[0].name
          });
        } else {
          this.errorMessage = 'Gênero não encontrado.';
        }
      },
      error: () => {
        this.errorMessage = 'Erro ao buscar o gênero.';
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }

  voltar(): void {
    this.route.navigate(["generos"]);
  }

  atualizar() {
    if (this.generoForm.valid) {
      this.http.patch(`${this.appConstants.GenresUrl}/${history.state.generoId}`, this.generoForm.value)
        .subscribe({
          next: (res: any) => {
            alert("Genero Atualizado com Sucesso");
          },
          error: (err) => {
            console.log(err.error.message);
            alert(`Não Foi Possivel Atualizar o Genero`);
          },
          complete: () => {
            window.location.reload();
          }
        });
    }
  }
}
