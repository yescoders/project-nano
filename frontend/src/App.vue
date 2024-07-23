<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";

</script>

<template>
    <h1 class="bg-amber-400">Monir</h1>
    <nav class="bg-amber-400">
        <RouterLink to="/" class="px-8">Home</RouterLink>
        <RouterLink to="/login" class="p-1">Login page</RouterLink>
        <RouterLink to="/register" class="p-1">Register page</RouterLink>
        <RouterLink to="/dashboard" class="p-1">Dashboard</RouterLink>
    </nav>
    <div>
        <RouterView />
    </div>
</template>

<style scoped lang="scss">
</style>
