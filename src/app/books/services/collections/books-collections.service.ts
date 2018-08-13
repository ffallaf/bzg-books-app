import { Injectable } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import * as firebase from "firebase";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BooksCollectionsService {

  collectionsRef: AngularFireList<any>;
  collectionsItems: any[];
  user: firebase.User;

  constructor(private authFire: AngularFireAuth, private afdb: AngularFireDatabase) {
    this.collectionsRef = null;
    this.authFire.authState.subscribe(user => {
      this.user = user;
      this.afdb.list('collections/' + this.user.uid).snapshotChanges().pipe(
        map(items => items.map(i => ({
          key: i.payload.key,
          value: i.payload.val()
        })))
      ).subscribe(collections => {
        this.collectionsItems = collections;
      });
    });
   }

  getUserObservable(): Observable<firebase.User> {
    return this.authFire.authState; 
   }

   getBooksCollectionsListObservable(user: firebase.User): Observable<any> {
     return this.afdb.list('collections/' +  user.uid).valueChanges();
   }

   addBookToCollection(book: any, collectionName: string) {
    this.collectionsRef = this.afdb.list('collections/' + this.user.uid);
    let itemToUpdate = this.getCollectionItem(collectionName);

    if(!itemToUpdate.value.books) {
      itemToUpdate.value.books = new Array();
    }
    itemToUpdate.value.books.push(book);
    this.collectionsRef.update(itemToUpdate.key, itemToUpdate.value);
   }

   private getCollectionItem(collectionName: string): any {
     for(let item of this.collectionsItems) {
       if(item.value.name == collectionName) {
         return item;
       }
     }
   }
}
