import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../model/book';
import { NgForm } from '@angular/forms'; 
import { BookService } from '../services/book.service';
import { Router, ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  book: Book;
  id: any;
  isHidden=true;

  constructor(private service: BookService, private route: ActivatedRoute, private router: Router) { 
    this.route.paramMap.subscribe(param => {
      if( param.has("id") ) {
        this.id = param.get("id") 
        this.service.getBook(this.id).subscribe(result => {  this.book = result[0]  });
      }
    }) 
  }

  save(form: NgForm) { 
      this.edit(form.value); 
  }

  edit(book) {
    this.service.edit(this.book) 
    .subscribe(book => { this.book.id = book.id;
    this.router.navigate(['']); 
  } )
  } 

  goBack(): void {
    this.router.navigate(['']);
  }
 
  ngOnInit() { 
  }

  readUrl(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader(); 
      reader.onload = (event: any) => {
        this.book.img = event.target.result;
      };
      reader.readAsDataURL(event.target.files[0]);
    }

  } 
}
