import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../models/book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private httpClient : HttpClient) { }

  private BASE_URL = "http://localhost:3000/book";

  
  getBooks(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(`${this.BASE_URL}`);
  }
  
  getBook(id : number): Observable<Book> {
    return this.httpClient.get<Book>(`${this.BASE_URL}/${id}`);
  }
  
  createBook(data: any): Observable<any> {
    return this.httpClient.post(`${this.BASE_URL}`, data);
  }

  deleteBook(id: number): void {
    this.httpClient.delete(`${this.BASE_URL}/${id}`).subscribe();
  }

  getBookBySeries(text : string): Observable<Book> {
    return this.httpClient.get<Book>(`${this.BASE_URL}?series=${text}`);
  }

}
