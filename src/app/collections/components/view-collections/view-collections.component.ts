import { Component, OnInit, Input } from '@angular/core';
import { CollectionsService } from '../../services/collections.service';
import * as firebase from "firebase";

@Component({
  selector: 'app-view-collections',
  templateUrl: './view-collections.component.html',
  styleUrls: ['./view-collections.component.styl']
})
export class ViewCollectionsComponent implements OnInit {

  collectionItems: any[];
  
  constructor(private collectionsService: CollectionsService) {
   }

  ngOnInit() {
    this.collectionsService.getUserAuthObservable().subscribe(user => { this.getCollectionListObservable(user)});
  }

  deleteCollection(collectionName: string) {
    this.collectionsService.deleteCollection(collectionName);
  }

  private getCollectionListObservable(user: firebase.User): void {
    this.collectionsService.getCollectionItemsObservable().subscribe(collections => {
      this.collectionItems = collections;
    });
  }

}
