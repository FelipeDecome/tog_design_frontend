import React from 'react';
import { Route, Switch } from 'react-router-dom';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={() => <h1>Hellow World!</h1>} />
    </Switch>
  );
};

export { Routes };
