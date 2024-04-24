'use client'

import { useRouter } from '../navigation'

export default function NotFoundPage() {
	const router = useRouter()
	
	const redirect = () => {
		router.replace('/', { locale: 'en' })
	}
	
	redirect()
	
	return;
}