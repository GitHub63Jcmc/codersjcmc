<script setup>
    import { RouterView } from 'vue-router';
    import AdminNav from './components/AdminNav.vue';
import AdminAside from './components/AdminAside.vue';
</script>

<template>
    <AdminNav />
    <AdminAside />

    <div class="p-4 sm:ml-64">
       <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
            <routerView />
       </div>
    </div>
</template>