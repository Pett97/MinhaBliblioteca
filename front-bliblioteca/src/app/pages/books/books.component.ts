import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from '../../app-constants';
import { JsonPipe } from '@angular/common';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-books',
  imports: [JsonPipe,NavBarComponent],
  standalone:true,
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent implements OnInit {

  constructor(private http: HttpClient, private appConstants: AppConstants) { }

  listBooks: any[] = [];

  ngOnInit(): void {
    this.getAllBooks();
  }


  private getAllBooks() {
    console.log(this.appConstants.booksUrl);
    this.http.get(this.appConstants.booksUrl).subscribe((res:any)=>{
      this.listBooks = res.data;
      console.log("123123123");
      console.log(res)
    })
  }
}
