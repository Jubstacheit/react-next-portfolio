'use client'

import { useEffect } from 'react';
import { useStore } from '../store';

export const useDarkMode = () => {
  const setDarkMode = useStore((state) => state.setDarkMode);

  useEffect(() => {
    if (typeof window !== 'undefined') {
		const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
		setDarkMode(prefersDarkMode);
	  }
  }, [setDarkMode]);
}