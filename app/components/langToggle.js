'use client'

import { useRouter, usePathname } from '@/navigation'

export function LangToggle({locale}) {
	const router = useRouter()
	const pathName = usePathname()

	const handleChange = e => {
		router.push(pathName, { locale: e.target.value })
	}

	return (
		<select onChange={handleChange} value={locale} className='text-purple-500 dark:text-violet-300 font-JetBrains_MonoBold'>
			<option value='en'>EN</option>
			<option value='fr'>FR</option>
		</select>
	)
}