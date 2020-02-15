import { BookService } from './../services/book.service';   
import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../model/book';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  @Input() filter="";
  @Input() isHidden;
  books: Book[];
  book: Book; 

  constructor(private service: BookService, private router: Router) { }

  cancella(book: Book, i) { 
  if(confirm('Elimina ' + book.titolo + '?')){ 
    this.delete(book, i); }
  }

  delete(book: Book, i) { 
    this.service.delete(book.id)
      .subscribe(  next => {this.books.splice(i,1) }
      )
    }
       
  getBooks() {
    this.service.getBooks()
      .subscribe(books => {this.books = books
        console.log(this.books)}); 
  }

  ngOnInit() {
    this.getBooks();
  } 
 
}