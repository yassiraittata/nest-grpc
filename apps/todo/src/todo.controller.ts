import { Controller, Get } from '@nestjs/common';
import { TodoService } from './todo.service';
import { GrpcMethod } from '@nestjs/microservices';

import {
  Empty,
  PostTodoDTO,
  Todo,
  Todos,
  todoServiceController,
} from 'proto/todo';
import { Observable } from 'rxjs';

@Controller()
export class TodoController implements todoServiceController {
  constructor(private readonly todoService: TodoService) {}

  @GrpcMethod('todoService', 'postTodo')
  postTodo(dto: PostTodoDTO): Todo {
    return this.todoService.postTodo(dto);
  }

  @GrpcMethod('todoService', 'getTodos')
  getTodos(request: Empty): Todos {
    return this.todoService.getTodos();
  }
}
