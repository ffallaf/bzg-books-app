import { Component, OnInit, Input } from '@angular/core';
import { Collection } from '../../models/collection';
import { CollectionsService } from '../../services/collections.service';
import{ Subscription } from 'rxjs';

@Component({
  selector: 'app-view-collections',
  templateUrl: './view-collections.component.html',
  styleUrls: ['./view-collections.component.styl']
})
export class ViewCollectionsComponent implements OnInit {

  collections: Array<Collection>;
  collectionsSubscription: Subscription;

  constructor(private collectionsService: CollectionsService) {
    this.collectionsSubscription = this.collectionsService.getCollectionsObservable().subscribe(collections => this.fillCollections(collections))
   }

  ngOnInit() {
    this.collections = this.collectionsService.getCollections();
  }

  fillCollections(collectionsSource: Array<Collection>): void {
    this.collections = collectionsSource;
  }

}
