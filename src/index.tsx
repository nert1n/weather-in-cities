import { createRoot } from 'react-dom/client';
import './styles/style.scss';
import AppRouter from '@/AppRouter';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import { BrowserRouter } from 'react-router-dom';
import './i18n/i18n';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const root = document.getElementById('root');

if (!root) {
	throw new Error('root not found');
}

const container = createRoot(root);

const queryClient = new QueryClient();

container.render(
	<Provider store={store}>
		<BrowserRouter>
			<QueryClientProvider client={queryClient}>
				<AppRouter />
			</QueryClientProvider>
		</BrowserRouter>
	</Provider>,
);
