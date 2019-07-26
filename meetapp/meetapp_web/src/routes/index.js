import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Login from '../pages/Login';
import Register from '~/pages/Register';

import Profile from '../pages/Profile';
import Dashboard from '../pages/Dashboard';
import Edit from '../pages/CreatMeet';
import Details from '../pages/Details';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/details" component={Details} isPrivate />
      <Route path="/editing" component={Edit} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
    </Switch>
  );
}
