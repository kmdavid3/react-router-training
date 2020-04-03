import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { PublicPage } from './public-page'
import { PrivateRoute } from './private-routes';
import { ProtectedPage } from './protected-pages';
import { LoginPage } from './login-page';
import { AuthButton } from './auth-button';

export default () => (
  <Router>
    <div>
      <AuthButton />
      <ul>
        <li><Link to="/public">Public Page</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/protected">Protected Page</Link></li>
      </ul>
      <Switch>
        <Route
          path="/public"
          render={(props) => <PublicPage {...props}/>}
        />
        <Route path="/login">
          <LoginPage />
        </Route>
        <PrivateRoute path="/protected">
          <ProtectedPage />
        </PrivateRoute>
      </Switch>
    </div>
  </Router>
);