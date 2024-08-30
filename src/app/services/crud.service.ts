import {Injectable, signal} from "@angular/core";
import {TodoDTO} from "../model/todoDTO";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private getTodoListUrl = 'http://localhost:8080/api/v1/todo-app/home';

  todoSignalsArray = signal<TodoDTO[]>([]);
  errorMessage = signal<string>('');
  loadingState = signal<boolean>(false);
  constructor(private http: HttpClient) {
  }

  getTodos(done: boolean) {

    this.http.get<TodoDTO[]>(`${this.getTodoListUrl}?done=${done}`).subscribe({
      next: value => this.todoSignalsArray.set(value),
      error:git => this.errorMessage.set('Es ist ein Fehler aufgetreten.')
    });
  }
}
