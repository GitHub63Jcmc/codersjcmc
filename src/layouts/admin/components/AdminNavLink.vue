<script setup>
    import { RouterLink } from 'vue-router';
</script>

<template>
    <RouterLink
        activeClass="bg-gray-100"
        class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
        <slot></slot>
    </RouterLink>
</template>