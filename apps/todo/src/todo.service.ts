import { Injectable } from '@nestjs/common';

import { Empty, PostTodoDTO, Todo, Todos } from 'proto/todo';

@Injectable()
export class TodoService {
  private todos: Todo[] = [
    {
      id: 1,
      title: 'some title',
      description: 'do it as soon as possible',
      isDone: false,
    },
    {
      id: 2,
      title: 'second title',
      description: 'whenever you are ready!',
      isDone: false,
    },
  ];

  postTodo(request: PostTodoDTO): Todo {
    const todo: Todo = {
      id: 5,
      title: 'added todo',
      description: 'just to tet things',
      isDone: false,
    };
    return todo;
  }

  getTodos(): Todos {
    return { Todos: this.todos };
  }
}
