import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { MedusaProvider } from 'medusa-react';
import { QueryClient } from 'react-query';

// react-query config stuff used by medusa-react library
const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			staleTime: 3000,
			retry: 1,
		}
	}
})

function App({Component, pageProps}: AppProps) {
	return (
		<MedusaProvider
			queryClientProviderProps={{ client: queryClient }}
			// TODO: use env variable
			baseUrl='https://medusa.new.primalkitchen.nz.local'
		>
			<Component {...pageProps} />
		</MedusaProvider>
	);
}

export default App;
