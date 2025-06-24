<script setup>
    import { ref } from 'vue';
    const open = ref(false);
</script>

<template>
    <div class="relative">
        <div @click="open = !open">
            <slot name="trigger"></slot>
        </div>

        <div @click="open = false"
            v-show="open" 
            class="absolute z-50 end-0 mt-2 w-48">
            <div class="bg-white shadow-lg rounded-md py-1 flex flex-col">
                <slot></slot>
            </div>
        </div>
    </div>
</template>