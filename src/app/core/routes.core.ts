import { Routes } from "@angular/router";
import { AuthGuardService } from "../auth/services/guards/auth-guard.service";
import { CoreComponent } from "./containers/core";

export const routes: Routes = [
    {
        path: 'main',
        component: CoreComponent,
        canActivate: [AuthGuardService],
        children: [
            {
                path: 'books',
                loadChildren: '../books/books.module#BooksModule'                
            },
            {
                path: 'collections',
                loadChildren: '../collections/collections.module#CollectionsModule'                
            },
            {
                path: 'favorites',
                loadChildren: '../favorites/favorites.module#FavoritesModule'                
            },
            {path: '', redirectTo: 'books', pathMatch: 'full'}
        ]
    },
    {
        path: '', redirectTo: 'main', pathMatch: 'full'
    }
];