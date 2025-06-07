import { create } from "zustand";
import { persist } from "zustand/middleware";

type Theme = "light" | "dark";
interface ThemeState {
  theme: Theme;
  toggleTheme: () => void;
  setThem: (theme: Theme) => void;
}

const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: "light",
      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === "light" ? "dark" : "light",
        })),
      setThem: (newTheme: any) =>
        set({
          theme: newTheme,
        }),
    }),
    {
      name: "theme-storage",
    }
  )
);

export default useThemeStore;
