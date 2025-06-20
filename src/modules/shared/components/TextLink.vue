<script setup>
    import { RouterLink } from 'vue-router';

</script>

<template>
    <RouterLink class="font-medium text-blue-600 hover:underline dark:text-blue-500">
        <slot></slot>
    </RouterLink>
</template>