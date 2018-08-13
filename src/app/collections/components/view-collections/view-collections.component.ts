import { Component, OnInit, Input } from '@angular/core';
import { Collection } from '../../models/collection';
import { CollectionsService } from '../../services/collections.service';
import{ Subscription, Observable } from 'rxjs';
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase } from "angularfire2/database";

@Component({
  selector: 'app-view-collections',
  templateUrl: './view-collections.component.html',
  styleUrls: ['./view-collections.component.styl']
})
export class ViewCollectionsComponent implements OnInit {

  collectionsList: Observable<any>;
  
  constructor(private authFire: AngularFireAuth, private rdb: AngularFireDatabase) {
    this.collectionsList = null;
   }

  ngOnInit() {
    this.authFire.authState.subscribe(user => {
      this.collectionsList = this.rdb.list('collections/' + user.uid).valueChanges();
    });
  }

}
