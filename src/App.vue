<script setup>
  import { RouterView } from 'vue-router'

  console.log(localStorage.getItem('access_token'));
</script>

<template>
  <RouterView />
</template>

<style scoped>

</style>
