import {Component, inject} from '@angular/core';
import {CrudService} from "../services/crud.service";
import {LayoutComponent} from "../layout/layout.component";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {StatusfilterPipe} from "../pipes/statusfilter.pipe";
import {TodoComponent} from "../todo/todo.component";

@Component({
  selector: 'app-today-planned',
  standalone: true,
  imports: [
    LayoutComponent,
    MatProgressSpinner,
    StatusfilterPipe,
    TodoComponent
  ],
  templateUrl: './today-planned.component.html',
  styleUrl: './today-planned.component.css'
})
export class TodayPlannedComponent {
  crudService: CrudService = inject(CrudService);

  loading = this.crudService.loadingState;
  filteredTodos = this.crudService.todoSignalsArray;
}
