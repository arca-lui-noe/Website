'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Theme state manager with persistent storage
export const useThemeStore = create(
  persist(
    (set) => ({
      theme: 'light',
      setTheme: (theme) => set({ theme }),
      toggleTheme: () => set((state) => ({
        theme: state.theme === 'light' ? 'dark' : 'light'
      })),
    }),
    {
      name: 'theme-storage', // localStorage name
    }
  )
);

// Language state manager
export const useLanguageStore = create(
  persist(
    (set) => ({
      language: 'hu',
      setLanguage: (language) => set({ language }),
    }),
    {
      name: 'language-storage', // localStorage name
    }
  )
);