const footerStyle = (theme) => ({
	block: {
		color: 'inherit',
		padding: '15px',
		textTransform: 'uppercase',
		borderRadius: '3px',
		textDecoration: 'none',
		position: 'relative',
		display: 'block',
		fontWeight: '500',
		fontSize: '12px',
	},
	container: {
		paddingRight: '15px',
		paddingLeft: '15px',
		marginRight: 'auto',
		marginLeft: 'auto',
	},
	left: {
		'@media (min-width: 576px)': {
			float: 'left!important',
		},
		display: 'flex',
		justifyContent: 'center',
	},
	right: {
		'@media (min-width: 576px)': {
			float: 'right!important',
		},
		margin: '0',
		fontSize: '14px',
		textAlign: 'center',
	},
	footer: {
		bottom: '0',
		padding: '15px 0',
	},
	gridItem: {
		padding: '0px !important',
	},
	gridItemRight: {
		padding: '0px !important',
		marginTop: '10px',
	},
	a: {
		color: theme.primaryColor,
		textDecoration: 'none',
		backgroundColor: 'transparent',
	},
	list: {
		marginBottom: '0',
		padding: '0',
		marginTop: '0',
	},
	inlineBlock: {
		display: 'inline-block',
		padding: '0px',
		width: 'auto',
	},
});
export default footerStyle;
