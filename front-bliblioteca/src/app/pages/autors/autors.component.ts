import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { NgFor } from '@angular/common';

import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { Router } from '@angular/router';
import { AppConstants } from '../../app-constants';

@Component({
  selector: 'app-autors',
  imports: [NavBarComponent, NgFor],
  templateUrl: './autors.component.html',
  styleUrl: './autors.component.css'
})
export class AutorsComponent implements OnInit {

  autores: any[] = [];
  constructor(private http: HttpClient, private router: Router, private appConstants: AppConstants) { }

  ngOnInit(): void {
    this.getAutores();
  }

  private getAutores() {
    this.http.get(this.appConstants.AutorsUrl).subscribe({
      next: (res: any) => {
        this.autores = res;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  toCriarAutor(): void {
    this.router.navigate(["autor-criar"]);
  }

  editarAutor(autorID: number) {
    if (!autorID) {
      return;
    }
    else {
      this.router.navigate([`autor/${autorID}`], { state: { autorID } });
    }
  }

  deletarAutor(id: number): void {
    if (!id) {
      return;
      
    } else {
      this.http.delete(`${this.appConstants.AutorsUrl}/${id}`).subscribe({
        next: () => {
          alert(`Autor com ID: ${id} deletado com sucesso`);
        },
        error: (err) => {
          alert("Erro ao Deletar Autor")
          console.log(err);
        },
        complete: () => {
          window.location.reload();
        },
      })
    }
  }
}
