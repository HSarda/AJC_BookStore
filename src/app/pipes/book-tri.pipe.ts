import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../models/book';

@Pipe({
  name: 'bookTri'
})
export class BookTriPipe implements PipeTransform {

  transform(values: Book[], order : string): Book[] {
    console.log(order);
    if (order === 'DESC') {
      return values.sort((a: Book, b: Book) => b.price - a.price);
    } else {
      return values.sort((a: Book, b: Book) => a.price - b.price);
    }
  }

}
