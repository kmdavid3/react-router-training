import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { PublicRoutes } from '../routes/public';
import { PrivateRoutes } from '../routes/private';
import { AuthLayout } from './auth';
import { PublicLayout } from './public';

const PrimaryLayout = (props) => (
	<Router>
    <Switch>
      <Route
        exact
        path="/" 
        render={(props) => <PublicLayout {...props}/> }
      />
        {/* <PublicLayout {...props} />
      </PublicRoutes> */}
      <PrivateRoutes exact path="/u">
        <AuthLayout {...props} />
      </PrivateRoutes>
    </Switch>
	</Router>
);

export { PrimaryLayout };
