import React from 'react';
import { Switch } from 'react-router-dom';

import { Checkout } from '../pages/Checkout';
import { SignIn } from '../pages/user/SignIn';
import { Route } from './Route';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={() => <> </>} />
      <Route path="/checkout" component={Checkout} />

      <Route path="/signin" component={SignIn} forbidenForUsers />
    </Switch>
  );
};

export { Routes };
