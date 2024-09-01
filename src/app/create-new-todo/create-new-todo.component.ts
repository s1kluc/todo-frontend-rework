import {Component, inject} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {CrudService} from "../services/crud.service";
import {MatFormField, MatInput, MatLabel} from "@angular/material/input";

@Component({
  selector: 'app-create-new-todo',
  standalone: true,
  imports: [
    MatButton,
    RouterLink,
    FormsModule,
    MatInput,
    MatFormField,
    MatLabel
  ],
  templateUrl: './create-new-todo.component.html',
  styleUrl: './create-new-todo.component.css'
})
export class CreateNewTodoComponent {

  title: string = '';
  description: string = '';
  crudService: CrudService = inject(CrudService);

  createTodo() {
    this.crudService.createTodo(this.title, this.description)
  }
}
