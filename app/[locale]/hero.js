import Image from 'next/image'
import React from 'react'
import profile from '../../public/profile.png'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { useMessages } from 'next-intl'

export default function Hero() {
	const t = useMessages()
	
	return (
		<div className='text-center p-2 md:p-10 pb-0'>
			<h2 className='text-5xl py-2 mt-6 text-purple-500 font-JetBrains_Mono font-medium md:text-6xl dark:text-violet-300'>
				Viviane Dessaint
			</h2>
			<h3 className='text-2xl py-2 md:text-3xl dark:text-white'>
				{t.hero.subtitle}
			</h3>
			<p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-200'>
				{t.hero.desc}
			</p>
			<div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400'>
				<a href='https://www.linkedin.com/in/vivianedessaint/'>
					<AiFillLinkedin className='transition-all duration-300 hover:text-purple-500 dark:hover:text-violet-300'/>
				</a>
				<a href="https://github.com/Jubstacheit">
					<AiFillGithub className='transition-all duration-300 hover:text-purple-500 dark:hover:text-violet-300'/>
				</a>
			</div>
			<div className='p-2 mx-auto bg-gradient-to-b from-blue-400 rounded-full max-w-60 max-h-60 md:max-w-96 md:max-h-96 mt-20 overflow-hidden md:h-96 md:w-96'>
				<Image alt='Profile picture' src={profile} objectFit='cover' />
			</div>
		</div>
	)
}