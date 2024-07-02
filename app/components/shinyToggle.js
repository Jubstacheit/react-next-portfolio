'use client'

import React from 'react'
import { useStore } from "../store"
import { useState } from "react"
import { useMessages } from "next-intl"

export function ShinyToggle() {
	const { setShineMode } = useStore()
	const [isClicked, setIsClicked] = useState(false);
	const t = useMessages()

	const isShiny = () => {
		if (!isClicked) {
            setIsClicked(true);
            setShineMode(true);
            const timer = setTimeout(() => {
                setShineMode(false);
                setIsClicked(false);
            }, 2000);
        
            return () => clearTimeout(timer);
        }
	}

	return (
		<span onClick={isShiny} className='text-purple-500 hover:cursor-pointer dark:text-violet-300 font-JetBrains_MonoBold'>{t.experiences.resume}</span>
	)
}