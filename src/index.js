import React from 'react';
import { render, hydrate } from 'react-dom';
import { loadComponents, getState } from 'loadable-components';

// import registerServiceWorker from './registerServiceWorker';

import App from './App';

const rootElement = document.getElementById('root');

window.snapSaveState = () => getState();

if (rootElement.hasChildNodes()) {
  loadComponents().then(() => {
    hydrate(<App />, rootElement);
  });
} else {
  render(<App />, rootElement);
}

// registerServiceWorker();
