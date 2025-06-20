<script setup>
    import { RouterLink } from 'vue-router';
    
    const props = defineProps({
  to: {
    type: [String, Object],
    required: true
  }
});

console.log('DropdownItem to:', props.to); 
</script>

<template>
    <RouterLink :to="to" class="block w-full px-4 py-2 leading-5 text-gray-700 hover:bg-gray-100 cursor-pointer">
        <slot></slot>
    </RouterLink>
</template>