// Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import { App } from './App';
import { Home } from './HomePage/components/HomePage';
import { About } from './About/components/About';
import { PrivateRoute } from './Shared/components/PrivateRoute';
import { LoginPage } from './LoginPage/components/LoginPage';

const AppRoutes = () =>
  <App>
    <Switch>
      <PrivateRoute exact path="/" component={Home} />
      <Route path="/login" component={LoginPage} />
      <PrivateRoute exact path="/about" component={About} />
      <PrivateRoute exact path="/home" component={Home} />
    </Switch>
  </App>;

export default AppRoutes;