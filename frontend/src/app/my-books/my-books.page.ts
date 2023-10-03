import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-books',
  templateUrl: './my-books.page.html',
  styleUrls: ['./my-books.page.scss'],
})
export class MyBooksPage implements OnInit {
  
  books: any =[];

  public alertButtons = ['OK'];

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit() {
    this.getAllBooks();
  }

  getAllBooks(){
    this.bookService.getBooks().subscribe(response => {
      this.books = response;
    });
  }
   //Router
   /*
  gotoHome() {
    this.router.navigateByUrl("/home");
  }
  gotoAddBooks() {
    this.router.navigateByUrl("/add-books");
    
  }
  gotoDeleteBooks() {
    this.router.navigateByUrl("/delete-books");
  }
  gotoUpdateBooks() {
    this.router.navigateByUrl("/update-books");
  }
  gotoMyBooks() {
    this.router.navigateByUrl("/my-books");
  }
  */
}
