import { Routes } from "@angular/router";
import { FavoritesComponent } from "./containers/favorites";

export const routes: Routes = [
    {
        path: 'list',
        component: FavoritesComponent
    },
    {
        path: '**', redirectTo: 'list', pathMatch: 'full'
    }
];