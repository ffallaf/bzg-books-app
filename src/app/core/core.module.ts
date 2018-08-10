import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { AppPipesModule } from "../app-pipes/app-pipes.module";
import { AlertsModule } from "../alerts/alerts.module";
import { AuthModule } from "../auth/auth.module";
import { routes } from "./routes.core";
import { CoreComponent } from './containers/core';
import { AsideLeftComponent } from "./containers/aside-left";
import { MainContentComponent } from "./containers/main-content";
import { TopNavAppComponent } from "./containers/top-nav-app";
import { MenuAsideLeftComponent } from "./components/menu-aside-left";
import { TopAsideLeftComponent } from "./components/top-aside-left";
import { SearchFormComponent } from './components/search-form/search-form.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AppPipesModule,
    AlertsModule,
    AuthModule
  ],
  declarations: [CoreComponent, AsideLeftComponent, MainContentComponent, TopAsideLeftComponent, TopNavAppComponent, MenuAsideLeftComponent, SearchFormComponent],
  exports: [CoreComponent]
})
export class CoreModule { }
