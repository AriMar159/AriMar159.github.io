import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

import App from './app'

// This is the ID of the div in your index.html file

const rootElement = document.getElementById('app');
const root = createRoot(rootElement);

root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );