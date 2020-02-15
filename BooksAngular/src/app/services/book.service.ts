import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Book } from '../model/book';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';


@Injectable()
export class BookService {

  constructor(private http: HttpClient) {
  }

  book: Book[];

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(environment["baseUrlService"]);
  }

  getBook(id: any): Observable<Book> {
    return this.http.get<Book>(environment["baseUrlService"] + '/info/' + id);
  }

  delete(id: number): Observable<Book> {
    return this.http.delete<Book>(environment["baseUrlService"] + '/' + id);
  }

  add(book: Book): Observable<Book> {
    return this.http.post<Book>(environment["baseUrlService"] + '/newBook', book);

  }

  edit(book: Book): Observable<Book> {
    return this.http.patch<Book>(environment["baseUrlService"] + '/edit/' + book.id, book);
  }


}