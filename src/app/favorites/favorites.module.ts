import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { routes } from "./routes.favorites";
import { FavoritesComponent } from "./containers/favorites";
import { CardBookComponent } from './components/card-book/card-book.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FavoritesComponent, CardBookComponent]
})
export class FavoritesModule { }
