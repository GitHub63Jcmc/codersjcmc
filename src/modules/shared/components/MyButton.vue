<script setup>
    const props = defineProps({
        color: {
            type: String,
            default: 'primary'
        }
    });

    const buttonClasses = {// Esto es un switch para definir las clases del botón según el color seleccionado.
        primary: 'bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800',
        secondary: 'bg-gray-600 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800',
        success: 'bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800',
        danger: 'bg-danger-600 hover:bg-danger-700 focus:ring-4 focus:outline-none focus:ring-danger-300 dark:bg-danger-600 dark:hover:bg-danger-700 dark:focus:ring-danger-800',
    }[props.color] || 'bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800';
</script>

<template>
    <button class="w-full text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center disabled:opacity-50" 
        :class="buttonClasses">
        <slot></slot>
    </button>
</template>

