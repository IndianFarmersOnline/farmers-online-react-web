import {
	container,
	primaryBoxShadow,
} from '../../assets/jss/core_styles';

const styles = (theme) => ({
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
	paperContent: {
		'@media (min-width: 576px)': {
			width: '60%',
		},
		width: '100%',
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
		width: '100%',
	},
	gridItem: {
		padding: '8px 0px 8px 0px !important',
	},
	section: {
		overflow: 'hidden',
		padding: '70px 0',
		backgroundPosition: 'top center',
		backgroundSize: 'cover',
		margin: '0',
		border: '0',
		display: 'flex',
		alignItems: 'center',
	},
	container,
	calendar: {
		color: `${theme.palette.primary.main} !important`,
	},
	card: {
		justifyContent: 'center',
		...primaryBoxShadow,
	},
	form: {
		display: 'flex',
		justifyContent: 'center',
	},
	dropdown: {
		width: '100%',
	},
	itemContainer: {
		padding: '8px',
	},
	socialIcons: {
		maxWidth: '24px',
		marginTop: '0',
		width: '100%',
		transform: 'none',
		left: '0',
		top: '0',
		height: '100%',
		lineHeight: '41px',
		fontSize: '20px',
	},
	divider: {
		marginTop: '30px',
		marginBottom: '0px',
		textAlign: 'center',
	},
	cardFooter: {
		paddingTop: '0rem',
		border: '0',
		borderRadius: '6px',
		justifyContent: 'center !important',
	},
	socialLine: {
		marginTop: '1rem',
		textAlign: 'center',
		padding: '0',
	},
	inputIconsColor: {
		color: '#495057',
	},
	stepContainer: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	stepGrid: {
		width: '80%',
	},
	backButton: {
		marginRight: theme.spacing(1),
	},
	outlinedButtom: {
		textTransform: 'uppercase',
		margin: theme.spacing(1),
	},
	stepper: {
		backgroundColor: 'transparent',
		padding: '16px 0px 16px 0px !important',
	},
	topInfo: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 42,
	},
	formControl: {
		width: '100%',
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
	borderColumn: {
		paddingBottom: 24,
		marginBottom: 24,
	},
	flexBar: {
		marginTop: 32,
		display: 'flex',
		justifyContent: 'center',
	},
	termsRoot: {
		marginBottom: 24,
		width: '100%',
	},
	termsHeaderStyle: {
		fontWeight: 'bold',
	},
	termsContent: {
		border: '1.5px solid #9e9e9e',
		height: '330px',
		padding: '15px',
	},
});
export default styles;
