import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-best',
  templateUrl: './best.component.html',
  styleUrls: ['./best.component.css']
})
export class BestComponent implements OnInit {

  bookList : Book[] = [];
  ordre:string = "";
  filtres:string[] = [];
  form!: FormGroup;
  constructor(private bookService : BooksService, private formBuilder : FormBuilder) {
    this.form = formBuilder.group({
      filtres:  new FormArray([])
      }); 
   }

   submit() {
    console.log(this.form.value);
  }
  ngOnInit(): void {
    this.bookService.getBooks().subscribe({
      next: books => {
        this.bookList = books;
      }, error: err => {
        console.log(err);
      }, complete: () => {
        console.log('fin de chargement');
      }
    }
    );
  }
}
