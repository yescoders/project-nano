<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";

</script>

<template>
    <nav class="bg-green-500">
        <RouterLink to="/" class="p-2">Home</RouterLink>
        <RouterLink to="/login" class="p-2">Login page</RouterLink>
        <RouterLink to="/register" class="p-2">Register page</RouterLink>
        <RouterLink to="/dashboard" class="p-2">Dashboard</RouterLink>
    </nav>
    <div class="p-5">
        <RouterView />
    </div>
</template>

<style scoped lang="scss">
</style>
