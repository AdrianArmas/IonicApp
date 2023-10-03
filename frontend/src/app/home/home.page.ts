import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  book:  String = "El problema final";
  autor: String = "ARTURO PÉREZ REVERTE";

  constructor(private router: Router) {}
 /*
  gotoUpdateHome() {
    this.router.navigateByUrl("/home");
  }
  gotoMyBooks() {
    this.router.navigateByUrl("/my-books");
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
  */
}