'use client'

import { TbLanguage } from 'react-icons/tb'
import { useRouter, usePathname } from '@/navigation'
import 'flowbite'
import {ToggleIcon} from './toggleIcon'

export function LangToggle({locale}) {
	const router = useRouter()
	const pathName = usePathname()

	const handleChange = (value) => {
		router.push(pathName, { locale: value })
	}

	const options = [
		{ value: 'en', label: 'EN' },
		{ value: 'fr', label: 'FR' }
	]

	const currentLocale = locale

	return (
		<div>
			<ToggleIcon value={currentLocale} onChange={handleChange} options={options} />
		</div>
	)
}