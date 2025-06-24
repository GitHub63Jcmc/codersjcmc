import { defineStore } from "pinia";
import authService from "../services/authService";
import { computed, ref } from "vue";

export const useAuthStore = defineStore('auth', () => {
    const token = ref(localStorage.getItem('access_token') || null);
    const isAuthenticated = computed(() => !!token.value);

    async function login(credencials) {
        try {
            const response = await authService.login(credencials);
            localStorage.setItem('access_token', response.access_token);
            token.value = response.access_token;
        } catch (error) {
            throw error;
        }
    }

    async function logout() {
        try {
            await authService.logout();
            localStorage.removeItem('access_token');
            token.value = null;
        } catch (error) {
            throw error;
        }
    }

    return {
        isAuthenticated,
        login,
        logout,
    }

});

// {
//     "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE3NTA2MTM5NjIsImV4cCI6MTc1MDYxNzU2MiwibmJmIjoxNzUwNjEzOTYyLCJqdGkiOiJkZXdzeWh1YzRCVlFNclpKIiwic3ViIjoiMSIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.E0O0_3cWTgpaBpFD0_0L8VpwBAKOt19XQgmuA2EZhYw",
//     "token_type": "bearer",
//     "expires_in": 3600
// }