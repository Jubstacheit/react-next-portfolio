'use client'

import { useStore } from "../store"
import { BsFillMoonStarsFill } from 'react-icons/bs'

export function DarkToggle() {
	const { darkMode, setDarkMode } = useStore()

	return (
		<BsFillMoonStarsFill onClick={setDarkMode} className='cursor-pointer text-2xl'/>
	)
}