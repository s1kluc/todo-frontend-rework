import {Injectable, signal} from "@angular/core";
import {TodoDTO} from "../model/todoDTO";
import {HttpClient} from "@angular/common/http";
import {finalize} from "rxjs";
import {CreateTodo} from "../model/create.todo";

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private getTodoListUrl = 'http://localhost:8080/api/v1/todo-app/home';

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

  deleteTodo( todoId: string) {
    this.http.delete<void>(`${this.getTodoListUrl}?user=9d0cdf53-96bb-46c0-8509-5b980063afe3&todo=${todoId}`).subscribe(
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

    this.http.post<TodoDTO>(`${this.getTodoListUrl}?user=9d0cdf53-96bb-46c0-8509-5b980063afe3`,
      todoCreation
    ).subscribe({
      next: todo => {
        this.todoSignalsArray.update(value => [...value, todo]);
        console.log(todo.todoId)
      },
    });
  }

  editTodo(todoId:string, todoEdit: CreateTodo) {
    this.http.put<void>(`${this.getTodoListUrl}?user=9d0cdf53-96bb-46c0-8509-5b980063afe3`, {
      todoId: todoId,
      title:todoEdit.title,
      description: todoEdit.description
    }).subscribe(
      {
        next: () => {
          this.todoSignalsArray.update((todoArray) => {
            let updateItem = this.todoSignalsArray().filter(itemToUpdate => itemToUpdate.todoId === String(todoId))[0];
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

  getSingleTodoById(todoId: string): TodoDTO{
    return this.todoSignalsArray().find((todo) => todo.todoId === todoId)!;
  }

  getFilteredTodo(searcTerm: string){
    let filteredTodo: TodoDTO[] = [];
    if(searcTerm){
      filteredTodo = this.todoSignalsArray().filter((todo) => todo.title.toLowerCase().indexOf(searcTerm.toLowerCase()) !== -1);
    }
    return filteredTodo;
  }

}
