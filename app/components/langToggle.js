'use client'

import { TbLanguage } from 'react-icons/tb'
import { useRouter, usePathname } from '@/navigation'

export function LangToggle({locale}) {
	const router = useRouter()
	const pathName = usePathname()

	const handleChange = e => {
		router.push(pathName, { locale: e.target.value })
	}

	return (
		<div className='relative text-2xl cursor-pointer'>
            <TbLanguage className='absolute top-0 left-0 text-purple-500 dark:text-violet-300 font-JetBrains_MonoBold'/>
            <select onChange={handleChange} value={locale} className='appearance-none pl-6 pr-2 text-purple-500 dark:text-violet-300 font-JetBrains_MonoBold'>
                <option value='en'>EN</option>
                <option value='fr'>FR</option>
            </select>
        </div>
	)
}