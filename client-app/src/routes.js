import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';

import { Home, Login, Layout } from './pages';

const Routes = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route key="home" exact path="/home" component={Home} />,
        <Route key="login" exact path="/" component={Login} />,
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default Routes;
