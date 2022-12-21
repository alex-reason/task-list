import { createRoot } from 'react-dom/client';
import App from './App';
import { Provider } from './context/tasks'
import './index.scss';

const root = createRoot(document.getElementById('root'));

root.render(
    <Provider>
        <App />
    </Provider>
);