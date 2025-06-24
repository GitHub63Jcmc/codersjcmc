<script setup>
  import { onMounted } from 'vue';
  import { RouterView } from 'vue-router'

  import { useAuthStore } from './modules/auth/stores/authStore';

  const authStore = useAuthStore();

  onMounted(async () => {
      try {
          await authStore.fetchUser();
      } catch (error) {
          console.error(error);
      }
  });

</script>

<template>
  <RouterView />
</template>

<style scoped>

</style>
