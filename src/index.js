import React from 'react';
import { render } from 'react-dom';

import registerServiceWorker from './registerServiceWorker';

import App from './App';

const rootElement = document.getElementById('root');

render(<App />, rootElement);

registerServiceWorker();
