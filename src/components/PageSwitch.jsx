import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router';
import { Login, Register } from './Form';
import { Home } from './Home';

export const PageSwitch = () => {
  return (
    <Fragment>
      <Switch>
        <Route path='/register' exact component={Register} />
        <Route path='/login' exact component={Login} />
        <Route path='/' exact component={Home} />
      </Switch>
    </Fragment>
  );
};
