import { Component, OnInit, Input } from '@angular/core';
import { BooksListService } from "../../services/list/books-list.service";
import { BookList } from '../../models';

@Component({
  selector: 'app-related-books',
  templateUrl: './related-books.component.html',
  styleUrls: ['./related-books.component.styl']
})
export class RelatedBooksComponent implements OnInit {

  @Input() searchParam: string;
  booksList: BookList;

  constructor(private booksService: BooksListService) {
   }

  ngOnInit() {
    this.booksService.searchBooks(this.searchParam);
    this.booksService.booksList.subscribe(books => { 
      if(books)
        this.booksList = books
    });
  }

}
