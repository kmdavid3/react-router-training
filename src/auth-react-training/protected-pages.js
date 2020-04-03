import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { AgentTerrain } from './agent-terrain';

const ProtectedPage = () => (
  <>
    <Route path="/protected" exact><p>your in the protected pages : <em>select a topic</em></p></Route>
    <ul>
      <li><Link to='/protected'>Intermediaire</Link></li>
      <li><Link to='/protected/terrain'>Terrain</Link></li>
      <li><Link to='/protected/caisse'>Caisse</Link></li>
    </ul>
    <Switch>
      <Route
        exact
        path='/protected'
        render={(props) => {
          return (
            <div>this is agent Intermediaire</div>
          );
        }}
      />
      <Route
        path='/protected/caisse'
        render={(props) => {
          return (
            <div>this is caisse</div>
          );
        }}
      />
      <Route
        path='/protected/terrain'
        render={(props) => {
          return (
            <AgentTerrain />
          );
        }}
      />
    </Switch>
  </>
);

export { ProtectedPage };