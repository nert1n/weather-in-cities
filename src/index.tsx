import { createRoot } from 'react-dom/client';
import './styles/style.scss';
import AppRouter from '@/AppRouter';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import { BrowserRouter } from 'react-router-dom';
import './i18n/i18n';

const root = document.getElementById('root');

if (!root) {
	throw new Error('root not found');
}

const container = createRoot(root);

container.render(
	<Provider store={store}>
		<BrowserRouter>
			<AppRouter />
		</BrowserRouter>
	</Provider>,
);
