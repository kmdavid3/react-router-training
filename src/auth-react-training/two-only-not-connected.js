
import React from 'react';
import { useLocation, Redirect, useRouteMatch, Link, Route } from 'react-router-dom';
import { fakeAuth } from './fake-auth';

export function Two() {
  const { path, url } = useRouteMatch();
  console.log("path here : ", path);
  console.log("url here : ", url);
  let location = useLocation();

  return fakeAuth.isAuthenticated ? (
    <Redirect
      to={{
        pathname: "/protected",
        state: { from: location }
      }}
    />
  ) : (
    <div>
      <p>You must log out</p>
      <ul>
        <li><Link to={`${url}/item-one`}>item one</Link></li>
        <li><Link to={`${url}/item-two`}>item two</Link></li>
      </ul>
      <Route
        exact
        path={path}
        render={() => <p>Select an item above</p>}
      />
      <Route
        path={`${path}/item-one`}
        render={() => <div>this the content of item one</div>}
      />
      <Route
        path={`${path}/item-two`}
        render={() => <div>this the content of the second item</div>}
      />
    </div>
  );
}