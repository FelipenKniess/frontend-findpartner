import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';
import CompleteRegister from '../pages/CompleteRegister';
import UserProfile from '../pages/UserProfile';
import AllUsers from '../pages/AllUsers';
import Connections from '../pages/Connections';
import InterestedUsers from '../pages/InterestedUsers';
import RegisterInterest from '../pages/RegisterInterests';
import RegisterProducts from '../pages/RegisterProducts';

const Routes:React.FC = () => (
  <Switch>
    <Route component={SignIn} path="/" exact />
    <Route component={SignUp} path="/signup" />
    <Route component={Home} path="/home" isPrivate />
    <Route component={CompleteRegister} path="/editProfile" isPrivate />
    <Route component={UserProfile} path="/user/:id" isPrivate />
    <Route component={AllUsers} path="/findUsers" isPrivate />
    <Route component={Connections} path="/connections" isPrivate />
    <Route component={InterestedUsers} path="/interestedUsers" isPrivate />
    <Route component={RegisterInterest} path="/registerInterests" isPrivate />
    <Route component={RegisterProducts} path="/registerProducts" isPrivate />
  </Switch>
);

export default Routes;
