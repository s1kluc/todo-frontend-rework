import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {TodoEditPageComponent} from "./todo-edit-page/todo-edit-page.component";
import {NotFoundPageComponent} from "./not-found-page/not-found-page.component";
import {CreateNewTodoComponent} from "./create-new-todo/create-new-todo.component";

export const routes: Routes = [
  {
    pathMatch: 'full',
    path: '',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'todo-edit-page',
    component: TodoEditPageComponent,
  },
  {
    path:'create-new-todo',
    component: CreateNewTodoComponent
  },
  {
    path: '**',
    component:NotFoundPageComponent
  }
]
