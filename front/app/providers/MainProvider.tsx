import Layout from '@/components/layout/Layout'
import { store } from '@/store/store'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { FC, PropsWithChildren } from 'react'
import { Provider } from 'react-redux'
import HeadProvider from './HeadProvider'
import ReduxToast from './ReduxToast'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
})

const MainProvider: FC<PropsWithChildren> = ({ children }) => {
	return (
		<HeadProvider>
			<Provider store={store}>
				<QueryClientProvider client={queryClient}>
					<ReduxToast />
					<Layout>{children}</Layout>
				</QueryClientProvider>
			</Provider>
		</HeadProvider>
	)
}

export default MainProvider
