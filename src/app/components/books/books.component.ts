import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  bookList : Book[] = [];
  ordre = [
    {
    name: "Prix croissant",
    value: "ASC"
  }, {
    name: "Prix décroissant",
    value: "DESC"
  }
  ];
  selectOrdre="Select Option";
  tri: string="";
  form!: FormGroup;

  constructor(private bookService : BooksService, private formBuilder : FormBuilder) { 
    this.form = formBuilder.group({
      filtres:  new FormArray([])
      }); 
  }

  submit() {
    console.log(this.form.value);
  }

  onChange(device: string){
    console.log(device);
    this.tri=device;
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
