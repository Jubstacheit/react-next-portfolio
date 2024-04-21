'use client'

import { create } from 'zustand'

export const useStore = create((set, get) => ({
	darkMode: true,
	setDarkMode: () => {
        const currentDarkMode = get().darkMode;
        set({ darkMode: !currentDarkMode });
    },

	shineMode: false,
	setShineMode: (value) => set({ shineMode: value }),
}));