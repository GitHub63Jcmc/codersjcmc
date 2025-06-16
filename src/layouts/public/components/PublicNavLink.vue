<script setup>

    import { computed } from 'vue';
    import { RouterLink, useRoute } from 'vue-router';

    const props = defineProps({
        to: [String, Object],
    });

    const route = useRoute();

    const isActive = computed(() => {

        if (!props.to) {
            return false;
        }

        if (typeof props.to === 'string') {
            return route.path === props.to;
        }  

        if (props.to.name) {
            return route.name === props.to.name;
        }

        if (props.to.path) {
            return route.path === props.to.path;
        }
        return false;
    });

</script>

<template>
    <RouterLink
        :to="props.to"
        class="block py-2 px-3 rounded-sm"
        :class="{
            'text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500': isActive,
            'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700': !isActive,
        }">
        <slot></slot>
    </RouterLink>
</template>