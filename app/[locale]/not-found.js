'use client'

import { useRouter } from '../../navigation'
import { useEffect } from 'react'

export default function NotFoundPage() {
  const router = useRouter()

  useEffect(() => {
		router.replace('/', { locale: 'en' })
	}, [router])

  return <div>Redirecting...</div>;
}