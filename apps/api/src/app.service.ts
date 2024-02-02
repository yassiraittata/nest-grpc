import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateTodoDto } from './dtos/create-dto.dto';

@Injectable()
export class AppService {
  constructor(@Inject('TODO_SERVICE') private client: ClientProxy) {}

  getTodos() {
    // this.client.send({ cmd: 'get-todos' });
  }

  createTodo(dto: CreateTodoDto) {}
}
