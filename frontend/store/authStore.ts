import { create } from "zustand";

interface User {
    email: string;
    name: string;
}

interface AuthState {
    isLoggedIn: boolean;
    user: User | null;
    login: (userData: User) => void;
    logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    isLoggedIn: false,
    user: null,
    login: (userData) => set({ isLoggedIn: true, user: userData }), 
    logout: () => set({ isLoggedIn: false, user: null }), 
}));
