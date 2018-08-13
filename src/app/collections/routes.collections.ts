import { Routes } from "@angular/router";
import { CollectionsComponent } from "./containers/collections/collections.component";
import { ViewCollectionDetailComponent } from "./components/view-collection-detail/view-collection-detail.component"

export const routes: Routes = [
    {
        path: 'list',
        component: CollectionsComponent
    },
    {
        path: '', redirectTo: 'list', pathMatch: 'full'
    },
    {
        path: 'collectiondetail/:id',
        component: ViewCollectionDetailComponent
    }
];