export interface TodoDTO{
  userId: string,
  todoId: number,
  title: string,
  description: string,
  done: boolean,
  createdAt: Date,
  updatedAt: Date,
  dueDate: Date
}
