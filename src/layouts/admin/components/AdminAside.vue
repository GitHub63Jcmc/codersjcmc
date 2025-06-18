<script setup>
import { RouterLink } from 'vue-router';

    const openSidebar = defineModel();
</script>

<template>
   <aside id="logo-sidebar" class="fixed top-4 left-0 z-40 w-64 h-screen pt-20 transition-transform bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" 
       :class="{ 
           '-translate-x-full': !openSidebar 
       }"
       aria-label="Sidebar">
      <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
         <ul class="space-y-2 font-medium">
            <li>
               <AdminNavLink :to="{ 
                  name: 'admin.dashboard' 
               }">
                  <span class="inline-flex w-6 h-6 justify-center items-center">
                     <i class="fa-solid fa-gauge-high"></i>
                  </span>
                  <span class="ms-3">Dashboard</span>
               </AdminNavLink>
            </li>
         </ul>
      </div>
   </aside>
</template>