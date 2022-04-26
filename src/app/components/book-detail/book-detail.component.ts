import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  id !: number;
  quantity !: number;
  
  book!: Book;

  constructor(private route: ActivatedRoute, private service : BooksService, private router: Router) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.service.getBook(this.id).subscribe({
      next: book => {
        this.book = book;
      }, error: err => {
        console.log(err);
      }, complete: () => {
        console.log('fin de chargement');
      }
    });
  }

  delete() {
    this.service.deleteBook(this.id);
    this.router.navigate(['/products']);
  }
}
