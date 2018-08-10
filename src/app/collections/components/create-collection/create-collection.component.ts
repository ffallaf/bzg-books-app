import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { CollectionsService } from '../../services/collections.service';

@Component({
  selector: 'app-create-collection',
  templateUrl: './create-collection.component.html',
  styleUrls: ['./create-collection.component.styl']
})
export class CreateCollectionComponent implements OnInit {

  createCollectionForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private collectionsService: CollectionsService) {
       
   }

  ngOnInit() {
    this.createCollectionForm = this.formBuilder.group({
      collectionName: ['', Validators.required]
    });
  }

  addCollection(): void {
    let collectionName = this.createCollectionForm.get('collectionName').value;
    this.collectionsService.createCollection(collectionName);
  }

}
