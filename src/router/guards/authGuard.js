import { useAuthStore } from '@/modules/auth/stores/authStore';

export const authGuard = (to, from, next) => {
    const AuthStore = useAuthStore();

    if(to.meta.requiresAuth && !AuthStore.isAuthenticated) {
        next({ name: 'login' });
    }else if(to.meta.requiresGuest && AuthStore.isAuthenticated) {
        next({ name: 'home' });
    } else {
        next();
    }
    
}