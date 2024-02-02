import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { PostTodoDTO } from 'proto/todo';

@Controller('todos')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getTodos() {
    return this.appService.getTodos();
  }

  @Post()
  createTodo(@Body() dto: PostTodoDTO) {
    return this.appService.createTodo(dto);
  }
}
