import React from 'react';
import {
  Route as ReactDomRoute,
  RouteProps as ReactDomRouteProps,
  Redirect,
} from 'react-router-dom';

import { useAuth } from '../hooks/auth';

interface RouteProps extends ReactDomRouteProps {
    isPrivate?: boolean;
    component: React.ComponentType;
}

const Route:React.FC<RouteProps> = ({ isPrivate = false, component: Component, ...rest }) => {
  const { user } = useAuth();

  return (
    <ReactDomRoute
      {...rest}
      render={({ location }) => (isPrivate === !!user ? (
        <Component />
      ) : (
        <Redirect to={{
          pathname: isPrivate ? '/' : '/home',
          state: { from: location },
        }}
        />
      ))}
    />
  );
};

export default Route;
