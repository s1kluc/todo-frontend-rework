import { Pipe, PipeTransform } from '@angular/core';
import {TodoDTO} from "../model/todoDTO";

@Pipe({
  name: 'dateFilterPipe',
  standalone: true
})
export class DateFilterPipePipe implements PipeTransform {

  transform(value: TodoDTO[], date: Date): TodoDTO[] {
    return value.filter((todo) => todo.dueDate === null);
  }

}
