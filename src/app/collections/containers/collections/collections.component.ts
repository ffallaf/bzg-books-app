import { Component, OnInit } from '@angular/core';
import { Collection } from '../../models/collection';
import { CollectionsService } from '../../services/collections.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.styl']
})
export class CollectionsComponent implements OnInit {

  collections: Array<Collection>;
  
  createCollectionSubscription: Subscription;
  
  constructor(private collectionsService: CollectionsService) {
    this.collections = new Array<Collection>();
    this.createCollectionSubscription = this.collectionsService.getCreateCollectionObservable().subscribe(collectionName => { this.CreateCollection(collectionName) }); 
   }

  ngOnInit() {
  }

  CreateCollection(name: string): void {
    let newCollection = { name: name, books: new Array<any>()};
    this.collections.push(newCollection)
  }

}
