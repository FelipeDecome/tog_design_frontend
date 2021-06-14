import React from 'react';
import { Switch } from 'react-router-dom';

import { Checkout } from '../pages/Checkout';
import { SignIn } from '../pages/user/SignIn';
import { Write } from '../pages/Write';
import { Route } from './Route';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={() => <> </>} />
      <Route path="/checkout" component={Checkout} />

      <Route path="/signin" component={SignIn} forbidenForUsers />

      <Route path="/write" component={Write} isPrivate />
    </Switch>
  );
};

export { Routes };
