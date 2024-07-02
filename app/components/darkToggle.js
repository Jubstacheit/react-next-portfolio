'use client'

import { useStore } from "../store"
import React from 'react'
import { BsFillMoonStarsFill } from 'react-icons/bs'

export function DarkToggle() {
	const { setDarkMode } = useStore()

	return (
		<button onClick={setDarkMode} className="cursor-pointer p-2 hover:bg-gray-100 dark:hover:bg-gray-950 rounded-lg">
			<BsFillMoonStarsFill className='text-2xl'/>
		</button>
	)
}