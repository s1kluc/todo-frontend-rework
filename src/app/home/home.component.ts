import {Component, effect, inject} from '@angular/core';
import {CrudService} from "../services/crud.service";
import {RouterLink, RouterOutlet} from "@angular/router";
import {MatCard} from "@angular/material/card";
import {SidenavbarComponent} from "../sidenavbar/sidenavbar.component";
import {MatIcon} from "@angular/material/icon";
import {MatListItem, MatNavList} from "@angular/material/list";
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from "@angular/material/sidenav";
import {MatButton, MatFabButton} from "@angular/material/button";
import {LayoutComponent} from "../layout/layout.component";
import {TodoComponent} from "../todo/todo.component";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {StatusfilterPipe} from "../pipes/statusfilter.pipe";
import {TodoDTO} from "../model/todoDTO";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    LayoutComponent,
    RouterLink,
    MatCard,
    SidenavbarComponent,
    MatIcon,
    MatListItem,
    MatNavList,
    MatSidenav,
    MatSidenavContainer,
    MatSidenavContent,
    MatButton,
    RouterOutlet,
    MatFabButton,
    TodoComponent,
    MatProgressSpinner,
    StatusfilterPipe
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  crudService: CrudService = inject(CrudService);
  loading = this.crudService.loadingState;
  filteredTodos = this.crudService.todoSignalsArray;

  constructor() {}
}
