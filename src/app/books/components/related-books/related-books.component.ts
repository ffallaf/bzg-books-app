import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { BooksListService } from "../../services/list/books-list.service";
import { BookList } from '../../models';

@Component({
  selector: 'app-related-books',
  templateUrl: './related-books.component.html',
  styleUrls: ['./related-books.component.styl']
})
export class RelatedBooksComponent implements OnInit {

  book: any;
  booksList: BookList;

  constructor(private booksService: BooksListService, private activatedRoute: ActivatedRoute) {
    this.book = {};
   }

  ngOnInit() {    
    let id: string;
    this.activatedRoute.params.subscribe((params: Params) => {
      id = params.id;
      this.booksService.getBook(id)
        .subscribe(
          books => {
            if (books) {
              this.book = books;
              this.searchRelatedBooks(this.book);
            }
          }
        );
    });
  }

  private searchRelatedBooks(book: any) {
    let searchParam = "Colombia";
    if(book)
      searchParam = book.volumeInfo.publisher;

    if(searchParam) {
      this.booksService.searchBooks(searchParam);
      this.booksService.booksList.subscribe(books => { 
        if(books)
          this.booksList = books
      });
    }
  }

}
