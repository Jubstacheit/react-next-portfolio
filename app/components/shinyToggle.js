'use client'

import { useStore } from "../store"

export function ShinyToggle() {
	const { setShineMode } = useStore()

	const isShiny = () => {
		setShineMode(false);
		setShineMode(true);
		const timer = setTimeout(() => {
		  setShineMode(false);
		}, 2000);
	
		return () => clearTimeout(timer);
	  }

	return (
		<span onClick={isShiny} className='text-purple-500 hover:cursor-pointer dark:text-violet-300 font-JetBrains_MonoBold'>resume</span>
	)
}