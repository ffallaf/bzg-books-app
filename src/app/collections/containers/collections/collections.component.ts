import { Component, OnInit } from '@angular/core';
import { Collection } from '../../models/collection';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.styl']
})
export class CollectionsComponent implements OnInit {

  collections: Collection[]
  
  constructor() { }

  ngOnInit() {
  }

}
