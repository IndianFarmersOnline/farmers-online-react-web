const customInputStyle = (theme) => ({
	disabled: {
		'&:before': {
			borderColor: 'transparent !important',
		},
	},
	underline: {
		'&:hover:not($disabled):before,&:before': {
			borderColor: '#D2D2D2 !important',
			borderWidth: '1px !important',
		},
		'&:after': {
			borderColor: theme.palette.primary.main,
		},
	},
	underlineError: {
		'&:after': {
			borderColor: theme.palette.error.main,
		},
	},
	underlineSuccess: {
		'&:after': {
			borderColor: theme.palette.success.main,
		},
	},
	whiteUnderline: {
		'&:hover:not($disabled):before,&:before': {
			borderColor: '#FFFFFF',
		},
		'&:after': {
			borderColor: '#FFFFFF',
		},
	},
	labelRoot: {
		color: `${theme.palette.text.primary} !important`,
		fontWeight: '400',
		fontSize: '1.6rem',
		lineHeight: '1.42857',
		top: '10px',
		letterSpacing: 'unset',
	},
	labelRootError: {
		color: `${theme.palette.error.main} !important`,
	},
	labelRootSuccess: {
		color: `${theme.palette.success.main} !important`,
	},
	formControl: {
		margin: '0 0 8px 0',
		paddingTop: '20px',
		position: 'relative',
		'& svg,& .fab,& .far,& .fal,& .fas,& .material-icons': {
			color: theme.palette.text.primary,
		},
	},
	input: {
		color: theme.palette.text.primary,
		height: 'unset',
		'&,&::placeholder': {
			fontSize: '1.6rem',
			fontWeight: '400',
			lineHeight: '1.42857',
			opacity: '1',
		},
		'&::placeholder': {
			color: '#AAAAAA',
		},
	},
	whiteInput: {
		'&,&::placeholder': {
			color: '#FFFFFF',
			opacity: '1',
		},
	},
});

export default customInputStyle;
