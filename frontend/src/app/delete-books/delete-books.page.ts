import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-delete-books',
  templateUrl: './delete-books.page.html',
  styleUrls: ['./delete-books.page.scss'],
})
export class DeleteBooksPage implements OnInit {
  bookId!: number;

  constructor(private router: Router, private bookService: BookService) { }

  public alertButtons = ['OK'];

  ngOnInit() {
  }

  // Delete book
  deleteBook(bookId: number) {
    if (bookId) {
      this.bookService.deleteBooks(bookId).subscribe(
        (response) => {
          console.log('Book deleted successfully:', response);
          // Reset the bookId variable
          this.bookId = 0;
        },
        (error) => {
          console.error('Error deleting book:', error);
        }
      );
    }
  }
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

