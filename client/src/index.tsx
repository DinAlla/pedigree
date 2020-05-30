import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import applicationStore from './applicationStore';

import App from './components/App';

ReactDOM.render(
  <Provider store={applicationStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);