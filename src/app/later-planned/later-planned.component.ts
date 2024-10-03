import {Component, inject} from '@angular/core';
import {LayoutComponent} from "../layout/layout.component";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {StatusfilterPipe} from "../pipes/statusfilter.pipe";
import {TodoComponent} from "../todo/todo.component";
import {CrudService} from "../services/crud.service";

@Component({
  selector: 'app-later-planned',
  standalone: true,
  imports: [
    LayoutComponent,
    MatProgressSpinner,
    StatusfilterPipe,
    TodoComponent
  ],
  templateUrl: './later-planned.component.html',
  styleUrl: './later-planned.component.css'
})
export class LaterPlannedComponent {
  crudService: CrudService = inject(CrudService);
  loading = this.crudService.loadingState;
  filteredTodos = this.crudService.todoSignalsArray;

  constructor() {}

}
