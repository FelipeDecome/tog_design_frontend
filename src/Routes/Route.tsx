import React from 'react';
import { Redirect, Route as ReactDomRoute, RouteProps } from 'react-router-dom';

import { useAuth } from '../Contexts/auth';

interface IRouteProps extends RouteProps {
  forbidenForUsers?: boolean;
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<IRouteProps> = ({
  forbidenForUsers,
  isPrivate,
  component: Component,
  ...rest
}) => {
  const { user } = useAuth();

  return (
    <ReactDomRoute
      {...rest}
      render={({ location }) => {
        if (forbidenForUsers)
          return !user?.id ? (
            <Component />
          ) : (
            <Redirect
              to={{
                pathname: '/',
                state: {
                  from: location,
                },
              }}
            />
          );

        if (isPrivate)
          return user?.id ? (
            <Component />
          ) : (
            <Redirect
              to={{
                pathname: '/signin',
                state: {
                  from: location,
                },
              }}
            />
          );

        return <Component />;
      }}
    />
  );
};

export { Route };
