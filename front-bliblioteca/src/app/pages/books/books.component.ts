import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from '../../app-constants';
import { NgFor } from '@angular/common';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { Router } from '@angular/router';
import { DateFormatService } from '../../services/formtar-data.service';

@Component({
  selector: 'app-books',
  imports: [NavBarComponent, NgFor],
  standalone: true,
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent implements OnInit {

  constructor(private dateFormatService: DateFormatService,private http: HttpClient, private appConstants: AppConstants, private router: Router) { }

  listBooks: any[] = [];

  ngOnInit(): void {
    this.getAllBooks();
  }

  formatDate(date: string): string {
    return this.dateFormatService.formatDate(date);
  }
  private getAllBooks() {
    this.http.get(this.appConstants.booksUrl).subscribe({
      next: (res: any) => {
        this.listBooks = res;
      },
      error: (err) => {
        alert("Erro Ao Trazer os dados");
        console.log(err);
      },
      complete: () => { }
    });
  }

  toCriarLivro() {
    this.router.navigate(['criar-book']);
  }

  editarLivro(id: number) {
    if(id){
      this.router.navigate([`book/${id}`],{state:{id}});
    }
    return;
  }

  deletarLivro(id: number) {
    return;
  }
}
