import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { AppConstants } from '../../app-constants';
import { NgFor  } from '@angular/common';
import { Router } from '@angular/router';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-genres',
  imports: [NgFor,NavBarComponent],
  standalone: true,
  templateUrl: './genres.component.html',
  styleUrl: './genres.component.css'
})
export class GenresComponent implements OnInit {


  generos: any[] = [];

  constructor(private http: HttpClient, private appConstants: AppConstants, private router: Router) { }

  ngOnInit(): void {
    this.getAllGeneros();
  }

  getAllGeneros() {
    this.http.get(this.appConstants.GenresUrl).subscribe((res: any) => {
      this.generos = res;
    })
  }

  editarGenero(generoId: number) {
    this.router.navigate([`genero/${generoId}`], { state: { generoId } });
  }

  deletarGenero(generoID:number){
    if(!generoID){
      return;
    }
    this.http.delete(`${this.appConstants.GenresUrl}/${generoID}`).subscribe({
      next:(res:any)=>{
        alert("Genero Deletado Com Sucesso");
        
      },
      error:(err:any)=>{
        alert("Nao Foi Possivel Deletar o Genero com ID"+generoID);
      },
      complete:()=>{
        window.location.reload();
      }
    })
  }

  toCriarGenero():void{
    this.router.navigate(["genero-criar"]);
  }

}
