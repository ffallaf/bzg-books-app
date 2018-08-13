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

  collectionsList: Observable<any[]>;
  
  constructor(private collectionsService: CollectionsService) {
    this.collectionsList = null;
   }

  ngOnInit() {
    this.collectionsService.getUserAuthObservable().subscribe(user => { this.getCollectionListObservable(user)});
  }

  viewCollection(collection) {
    console.log(collection);
  }

  private getCollectionListObservable(user: firebase.User): void {
    this.collectionsList = this.collectionsService.getCollectionsListObservable(user);
  }

}
