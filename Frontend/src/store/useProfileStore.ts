import { create } from "zustand";
import api from "../api/axios";

interface ProfileState {
  isLoading: boolean;
  error: string | null;
  isSaved: boolean;

  saveStep: (step: number, data: object) => Promise<boolean>;
  submitProfile: () => Promise<boolean>;
  clearError: () => void;
}

const useProfileStore = create<ProfileState>((set) => ({
  isLoading: false,
  error: null,
  isSaved: false,

  // Step save karo
  saveStep: async (step, data) => {
    set({ isLoading: true, error: null });
    try {
      await api.post("/profile/save-step", { step, data });
      set({ isLoading: false, isSaved: true });
      return true;
    } catch (error: unknown) {
      const err = error as { response?: { data?: { message?: string } } };
      set({
        isLoading: false,
        error: err.response?.data?.message || "Step not saved",
      });
      return false;
    }
  },

  // Final submit
  submitProfile: async () => {
    set({ isLoading: true, error: null });
    try {
      await api.post("/profile/submit");
      set({ isLoading: false });
      return true;
    } catch (error: unknown) {
      const err = error as { response?: { data?: { message?: string } } };
      set({
        isLoading: false,
        error: err.response?.data?.message || "Not Submitted",
      });
      return false;
    }
  },

  clearError: () => set({ error: null }),
}));

export default useProfileStore;