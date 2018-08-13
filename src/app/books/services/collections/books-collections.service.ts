import { Injectable } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase } from "angularfire2/database";
import * as firebase from "firebase";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksCollectionsService {

  constructor(private authFire: AngularFireAuth, private rdb: AngularFireDatabase) { }

  getUserObservable(): Observable<firebase.User> {
    return this.authFire.authState; 
   }

   getBooksCollectionsListObservable(user: firebase.User): Observable<any> {
     return this.rdb.list('collections/' +  user.uid).valueChanges();
   }
}
