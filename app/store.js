import {create} from 'zustand'

const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

export const useStore = create((set) => ({
	darkMode: prefersDarkMode,
	setDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
}))