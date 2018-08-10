import { Routes } from "@angular/router";
import { AuthGuardService } from "../auth/services/guards/auth-guard.service";
import { BooksMainComponent } from "./containers/books-main";
import { BookDetailComponent } from "./containers/book-detail";

export const routes: Routes = [
    {
        path: 'list',
        component: BooksMainComponent        
    },
    {
        path: '', redirectTo: 'list', pathMatch: 'full'
    },
    {
        path: 'detail/:id',
        component: BookDetailComponent
    }
];