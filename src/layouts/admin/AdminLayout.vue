<script setup>
    import { RouterView } from 'vue-router';
    import AdminNav from './components/AdminNav.vue';
    import AdminAside from './components/AdminAside.vue';
    import { ref } from 'vue';

    const openSidebar = ref(false);
</script>

<template>
    <AdminNav v-model="openSidebar" />
    <AdminAside v-model="openSidebar" />

    <div class="p-4 sm:ml-64">
       <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
            <routerView />
       </div>
    </div>
</template>