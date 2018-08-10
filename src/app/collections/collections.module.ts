import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from '@angular/forms';

import { routes } from "./routes.collections";
import { CollectionsComponent } from "./containers/collections/collections.component";
import { AddCollectionComponent } from './components/add-collection/add-collection.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  declarations: [CollectionsComponent, AddCollectionComponent]
})
export class CollectionsModule { }
