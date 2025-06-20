<script setup>
    import { ref } from 'vue';
    const open = ref(false);
</script>

<template>
    <div class="relative">
        <div>
            <slot name="trigger"></slot>
        </div>

        <div class="absolute z-50 end-0 mt-2 w-48">
            <div class="bg-white shadow-lg rounded-md py-1 flex flex-col">
                <slot></slot>
            </div>
        </div>
    </div>
</template>