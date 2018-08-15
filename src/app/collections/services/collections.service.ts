import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import * as firebase from "firebase";
import { MessagesService } from '../../alerts/services/messages.service';
import { Collection } from '../models/collection';

@Injectable({
  providedIn: 'root'
})
export class CollectionsService {

  collectionsRef: AngularFireList<any>;
  collectionsItemsObservable: Observable<any[]>;
  user: firebase.User;
  collectionsItems: any[];
  
  constructor(private authFire: AngularFireAuth, private afdb: AngularFireDatabase, private messageService: MessagesService) {
    this.authFire.authState.subscribe(
      user => {
        this.user = user
      }
    );
   }

   getCollectionItemsObservable(): Observable<any[]> {
    return this.afdb.list('collections/' + this.user.uid).snapshotChanges().pipe(
      map(items => items.map(i => ({
        key: i.payload.key,
        value: i.payload.val()
      })))
    );
   }

   getCollectionBooksObservable(user: firebase.User, collectionId: string): Observable<any[]> {
    return this.afdb.list('collections/' + this.user.uid + '/' + collectionId).snapshotChanges().pipe(
      map(items => items.map(i => ({
        key: i.payload.key,
        value: i.payload.val()
      })))
    );
  }

   createCollection(collectionName: string): void {
    let newCollection = { name: collectionName, books: []};
    this.collectionsRef = this.afdb.list('collections/' + this.user.uid);
    const createPromise = this.collectionsRef.push(newCollection);
    createPromise.then(_ => this.messageService.message("Colección creada", "success"));

   }

   updateCollection(collectionId: string, collection: any) {
    let collectionsRef = this.afdb.list('collections/' + this.user.uid);
    collectionsRef.update(collectionId, collection);
   }

   deleteCollection(collectionName: string) {
    let collectionsRef = this.afdb.list('collections/' + this.user.uid);
    
    this.afdb.list('collections/' + this.user.uid).snapshotChanges().pipe(
      map(items => items.map(i => ({
        key: i.payload.key,
        collectionName: i.payload.val()["name"]
      })))
    ).subscribe(collections => {
      for(let collectionItem of collections) {
        if(collectionItem.collectionName == collectionName) {
          let key = collectionItem.key;
          collectionsRef.remove(key);
          break;
        }
      }      
    });

   }

   getUserAuthObservable(): Observable<firebase.User> {
    return this.authFire.authState; 
   }

   getCollectionsListObservable(user: firebase.User): Observable<any> {
     return this.afdb.list('collections/' +  user.uid).valueChanges();
   }
}
