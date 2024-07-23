import { Todo } from "../../models/Todo.ts";

export interface TodoResponse {
    status: string;
    todos: Todo[];
}
