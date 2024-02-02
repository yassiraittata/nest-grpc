import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { CreateTodoDto } from './dtos/create-dto.dto';
import { TODO_SERVICE_NAME, todoServiceClient } from 'proto/todo';

@Injectable()
export class AppService implements OnModuleInit {
  private todoServiceClient: todoServiceClient;
  constructor(@Inject('TODO_SERVICE') private client: ClientGrpc) {}

  getTodos() {
    return this.todoServiceClient.getTodos({})
  }

  createTodo(dto: CreateTodoDto) {
    return this.todoServiceClient.postTodo(dto);
  }

  onModuleInit() {
    this.todoServiceClient = this.client.getService(TODO_SERVICE_NAME);
  }
}
