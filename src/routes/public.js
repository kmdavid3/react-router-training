import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PublicRoutes = ({ component, user, ...rest }) => (
	// <Route
	// 	{...rest}
	// 	render={({ location }) => (!user ? (
	// 		children
	// 	) : (
	// 		<Redirect
	// 			to={{
	// 				pathname: '/u',
	// 				state: { from: location }
	// 			}}
	// 		/>
	// 	))}
	// />
	<Route
		{...rest}
		component={component}
	/>
);

export { PublicRoutes };
