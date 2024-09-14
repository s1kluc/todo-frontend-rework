import {Component, inject} from '@angular/core';
import {NgIconComponent} from "@ng-icons/core";
import {RouterLink} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {CreateNewTodoComponent} from "../create-new-todo/create-new-todo.component";
import {TodoEditPageComponent} from "../todo-edit-page/todo-edit-page.component";
import {SearchbarComponent} from "../searchbar/searchbar.component";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [NgIconComponent, RouterLink,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  dialog = inject(MatDialog);

  openCreateTodoModal(): void {
    this.dialog.open(CreateNewTodoComponent, {
      width: '1000px'
    })
  }

  openSearchTodoModal(): void {
    this.dialog.open(SearchbarComponent,{
      width: '1000px',
      height: '400px'
    })
  }
}
