import { create } from 'zustand'

export const useStore = create((set) => {
	// Check if there's a preferred theme in local storage
	const preferredTheme = localStorage.getItem('preferredTheme');
	const darkMode = preferredTheme ? preferredTheme === 'dark' : false;
	
	return {
		darkMode,
		setDarkMode: () => set((state) => {
			const newDarkMode = !state.darkMode;
			// Save the new theme preference in local storage
			localStorage.setItem('preferredTheme', newDarkMode ? 'dark' : 'light');
			return { darkMode: newDarkMode };
		}),
	};
});