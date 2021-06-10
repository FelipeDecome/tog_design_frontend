import React from 'react';
import { Switch } from 'react-router-dom';

import { SignIn } from '../pages/user/SignIn';
import { Route } from './Route';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={() => <> </>} />
      <Route exact path="/signin" component={SignIn} forbidenForUsers />
    </Switch>
  );
};

export { Routes };
