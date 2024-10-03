import {Injectable, signal} from "@angular/core";
import {TodoDTO} from "../model/todoDTO";
import {HttpClient} from "@angular/common/http";
import {finalize} from "rxjs";
import {CreateTodo} from "../model/create.todo";

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private getTodoListUrl = 'http://localhost:8080/api/v1/todos';

  todoSignalsArray = signal<TodoDTO[]>([]);
  errorMessage = signal<string>('');
  loadingState = signal<boolean>(true);

  constructor(private http: HttpClient) {
  }

  getTodos() {
    this.loadingState.set(true);
    this.http.get<TodoDTO[]>(`${this.getTodoListUrl}?user=9d0cdf53-96bb-46c0-8509-5b980063afe3`)
      .pipe(finalize(() => this.loadingState.set(false))).subscribe({
      next: value => this.todoSignalsArray.set(value),
      error: () => this.errorMessage.set('')
    });
  }

  deleteTodo(todoId: number) {
    this.http.delete<void>(`${this.getTodoListUrl}/${todoId}`).subscribe(
      {
        next: () => {
          this.todoSignalsArray.update(value => value.filter((todo) => todo.todoId !== todoId))
        },
        error: () => {
        }
      }
    );
  }

  createTodo(todoCreation: CreateTodo) {

    this.http.post<TodoDTO>(`${this.getTodoListUrl}`,
      todoCreation
    ).subscribe({
      next: todo => {
        this.todoSignalsArray.update(value => [...value, todo]);
      },
    });
  }

  editTodo(todoId: number, todoEdit: CreateTodo) {
    this.http.put<void>(`${this.getTodoListUrl}/${todoId}`, {
      todoId: todoId,
      title: todoEdit.title,
      description: todoEdit.description
    }).subscribe(
      {
        next: () => {
          this.todoSignalsArray.update((todoArray) => {
            let updateItem = this.todoSignalsArray().find(itemToUpdate => itemToUpdate.todoId === todoId);
            let indexOfUpdateItem = todoArray.indexOf(updateItem!);
            todoArray[indexOfUpdateItem].title = todoEdit.title;
            todoArray[indexOfUpdateItem].description = todoEdit.description;
            return todoArray;
          })
        },
        error: () => {
        }
      }
    )
  }

  getSingleTodoById(todoId: number): TodoDTO {
    let todoDTO: TodoDTO;
    todoDTO = this.todoSignalsArray().find((todo) => todo.todoId === todoId)!;
    return todoDTO;
  }

  updateStatus(todoId: number, status: boolean) {
    this.http.put(`${this.getTodoListUrl}/status/${todoId}`, {}).pipe().subscribe(
      {
        next: value => this.todoSignalsArray.update((todoArray) => {
          let updateItem = this.todoSignalsArray().find((todo) => todo.todoId === todoId);
          let indexOfUpdateItem = todoArray.indexOf(updateItem!);
          todoArray[indexOfUpdateItem].done = status;
          return this.filterStatusTodo(todoArray);
        })
      }
    )
  }


  private filterStatusTodo(todos: TodoDTO[]): TodoDTO[] {
    return todos.filter((todo) => todo.done !== true);
  }

}
