import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { CollectionsService } from '../../services/collections.service';
import { MessagesService } from '../../../alerts/services/messages.service';

@Component({
  selector: 'app-create-collection',
  templateUrl: './create-collection.component.html',
  styleUrls: ['./create-collection.component.styl']
})
export class CreateCollectionComponent implements OnInit {

  createCollectionForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private collectionsService: CollectionsService, private msgService: MessagesService) {
       
   }

  ngOnInit() {
    this.createCollectionForm = this.formBuilder.group({
      collectionName: ['', Validators.required]
    });
  }

  createCollection(): void {
    let collectionName = this.createCollectionForm.get('collectionName').value;

    if(!this.existsCollectionByName(collectionName)) {
      this.collectionsService.createCollection(collectionName);
    }
    else {
      this.log("Ya existe una colección con el nombre " + collectionName)
    }
  }

  existsCollectionByName(collectionName: string): boolean {
    let exists = false;
    /*this.collectionsService.collectionsList.forEach(collections => {
      for(let collection of collections) {
        if(collectionName == collection.name) {
          exists = true;
        }
      }
    });*/

    return exists;
  }

  private log(message: string): void {
    let type = "error";
    this.msgService.message(message, type);
  }

}
