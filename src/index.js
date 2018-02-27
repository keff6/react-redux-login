import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'; 
import { Router } from 'react-router-dom';
import { store } from './helpers/store';
import AppRoutes from './routes';
import { history } from './helpers/history';
// setup fake backend
import { configureFakeBackend } from './helpers/fakeApi';
configureFakeBackend();

render(
  <Provider store={store}>
    <Router history={history}>
      <AppRoutes />
    </Router>
  </Provider>,
  document.getElementById('root'));
