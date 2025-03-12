import { Component } from '@angular/core';
import { RouterModule,Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  imports: [],
  standalone: true,
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  constructor(private router:Router){}

  toGenres(): void {
    this.router.navigate(["generos"]);
  }

  toAutors(): void {
    this.router.navigate(["autores"]);
  }

  toBooks(): void {
    this.router.navigate(["livros"]);
  }

}
