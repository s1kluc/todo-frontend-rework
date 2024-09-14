import {Component, ElementRef, inject, ViewChild} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {CrudService} from "../services/crud.service";
import {MatFormField, MatInput, MatLabel} from "@angular/material/input";
import {SidenavbarComponent} from "../sidenavbar/sidenavbar.component";
import {LayoutComponent} from "../layout/layout.component";
import {MatDialogClose} from "@angular/material/dialog";
import {CreateTodo} from "../model/create.todo";

@Component({
  selector: 'app-create-new-todo',
  standalone: true,
  imports: [
    MatButton,
    RouterLink,
    FormsModule,
    MatInput,
    MatFormField,
    MatLabel,
    SidenavbarComponent,
    LayoutComponent,
    ReactiveFormsModule,
    MatDialogClose,
  ],
  templateUrl: './create-new-todo.component.html',
  styleUrl: './create-new-todo.component.css'
})
export class CreateNewTodoComponent {

  title: string = '';
  description: string = '';
  crudService: CrudService = inject(CrudService);

  createTodoForm = new FormGroup(
    {
      title: new FormControl('', [Validators.required]),
      description: new FormControl('')
    }
  )

  @ViewChild('textArea') textAreaElement: ElementRef<HTMLTextAreaElement> = {} as ElementRef;

  createTodo() {
    const todoCreation : CreateTodo = {
      title: this.createTodoForm.get('title')?.value,
      description: this.createTodoForm.get('description')?.value
    } as CreateTodo;

    console.log()

    this.crudService.createTodo(todoCreation);
  }

  resizeTextArea(): void{
    const textArea = this.textAreaElement.nativeElement;
    textArea.style.height = 'auto';
    if(textArea.scrollHeight < 500){
      textArea.style.height = `${textArea.scrollHeight}px`;
    } else {
      textArea.style.height = '500px';
    }

  }


}
