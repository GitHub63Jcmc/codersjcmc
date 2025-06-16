<script setup>
    import { RouterView } from 'vue-router';
    import PublicNav from './components/PublicNav.vue';
    import PublicFooter from './components/PublicFooter.vue';
</script>

<template>
    <PublicNav></PublicNav>

    <div class="max-w-screen-xl mx-auto p-4 ">
        <RouterView></RouterView>
    </div>

    <PublicFooter></PublicFooter>

</template>