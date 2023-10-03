import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-books',
  templateUrl: './update-books.page.html',
  styleUrls: ['./update-books.page.scss'],
})
export class UpdateBooksPage implements OnInit {

  public alertButtons = ['OK'];

  constructor(private router: Router) { }

  ngOnInit() {
  }
  updateBook(){
    
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
