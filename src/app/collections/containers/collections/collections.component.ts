import { Component, OnInit } from '@angular/core';
import { CollectionsService } from '../../services/collections.service';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.styl']
})
export class CollectionsComponent implements OnInit {
  
  constructor(private collectionsService: CollectionsService) {
   }

  ngOnInit() {
  }

}
