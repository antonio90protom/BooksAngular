import { Book } from './../model/book';
import { Component, OnInit } from '@angular/core'; 
import { BookService } from '../services/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  isHidden=true;
  book: Book;

  constructor(private service: BookService, private router: Router) {
    this.book = new Book();
   }

  readUrl(event: any) {
    console.log(event)
    if (event.target.files && event.target.files[0]) {
     // FileReader permette di leggere il contenuto del file  memorizzato sul pc 
     //dell'utente 
      const reader = new FileReader(); 
      reader.onload = (event: any) => {
        this.book.img = event.target.result;
        console.log( this.book.img )
      };
      //Il readAsDataURL viene utilizzato per leggere il contenuto del Blob
      reader.readAsDataURL(event.target.files[0])
      console.log(event.target.files[0])
      ; 
    }
  }

  add(book): void {
    this.service.add(this.book) 
    .subscribe(book => {this.book = book
    this.router.navigate(['']) 
    console.log(this.book) ;debugger;
    })
  }

  goBack() {
    this.router.navigate(['']);
  } 

  ngOnInit() {
  }

} 