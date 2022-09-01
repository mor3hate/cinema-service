import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'
import { TypeComponentAuthFields } from '@/shared/types/auth.types'
import Cookies from 'js-cookie'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { FC, useEffect } from 'react'

const DynamicCheckRole = dynamic(() => import('./CheckRole'), { ssr: false })

const AuthProvider: FC<TypeComponentAuthFields> = ({
	children,
	Component: { isAdmin, isUser },
}) => {
	const { user } = useAuth()

	const { logOut, checkAuth } = useActions()

	const { pathname } = useRouter()

	useEffect(() => {
		const token = Cookies.get('accessToken')
		if (token) checkAuth()
	}, [])

	useEffect(() => {
		const token = Cookies.get('refreshToken')
		if (!token && user) logOut()
	}, [pathname])

	return !isAdmin && !isUser ? (
		<>{children}</>
	) : (
		<DynamicCheckRole Component={{ isAdmin, isUser }}>
			{children}
		</DynamicCheckRole>
	)
}

export default AuthProvider
