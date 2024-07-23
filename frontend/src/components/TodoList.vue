<template>
  <div>
    <h1>Todo List</h1>
    <ul>
      <li v-for="todo in todos" :key="todo.id">{{ todo.title }}:  {{ todo.description }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref, onMounted, UnwrapRef, Ref} from 'vue';
import { getTodos } from '../api/TodoService';
import { Todo } from '../models/Todo';

export default defineComponent({
  name: 'TodoList',
  setup() {
    let todos: Ref<UnwrapRef<Todo[]>> = ref([]);

    const fetchTodos = async () => {
      try {
        todos.value = await getTodos();
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };

    onMounted(() => {
      fetchTodos();
    });

    return { todos };
  },
});
</script>
