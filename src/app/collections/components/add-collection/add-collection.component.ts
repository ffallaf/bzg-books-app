import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { CollectionsService } from '../../services/collections.service';

@Component({
  selector: 'app-add-collection',
  templateUrl: './add-collection.component.html',
  styleUrls: ['./add-collection.component.styl']
})
export class AddCollectionComponent implements OnInit {

  addCollectionForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private collectionsService: CollectionsService) {
       
   }

  ngOnInit() {
    this.addCollectionForm = this.formBuilder.group({
      collectionName: ['', Validators.required]
    });
  }

  addCollection(): void {
    let collectionName = this.addCollectionForm.get('collectionName').value;
    this.collectionsService.createCollection(collectionName);
  }

}
