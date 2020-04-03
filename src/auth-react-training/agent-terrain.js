import React from 'react';
import { Link, Route, useRouteMatch } from 'react-router-dom';

const AgentTerrain = (props) => {
  const { path, url } = useRouteMatch();
  return (
    <div>
      this is the agent terrain home page
      <ul>
        <li><Link to={`${url}/mic`}>Michael</Link></li>
        <li><Link to={`${url}/daniel`}>Daniel</Link></li>
        <li><Link to={`${url}/cedrick`}>Cedrick</Link></li>
      </ul>
      <Route path={`${path}/mic`} render={() => (<div> this is Michael</div>)} />
      <Route path={`${path}/daniel`} render={() => (<div> this is Daniel</div>)} />
      <Route path={`${path}/cedrick`} render={() => (<div> this is Cedrick</div>)} />
    </div>
  );
};

export { AgentTerrain };
