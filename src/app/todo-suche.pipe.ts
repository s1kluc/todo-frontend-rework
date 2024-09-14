import { Pipe, PipeTransform } from '@angular/core';
import {TodoDTO} from "./model/todoDTO";

@Pipe({
  name: 'todoSuche',
  standalone: true
})
export class TodoSuchePipe implements PipeTransform {

  transform(value: TodoDTO[], searchTerm: string): TodoDTO[] {
    let filteredTodo: TodoDTO[] = [];
    if(searchTerm){
      filteredTodo = value.filter((todo) => todo.title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1)
    }
    return filteredTodo;
  }

}
