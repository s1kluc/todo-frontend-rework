import {Component, inject} from '@angular/core';
import {CrudService} from "../services/crud.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  crudService: CrudService = inject(CrudService);
  filteredTodos = this.crudService.todoSignalsArray;
}
