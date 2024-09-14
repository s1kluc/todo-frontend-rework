import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {TodoEditPageComponent} from "./todo-edit-page/todo-edit-page.component";
import {NotFoundPageComponent} from "./not-found-page/not-found-page.component";

export const routes: Routes = [
  {
    pathMatch: 'full',
    path: '',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '**',
    component:NotFoundPageComponent
  }
]
