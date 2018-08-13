import { Injectable } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import * as firebase from "firebase";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksCollectionsService {

  collectionsRef: AngularFireList<any>;
  user: firebase.User;

  constructor(private authFire: AngularFireAuth, private rdb: AngularFireDatabase) {
    this.authFire.authState.subscribe(user => {
      this.user = user;
    });
   }

  getUserObservable(): Observable<firebase.User> {
    return this.authFire.authState; 
   }

   getBooksCollectionsListObservable(user: firebase.User): Observable<any> {
     return this.rdb.list('collections/' +  user.uid).valueChanges();
   }

   addBookToCollection(book: any, collectionName: string) {
    this.collectionsRef = this.rdb.list('collections/' + this.user.uid + '/' + collectionName);
    this.collectionsRef.push(book);
   }
}
