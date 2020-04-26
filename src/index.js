import * as serviceWorker from './ui/serviceWorker';
import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';
import ReactDOM from 'react-dom';
import { SignUp } from './ui/components';
import theme from './ui/theme/index';
import { ThemeProvider } from '@material-ui/core/styles';

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
			<CssBaseline />
			<SignUp />
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
