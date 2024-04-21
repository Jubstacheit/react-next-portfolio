'use client'

import { create } from 'zustand'

export const useStore = create((set) => ({
	darkMode: true,
	setDarkMode: (value) => set({ darkMode: value }),

	shineMode: false,
	setShineMode: (value) => set({ shineMode: value }),
}));