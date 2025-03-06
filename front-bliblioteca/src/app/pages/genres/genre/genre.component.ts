import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppConstants } from '../../../app-constants';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-genre',
  imports: [NgIf],
  standalone: true,
  templateUrl: './genre.component.html',
  styleUrl: './genre.component.css'
})
export class GenreComponent implements OnInit {
  constructor(private route: Router, private http: HttpClient, private appConstants: AppConstants) { }

  genero: any;

  ngOnInit() {
    this.getGenero(history.state.generoId);
  }

  getGenero(generoId: number) {
    if (generoId) {
      this.http.get(`${this.appConstants.GenresUrl}/${generoId}`).subscribe((res: any) => {
        this.genero = res[0];
        console.log(res[0]);
      })
    } else {
      this.route.navigate(["generos"]);
    }
  }

}
