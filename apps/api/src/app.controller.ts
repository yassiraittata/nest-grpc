import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTodoDto } from './dtos/create-dto.dto';
import { AppService } from './app.service';

@Controller('todos')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getTodos() {
    return this.appService.getTodos();
  }

  @Post()
  createTodo(@Body() dto: CreateTodoDto) {
    return this.appService.createTodo(dto);
  }
}
