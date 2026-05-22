import { create } from "zustand";
import { persist } from "zustand/middleware";
import api from "../api/axios";

// User ka shape
interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
}

// Store ka shape
interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;

  // Actions
  register: (name: string, email: string, password: string, phone: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  clearError: () => void;
}

const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      // Initial State
      user: null,
      token: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,

      // Register
      register: async (name, email, password, phone) => {
        set({ isLoading: true, error: null });
        try {
          const res = await api.post("/auth/register", {
            name,
            email,
            password,
            phone,
          });

          set({
            user: res.data.user,
            token: res.data.token,
            isAuthenticated: true,
            isLoading: false,
          });

          localStorage.setItem("token", res.data.token);
        } 
        catch (error: unknown) {
  const err = error as { response?: { data?: { message?: string } } };
    set({
        isLoading: false,
        error: err.response?.data?.message || "Registration failed",
    });
    }},

      // Login
      login: async (email, password) => {
        set({ isLoading: true, error: null });
        try {
          const res = await api.post("/auth/login", {
            email,
            password,
          });

          set({
            user: res.data.user,
            token: res.data.token,
            isAuthenticated: true,
            isLoading: false,
          });

          localStorage.setItem("token", res.data.token);
        } 
        catch (error: unknown) {
  const err = error as { response?: { data?: { message?: string } } };
    set({
        isLoading: false,
        error: err.response?.data?.message || "Login failed",
    });
    }},

      // Logout
      logout: () => {
        localStorage.removeItem("token");
        set({
          user: null,
          token: null,
          isAuthenticated: false,
          error: null,
        });
      },

      // Clear Error
      clearError: () => set({ error: null }),
    }),
    {
      name: "auth-storage", 
      partialize: (state) => ({
        user: state.user,
        token: state.token,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);

export default useAuthStore;