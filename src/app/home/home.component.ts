import {Component, inject, OnInit} from '@angular/core';
import {CrudService} from "../services/crud.service";
import {RouterLink, RouterOutlet} from "@angular/router";
import {MatCard} from "@angular/material/card";
import {SidenavbarComponent} from "../sidenavbar/sidenavbar.component";
import {MatIcon} from "@angular/material/icon";
import {MatListItem, MatNavList} from "@angular/material/list";
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from "@angular/material/sidenav";
import {MatButton, MatFabButton} from "@angular/material/button";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
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
    MatFabButton
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
ngOnInit() {
  this.crudService.getTodos(false);
}

  crudService: CrudService = inject(CrudService);
  filteredTodos = this.crudService.todoSignalsArray;
}
