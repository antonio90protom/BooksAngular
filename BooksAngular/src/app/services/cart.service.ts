import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../model/book';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

@Injectable()

export class CartService {

  constructor(private http: HttpClient) {
  }

  book: Book[];

  getBooks(id: number): Observable<Book[]> {
    return this.http.get<Book[]>(environment["baseUrlService"] + '/davedereeee/' + id);
  }

  add(book: Book): Observable<Book> {
    return this.http.post<Book>(environment["baseUrlService"] + '/davedereeee', book);
  }

  delete(id: number): Observable<Book> {
    return this.http.delete<Book>(environment["baseUrlService"] + '/davedereeee/' + id);
  }

  deleteByIdUser(id: number): Observable<Book> {
    return this.http.delete<Book>(environment["baseUrlService"] + '/davedereeee/' + id);
  }





}
