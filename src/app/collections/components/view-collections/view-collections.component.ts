import { Component, OnInit, Input } from '@angular/core';
import { Collection } from '../../models/collection';
import { CollectionsService } from '../../services/collections.service';
import{ Subscription, Observable } from 'rxjs';
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

  private getCollectionListObservable(user: firebase.User): void {
    this.collectionsService.getCollectionItemsObservable().subscribe(collections => {
      this.collectionItems = collections;
    });
  }

}
