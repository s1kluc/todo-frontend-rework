import {Component, inject, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {CrudService} from "./services/crud.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  crudService = inject(CrudService);

  ngOnInit() {
    this.crudService.getTodos();
  }

}
