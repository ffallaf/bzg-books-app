import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-add-collection',
  templateUrl: './add-collection.component.html',
  styleUrls: ['./add-collection.component.styl']
})
export class AddCollectionComponent implements OnInit {

  addCollectionForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.addCollectionForm = this.formBuilder.group({
      collectionName: ['', Validators.required]
    });
  }

}
