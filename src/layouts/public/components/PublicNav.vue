<script setup>
    import { ref } from 'vue';
    import { RouterLink } from 'vue-router';
    import PublicNavLink from './PublicNavLink.vue';
    import AppLogo from '@/modules/shared/components/AppLogo.vue';
    import DropdownMenu from '@/modules/shared/components/DropdownMenu.vue';
    // import DropdownItem from '@modules/shared/components/DropdownItem.vue';
    import DropdownItem from './DropdownItem.vue';

    import { useAuthStore } from '@/modules/auth/stores/authStore';

    const authStore = useAuthStore();

    const openMenu = ref(false);
</script>

<template>
    <nav class="bg-white border-gray-200 dark:bg-gray-900">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <div class="flex items-center space-x-3 rtl:space-x-reverse">
                <RouterLink to="/">
                    <AppLogo />
                </RouterLink>
            </div>
            <div class="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                <DropdownMenu>
                    <template #trigger>
                        <button type="button" class="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                        <span class="sr-only">Open user menu</span>
                        <img class="w-10 h-10 rounded-full" src="/src/assets/img/JoaoWebSite2.jpg" alt="user photo">
                        </button>
                    </template>

                    <template v-if="authStore.isAuthenticated">
                        <DropdownItem :to="{
                            name: 'admin.dashboard'
                        }">
                            Admin
                        </DropdownItem>

                        <button 
                            @click="authStore.logout()"
                            class="block text-left w-full px-4 py-2 leading-5 text-gray-700 hover:bg-gray-100 cursor-pointer">
                            Logout
                        </button>
                    </template>

                    <template v-else>
                        <DropdownItem :to="{
                            name: 'login'
                        }">
                            Iniciar sesión
                        </DropdownItem>

                        <DropdownItem :to="{
                            name: 'register'
                        }">
                            Registrarse
                        </DropdownItem>
                    </template>
                </DropdownMenu>

                <button @click="openMenu = !openMenu"
                    data-collapse-toggle="navbar-user" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
            </div>
            <div class="items-center justify-between w-full md:flex md:w-auto md:order-1" 
                :class="openMenu ? 'block' : 'hidden'"
                id="navbar-user">
                <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                        <PublicNavLink :to="{
                            name: 'home',
                        }">
                            Home
                        </PublicNavLink>
                    </li>
                    <li>
                        <PublicNavLink to="/about">
                            About
                        </PublicNavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>