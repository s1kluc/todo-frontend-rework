import {Component, inject} from '@angular/core';
import {LayoutComponent} from "../layout/layout.component";
import {CrudService} from "../services/crud.service";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {StatusfilterPipe} from "../pipes/statusfilter.pipe";
import {TodoComponent} from "../todo/todo.component";
import {DateFilterPipePipe} from "../pipes/date-filter-pipe.pipe";

@Component({
  selector: 'app-unplanned',
  standalone: true,
  imports: [
    LayoutComponent,
    MatProgressSpinner,
    StatusfilterPipe,
    TodoComponent,
    DateFilterPipePipe,
  ],
  templateUrl: './unplanned.component.html',
  styleUrl: './unplanned.component.css'
})
export class UnplannedComponent {
  crudService: CrudService = inject(CrudService);

  loading = this.crudService.loadingState;
  filteredTodos = this.crudService.todoSignalsArray;
}
