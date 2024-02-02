/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "todo";

export interface Todo {
  id: number;
  title: string;
  description: string;
  isDone: boolean;
}

export interface Todos {
  Todos: Todo[];
}

export interface PostTodoDTO {
  title: string;
  description: string;
  isDone: boolean;
}

export interface Empty {
}

export const TODO_PACKAGE_NAME = "todo";

export interface todoServiceClient {
  postTodo(request: PostTodoDTO): Observable<Todo>;

  getTodos(request: Empty): Observable<Todos>;
}

export interface todoServiceController {
  postTodo(request: PostTodoDTO): Promise<Todo> | Observable<Todo> | Todo;

  getTodos(request: Empty): Promise<Todos> | Observable<Todos> | Todos;
}

export function todoServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["postTodo", "getTodos"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("todoService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("todoService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const TODO_SERVICE_NAME = "todoService";
