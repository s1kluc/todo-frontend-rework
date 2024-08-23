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
export class AppComponent implements OnInit {
  crudService = inject(CrudService);
  userId:string= '9d0cdf53-96bb-46c0-8509-5b980063afe3'
    ngOnInit() {
      this.crudService.getTodos(false);
    }
}
