import type { AppProps } from 'next/app'
import { StrictMode } from 'react'
import { QueryCache, QueryClient, QueryClientProvider } from 'react-query'

import '@/styles/globals.css'

const queryCache = new QueryCache()
const queryClient = new QueryClient({
  queryCache,
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      keepPreviousData: true,
      notifyOnChangeProps: 'tracked'
    }
  }
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </StrictMode>
  )
}

export default MyApp
