import Layout from '@/components/layout/Layout'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { FC, PropsWithChildren } from 'react'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
})

const MainProvider: FC<PropsWithChildren> = ({ children }) => {
	return (
		<QueryClientProvider client={queryClient}>
			<Layout>{children}</Layout>
		</QueryClientProvider>
	)
}

export default MainProvider
