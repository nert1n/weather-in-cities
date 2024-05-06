import { createRoot } from 'react-dom/client';
import './styles/style.scss';
import App from '@/App';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import { BrowserRouter } from 'react-router-dom';

const root = document.getElementById('root');

if (!root) {
    throw new Error('root not found');
}

const container = createRoot(root)

container.render(
  <Provider store={store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
  </Provider>
);