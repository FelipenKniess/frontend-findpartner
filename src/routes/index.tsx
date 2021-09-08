import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';

const Routes:React.FC = () => (
  <Switch>
    <Route component={SignIn} path="/" exact />
    <Route component={SignUp} path="/signup" />
    <Route component={Home} path="/home" isPrivate />
  </Switch>
);

export default Routes;
