import {Component, inject, input} from '@angular/core';
import {TodoDTO} from "../model/todoDTO";
import {NgIcon} from "@ng-icons/core";
import {RouterLink} from "@angular/router";
import {CrudService} from "../services/crud.service";
import {MatDialog} from "@angular/material/dialog";
import {TodoEditPageComponent} from "../todo-edit-page/todo-edit-page.component";

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [
    NgIcon,
    RouterLink,
  ],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  todo = input<TodoDTO>();
  crudService: CrudService = inject(CrudService);
  dialog = inject(MatDialog);

  delete(todoId: string) {
    this.crudService.deleteTodo(todoId);
  }

  openEditTodoModal():void{
    this.dialog.open(TodoEditPageComponent, {
      width: '1000px',
      data: {
        todoId: this.todo()?.todoId
      }
    })
  }
}
