import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const theme = createMuiTheme({
	palette: {
		background: {
			default: '#fafafa',
			paper: '#fff',
		},
		common: {
			black: '#000',
			white: '#fff',
		},
		error: {
			contrastText: '#fff',
			dark: '#d32f2f',
			light: '#e57373',
			main: '#f44336',
		},
		primary: {
			contrastText: '#fff',
			dark: '#303f9f',
			light: '#7986cb',
			main: 'rgba(48, 63, 159, 1)',
		},
		secondary: {
			contrastText: '#fff',
			dark: '#c51162',
			light: '#ff4081',
			main: 'rgba(245, 0, 87, 1)',
		},
		text: {
			disabled: 'rgba(0, 0, 0, 0.38)',
			hint: 'rgba(0, 0, 0, 0.38)',
			primary: 'rgba(0, 0, 0, 0.87)',
			secondary: 'rgba(0, 0, 0, 0.54)',
		},
		typography: {
			fontFamily: [
				'-apple-system',
				'BlinkMacSystemFont',
				'"Segoe UI"',
				'Roboto',
				'"Helvetica Neue"',
				'Arial',
				'sans-serif',
				'"Apple Color Emoji"',
				'"Segoe UI Emoji"',
				'"Segoe UI Symbol"',
			].join(','),
			// Tell Material-UI what's the font-size on the html element is.
			htmlFontSize: 10, // font-size: 62.5%; /* 62.5% of 16px = 10px */
		},
	},
});

export default responsiveFontSizes(theme);
