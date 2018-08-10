import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import * as firebase from "firebase";
import { FavoritesService } from "../../services/favorites.service";
import { Observable } from 'rxjs';
import { BookList } from '../../../books/models';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.styl']
})
export class FavoritesComponent implements OnInit {

  bookList: Observable<any[]>;

  constructor(private favService: FavoritesService, private authFire: AngularFireAuth,
    private rdb: AngularFireDatabase) { 
    this.bookList = null;
  }

  ngOnInit() {
    this.authFire.authState
      .subscribe(
        user => {          
          this.bookList = this.rdb.list('favorites/' + user.uid).valueChanges();
        }
      );
  }

}
