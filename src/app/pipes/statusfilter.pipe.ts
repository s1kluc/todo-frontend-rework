import { Pipe, PipeTransform } from '@angular/core';
import {TodoDTO} from "../model/todoDTO";

@Pipe({
  name: 'statusfilter',
  standalone: true
})
export class StatusfilterPipe implements PipeTransform {

  transform(value: TodoDTO[], wstatus: string,  includeDone: boolean = false ): TodoDTO[] {
    let todos = value;

    if(!includeDone){
      todos = todos.filter((todo) => todo.done !== true);
    }

    if(wstatus === 'planned'){
      todos = todos.filter((todo) => todo.dueDate !== null);
    }

    if(wstatus === 'unplanned'){
      todos = todos.filter((todo) => todo.dueDate === null);
    }



    if(wstatus === 'today'){
      console.log(todos);
      const today = new Date();
      todos = todos.filter((todo) => {
        if(todo.dueDate){
          const dueDateString = todo.dueDate.toLocaleString();
          const dueDate = new Date(dueDateString);
          console.log(dueDate);
          return new Date(todo.dueDate).toDateString() === today.toDateString();
        }
        return false;
      } );
    }

    return todos;
  }

}
