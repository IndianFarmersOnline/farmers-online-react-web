import {
	AuthLayout,
	Home,
	Login,
	MainLayout,
	Privacy,
	Register,
	Testing,
} from '../ui/components';
import {
	Redirect,
	Router,
	Switch,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import PublicRoute from './PublicRoute';
import React from 'react';

const hist = createBrowserHistory();

const router = () => (
	<Router history={hist}>
		<Switch>
			<PublicRoute component={Home} layout={MainLayout} path="/home" />
			<PublicRoute component={Testing} layout={MainLayout} path="/test" />
			<PublicRoute component={Privacy} layout={MainLayout} path="/privacy-policy" />
			<PublicRoute component={Login} layout={AuthLayout} path="/login" />
			<PublicRoute component={Register} layout={AuthLayout} path="/register" />
			<Redirect from="/" to="/home" />
		</Switch>
	</Router>
);

router.displayName = 'Router';
export default router;
