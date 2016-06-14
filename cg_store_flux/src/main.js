import React from 'react';
import ReactDOM from 'react-dom';

import ActionCreator from './ActionCreator';
import App from './App.jsx';

window.addEventListener('load', () => {
  ActionCreator.loadListItem().then(() => {
    ReactDOM.render(
      <App />,
      document.getElementById('jsApp')
    );
  });
}, false);
