<script setup lang="ts">
import TodoList from './components/TodoList.vue';

</script>

<template>
    <div class="p-6 bg-blue-500 text-white my-class">
        Hello, Tailwind with SCSS!
    </div>
  <TodoList />
</template>

<style scoped lang="scss">
.my-class {
    @apply text-center; // Using Tailwind utilities in SCSS
    color: red;
}
</style>
