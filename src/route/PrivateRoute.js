/* eslint-disable react/jsx-props-no-spreading */
import {
	Redirect,
	Route,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

const PrivateRoute = ({
	component: Component,
	isAuthenticated,
	layout: Layout,
	...rest
}) => (
	<Route
		{...rest}
		render={(props) => (isAuthenticated ? (
			<Layout {...props}>
				<Component {...props} />
			</Layout>
		) : (
			<Redirect to={{ pathname: '/home', state: { from: props.location } }} />
		))}
	/>
);

PrivateRoute.propTypes = {
	component: PropTypes.object,
	isAuthenticated: PropTypes.bool.isRequired,
	layout: PropTypes.object,
	location: PropTypes.string,
};

export default PrivateRoute;
