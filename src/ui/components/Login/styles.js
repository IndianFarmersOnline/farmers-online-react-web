import { primaryBoxShadow } from '../../assets/jss/core_styles';

const style = (theme) => ({
	avatar: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	brandImage: {
		height: '72px',
		width: '72px',
		color: 'inherit',
		cursor: 'pointer',
		'&:hover,&:focus': {
			color: 'inherit',
			background: 'transparent',
		},
	},
	cardHeader: {
		margin: '0 !important',
		width: '100%',
		textAlign: 'center',
		boxShadow: 'none',
	},
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		'@media (min-width: 576px)': {
			...primaryBoxShadow,
			padding: `${theme.spacing(1)}px ${theme.spacing(3)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`,
			backgroundColor: '#fff',
			backgroundClip: 'padding-box',
		},
	},
	linkFontStyle: {
		fontSize: '1.6rem',
		fontWeight: '400',
	},
	forgotPassword: {
		paddingTop: '1rem',
	},
	checkboxDefault: {
		color: theme.palette.colors.grey[500],
	},
	submit: {
		margin: theme.spacing(1, 0, 1),
	},
	gridContainer: {
		margin: '0',
	},
	gridItem: {
		padding: '8px 0px 8px 0px',
	},
});

export default style;
