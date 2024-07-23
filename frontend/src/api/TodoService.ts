import axiosInstance from './AxiosInstance';
import { Todo } from '../models/Todo.ts';
import { AxiosResponse } from 'axios';
import { TodoResponse } from "./responses/TodosResponse.ts";

export const getTodos = async (): Promise<Todo[]> => {
    try {
        const response: AxiosResponse<TodoResponse> = await axiosInstance.get<TodoResponse>('/todos');
        return response.data.todos;
    } catch (error) {
        console.error('Error fetching todos:', error);
        throw error;
    }
};
