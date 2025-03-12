import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';

import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { Router } from '@angular/router';
import { AppConstants } from '../../app-constants';

@Component({
  selector: 'app-autors',
  imports: [NavBarComponent],
  templateUrl: './autors.component.html',
  styleUrl: './autors.component.css'
})
export class AutorsComponent implements OnInit {

  autores: any[] = [];
  constructor(private http: HttpClient, private router: Router, private appConstants: AppConstants) { }

  ngOnInit(): void { }




  toCriarAutor(): void {
    return;
  }

  editarAutor(): void {
    return;
  }

  deletarAutor(): void {
    return;
  }
}
