import {Component, ElementRef, inject, OnInit, ViewChild} from '@angular/core';
import {CrudService} from "../services/crud.service";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {MatButton} from "@angular/material/button";
import {LayoutComponent} from "../layout/layout.component";
import {MAT_DIALOG_DATA, MatDialogClose} from "@angular/material/dialog";
import {CreateTodo} from "../model/create.todo";
import {TodoDTO} from "../model/todoDTO";

@Component({
  selector: 'app-todo-edit-page',
  standalone: true,
  imports: [
    FormsModule,
    MatButton,
    RouterLink,
    LayoutComponent,
    MatDialogClose,
    ReactiveFormsModule
  ],
  templateUrl: './todo-edit-page.component.html',
  styleUrl: './todo-edit-page.component.css'
})
export class TodoEditPageComponent  {
  title: string = '';
  description: string = '';
  router: ActivatedRoute = inject(ActivatedRoute);
  crudService: CrudService = inject(CrudService);
  data: {todoId: string} = inject(MAT_DIALOG_DATA);
  todo: TodoDTO = this.crudService.getSingleTodoById(this.data?.todoId);

  editTodoForm = new FormGroup(
    {
      title: new FormControl(this.todo.title, [Validators.required]),
      description: new FormControl(this.todo.description)
    }
  )

  @ViewChild('textArea') textAreaElement: ElementRef<HTMLTextAreaElement> = {} as ElementRef;

  editTodo(){
    const todoEdit: CreateTodo = {
      title: this.editTodoForm.get('title')?.value,
      description: this.editTodoForm.get('description')?.value
    } as CreateTodo;

    this.crudService.editTodo(this.data?.todoId, todoEdit);
  }

  resizeTextArea(): void {
    const textArea = this.textAreaElement.nativeElement;
    textArea.style.height = 'auto';
    if(textArea.scrollHeight < 500){
      textArea.style.height = `${textArea.scrollHeight}px`;
    } else{
      textArea.style.height = '500px';
    }
  }
}
