import { useAuth } from '@/hooks/useAuth'
import { TypeComponentAuthFields } from '@/shared/types/auth.types'
import { useRouter } from 'next/router'
import { FC } from 'react'

const CheckRole: FC<TypeComponentAuthFields> = ({
	children,
	Component: { isAdmin, isUser },
}) => {
	const { user } = useAuth()

	const router = useRouter()

	const Children = () => <>{children}</>

	if (!isAdmin) {
		router.pathname !== '/404' && router.replace('/404')
		return null
	}

	if (user?.isAdmin) return <Children />

	const isLoginUser = user && !user.isAdmin

	if (isLoginUser && isUser) {
		return <Children />
	} else {
		router.pathname !== '/auth' && router.replace('/auth')
		return null
	}
}

export default CheckRole
