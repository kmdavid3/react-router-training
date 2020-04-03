import React from 'react';
import { Link, Route, useRouteMatch } from 'react-router-dom';
import { Two } from './two-only-not-connected';

const PublicPage = () => {
  const { path, url } = useRouteMatch;
  console.log('url : ', url);
  console.log('path : ', path);
  return (
    <>
      <Route
        path="/public"
        exact
        render={() => <div>this is from public page</div>}
      />
      <ul>
        <li><Link to={`/public/one`}>public one</Link></li>
        <li><Link to={`/public/two`}>public two (only disconnected)</Link></li>
      </ul>
      <Route
        path={`/public/one`}
        render={() => <div>one public</div>}
      />
      <Route
        path={`/public/two`}
        render={() => <Two />}
      />
    </>
  );
};

export { PublicPage };
