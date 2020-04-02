import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoutes = ({ children, user, ...rest }) => (
	<Route
		path="/u"
		{...rest}
		render={({ location }) => (user ? (
			children
		) : (
			<Redirect
				to={{
					pathname: '/',
				}}
			/>
		))}
	/>
);

export { PrivateRoutes };
