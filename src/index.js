require('bootstrap/dist/css/bootstrap.css');
require('css-toggle-switch/dist/toggle-switch.css');

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import configStore from './store/configureStore';
import { PersistGate } from 'redux-persist/integration/react';
import "./style.css";

const { store, persistor } = configStore();

render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router history={browserHistory} routes={routes} />
    </PersistGate >
  </Provider>, document.getElementById('root')
);
