import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {TodoEditPageComponent} from "./todo-edit-page/todo-edit-page.component";
import {NotFoundPageComponent} from "./not-found-page/not-found-page.component";
import {UnplannedComponent} from "./unplanned/unplanned.component";
import {TodayPlannedComponent} from "./today-planned/today-planned.component";

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
    path: 'unplanned',
    component: UnplannedComponent
  },
  {
    path: 'today',
    component: TodayPlannedComponent
  },
  {
    path: '**',
    component:NotFoundPageComponent
  }
]
