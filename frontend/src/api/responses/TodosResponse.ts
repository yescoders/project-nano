import {Todo} from "../../models/todo.ts";

export interface TodoResponse {
    status: string;
    todos: Todo[];
}
