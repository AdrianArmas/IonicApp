import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';


//Encoder
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded'
  })
}

@Injectable({
  providedIn: 'root'
})
export class BookService {
  endpoint = 'http://localhost:8080/books';

  constructor(private httpClient: HttpClient) { }
  
  //Get
  getBooks() {
    return this.httpClient.get(this.endpoint);
  }
 
  //Post
  addBooks(task: any){
    let body = new URLSearchParams();
    body.append("title", task.book);
    body.append("author", task.author);

    return this.httpClient.post(this.endpoint, body, httpOptions);
  }

  //Delete
  deleteBooks(bookId: number) { 
    return this.httpClient.delete(`${this.endpoint}/${bookId}`, httpOptions);
  }

  //Put
  updateBooks(bookId: number, task: any) {
    const putEndpoint = this.endpoint+`/${bookId}`;
  
    let bodyEncoded = new URLSearchParams();
    //bodyEncoded.append("id", bookId);
  
    const body = bodyEncoded.toString();
  
    return this.httpClient.put(putEndpoint, body, httpOptions);
  }

  
}
