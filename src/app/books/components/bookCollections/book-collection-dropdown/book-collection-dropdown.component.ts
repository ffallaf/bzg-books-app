import { Component, OnInit } from '@angular/core';
import { BooksCollectionsService } from '../../../services/collections/books-collections.service';
import { Observable } from '../../../../../../node_modules/rxjs';

@Component({
  selector: 'app-book-collection-dropdown',
  templateUrl: './book-collection-dropdown.component.html',
  styleUrls: ['./book-collection-dropdown.component.styl']
})
export class BookCollectionDropdownComponent implements OnInit {

  collectionList: Array<any>;

  constructor(private collectionsService: BooksCollectionsService) {
    this.collectionsService.getUserObservable().subscribe(user => { this.getCollectionListObservable(user) });
   }

  ngOnInit() {
  }

  private getCollectionListObservable(user: firebase.User): void {
    this.collectionsService.getBooksCollectionsListObservable(user).subscribe(collections => { this.fillCollectionsList(collections) });
  }

  private fillCollectionsList(collections: Array<any>): void {
    this.collectionList = collections;
  }

}
