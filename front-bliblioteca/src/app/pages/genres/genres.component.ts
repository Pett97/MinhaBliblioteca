import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { AppConstants } from '../../app-constants';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-genres',
  imports: [NgFor],
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

}
