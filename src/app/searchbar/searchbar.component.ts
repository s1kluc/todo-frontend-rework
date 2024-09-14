import {Component, inject} from '@angular/core';
import {NgIcon} from "@ng-icons/core";
import {FormsModule} from "@angular/forms";
import {TodoSuchePipe} from "../todo-suche.pipe";
import {CrudService} from "../services/crud.service";
import {TodoComponent} from "../todo/todo.component";

@Component({
  selector: 'app-searchbar',
  standalone: true,
  imports: [
    NgIcon,
    FormsModule,
    TodoSuchePipe,
    TodoComponent,
  ],
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.css'
})
export class SearchbarComponent {

  searchTerm: string = '';
  crudService: CrudService = inject(CrudService);
  todoArray = this.crudService.todoSignalsArray;


}
