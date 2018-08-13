import { Injectable } from '@angular/core';
import { Collection } from '../models/collection';
import { Observable, Subject, Subscription } from 'rxjs';
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import * as firebase from "firebase";
import { MessagesService } from '../../alerts/services/messages.service';
import { promise } from '../../../../node_modules/protractor';

@Injectable({
  providedIn: 'root'
})
export class CollectionsService {

  collectionsRef: AngularFireList<any>;
  user: firebase.User;
  
  constructor(private authFire: AngularFireAuth, private rdb: AngularFireDatabase, private messageService: MessagesService) {
    this.authFire.authState.subscribe(
      user => {
        this.user = user,
        this.collectionsRef = this.rdb.list('collections/' + this.user.uid);
      }
    );
   }

   createCollection(collectionName: string): void {
    let newCollection = { name: collectionName, books: new Array<any>()};
    const createPromise = this.collectionsRef.push(newCollection);
    createPromise.then(_ => this.messageService.message("Colección creada", "success"));

   }

   getUserAuthObservable(): Observable<firebase.User> {
    return this.authFire.authState; 
   }

   getCollectionsListObservable(user: firebase.User): Observable<any> {
     return this.rdb.list('collections/' +  user.uid).valueChanges();
   }
}
