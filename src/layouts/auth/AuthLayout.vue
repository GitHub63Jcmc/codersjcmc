<script setup>
    import AppLogo from '@/modules/shared/components/AppLogo.vue';
    import { RouterView } from 'vue-router';
</script>

<template>
    <section class="bg-gray-50 dark:bg-gray-900 mb-3">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <RouterLink to="/" class="mb-6">
                <AppLogo />
            </RouterLink>
            <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <RouterView />
                </div>
            </div>
        </div>
    </section>
</template>