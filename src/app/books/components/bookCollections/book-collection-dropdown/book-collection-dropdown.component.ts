import { Component, OnInit, Input } from '@angular/core';
import { BooksCollectionsService } from '../../../services/collections/books-collections.service';
import { Observable } from '../../../../../../node_modules/rxjs';

@Component({
  selector: 'app-book-collection-dropdown',
  templateUrl: './book-collection-dropdown.component.html',
  styleUrls: ['./book-collection-dropdown.component.styl']
})
export class BookCollectionDropdownComponent implements OnInit {

  collectionList: Array<any>;
  @Input() book:any;

  constructor(private collectionsService: BooksCollectionsService) {
    this.collectionsService.getUserObservable().subscribe(user => { this.getCollectionListObservable(user) });
   }

  ngOnInit() {
  }

  addBookToCollection(collectionName: string) {
    this.collectionsService.addBookToCollection(this.book, collectionName);
  }

  isBookInCollection(collectionName: string): boolean {
    let isInCollection: boolean = false;

    if(this.collectionList && this.book) {
      for(let collection of this.collectionList) {
        for(let colBook of collection.books) {
          if(colBook.id == this.book.id && collection.name == collectionName) {
            isInCollection= true;
            break;
          }
        }
      }
    }

    return isInCollection;
  }

  private getCollectionListObservable(user: firebase.User): void {
    this.collectionsService.getBooksCollectionsListObservable(user).subscribe(collections => { this.fillCollectionsList(collections) });
  }

  private fillCollectionsList(collections: Array<any>): void {
    this.collectionList = collections;
  }

}
