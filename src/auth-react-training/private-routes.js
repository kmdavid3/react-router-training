import React from 'react';
import { Redirect, Route, useRouteMatch } from 'react-router-dom';
import { fakeAuth } from './fake-auth';

export function PrivateRoute({ children, ...rest }) {
  console.log(useRouteMatch());
  return (
    <Route
      {...rest}
      render={({ location }) =>
        fakeAuth.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}