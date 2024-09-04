import { create } from "zustand";

interface AppState {
  theme: "light" | "dark";
  navigating: boolean;

  setTheme: (theme: "light" | "dark") => void;
  setNavigating: (navigating: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
  theme: "light",
  navigating: false,

  setTheme: (theme: "light" | "dark") => set({ theme }),
  setNavigating: (navigating) => set({ navigating }),
}));
