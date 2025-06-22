import { defineStore } from "pinia";
import authService from "../services/authService";
import { computed } from "vue";

export const useAuthStore = defineStore('auth', () => {
    const token = ref(localStorage.getItem('access_token') || null);
    const isAuthenticated = computed(() => !!token.value);

    async function login(credencials) {
        try {
            const response = await authService.login(credencials);
            localStorage.setItem('access_token', response.access_token);
        } catch (error) {
            throw error;
        }
    }

    return {
        isAuthenticated,
        login,
    }

});
