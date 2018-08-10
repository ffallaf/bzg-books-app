import { Injectable } from '@angular/core';
import { Collection } from '../models/collection';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CollectionsService {

  collections: Array<Collection>;
  collectionsSubject: Subject<Array<Collection>>;
  
  constructor() {
    this.collections = new Array<Collection>();
    this.collectionsSubject = new Subject<Array<Collection>>();
   }

   getCollectionsObservable(): Observable<Array<Collection>> {
     return this.collectionsSubject.asObservable();
   }

   createCollection(collectionName: string): void {
    let newCollection = { name: collectionName, books: new Array<any>()};
    this.collections.push(newCollection);
    this.collectionsSubject.next(this.collections);
   }

   getCollections(): Array<Collection> {
     return this.collections;
   }
}
