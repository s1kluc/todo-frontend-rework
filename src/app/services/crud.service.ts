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
    this.loadingState.set(true);
    this.http.get<TodoDTO[]>(`${this.getTodoListUrl}?done=${done}`).subscribe({
      next: value => this.todoSignalsArray.set(value),
    });
    this.loadingState.set(false);
  }

  deleteTodo(todoId: string) {
    console.log('passt')
    this.http.delete(`${this.getTodoListUrl}/${todoId}/delete`).subscribe(
    );
  }

  createTodo(todoTitle: string, todoDescription: string) {
    console.log(todoTitle)
    console.log(todoDescription)
    this.http.post<TodoDTO>(`${this.getTodoListUrl}/create`,
      {
        userId: '9d0cdf53-96bb-46c0-8509-5b980063afe3',
        title: todoTitle,
        description: todoDescription
      }
    ).subscribe({
      next: todo => {
        this.todoSignalsArray.update(value => [...value, todo]);
        console.log(todo.todoId)
      },
    });
    console.log("test")
  }
}
