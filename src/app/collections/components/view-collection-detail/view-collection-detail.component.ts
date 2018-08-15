import { Component, OnInit, forwardRef } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { CollectionsService } from '../../services/collections.service';

@Component({
  selector: 'app-view-collection-detail',
  templateUrl: './view-collection-detail.component.html',
  styleUrls: ['./view-collection-detail.component.styl']
})
export class ViewCollectionDetailComponent implements OnInit {

  collectionId: string;
  collectionName: string;
  collectionList: any[];

  constructor(private activatedRoute: ActivatedRoute, private collectionsService: CollectionsService) {
    this.collectionName = "";
   }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.collectionId = params.id;
    });

    this.collectionsService.getUserAuthObservable().subscribe(user => { this.getCollectionListObservable(user)});
  }

  removeFromCollection(bookId: string): void {
    let bookIndexToRemove: number = -1;

    for(let i = 0; i < this.collectionList.length; i++) {
      if(this.collectionList[i].id === bookId) {
        bookIndexToRemove = i;
        break;
      }
    }

    if(bookIndexToRemove > -1) {
      this.collectionList.splice(bookIndexToRemove, 1);

      let collectionObject = {
        name: this.collectionName,
        books: this.collectionList
      };
      this.collectionsService.updateCollection(this.collectionId, collectionObject);
    }
  }

  viewBook(book) {
    console.log(book);
  }

  private getCollectionListObservable(user: firebase.User): void {
    this.collectionsService.getCollectionBooksObservable(user, this.collectionId).subscribe(collections => { this.fillBookCollectionsList(collections) } );
  }

  private fillBookCollectionsList(collections: any[]) {
    if(collections[0].value)
      this.collectionList = collections[0].value;
    this.collectionName = collections[1].value;
  }

}
