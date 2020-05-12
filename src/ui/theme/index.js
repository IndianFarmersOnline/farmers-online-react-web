import { unstable_createMuiStrictModeTheme as createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import grey from '@material-ui/core/colors/grey';
import red from '@material-ui/core/colors/red';

const theme = createMuiTheme({
	palette: {
		background: {
			default: '#fff',
			paper: '#fff',
		},
		colors: {
			grey,
		},
		error: {
			contrastText: '#fff',
			dark: '#d32f2f',
			light: '#e57373',
			main: '#f44336',
		},
		primary: {
			color: blue,
			contrastText: '#fff',
			dark: blue[900],
			light: blue[700],
			main: blue[800],
		},
		secondary: {
			color: red,
			contrastText: '#fff',
			dark: red[700],
			light: red[500],
			main: red[600],
		},
		text: {
			disabled: 'rgba(155, 155, 155, 1)',
			hint: 'rgba(74, 144, 226, 1)',
			primary: 'rgba(117, 117, 117, 1)',
			secondary: 'rgba(0, 0, 0, 1)',
		},
		// type: 'dark',
	},
	typography: {
		fontFamily: [
			'Open Sans',
			'"Segoe UI"',
			'Roboto',
			'"Helvetica Neue"',
			'Arial',
		].join(','),
		// Tell Material-UI what's the font-size on the html element is.
		htmlFontSize: 10, // font-size: 62.5%; /* 62.5% of 16px = 10px */
	},
});

export default responsiveFontSizes(theme);
