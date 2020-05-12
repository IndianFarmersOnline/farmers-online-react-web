/* eslint-disable max-len */
const drawerWidth = 260;

const transition = {
	transition: 'all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)',
};

const containerFluid = {
	marginLeft: 'auto',
	marginRight: 'auto',
	paddingLeft: '15px',
	paddingRight: '15px',
	width: '100%',
};

const container = {
	...containerFluid,
	'@media (min-width: 576px)': {
		maxWidth: '540px',
	},
	'@media (min-width: 768px)': {
		maxWidth: '720px',
	},
	'@media (min-width: 992px)': {
		maxWidth: '960px',
	},
	'@media (min-width: 1200px)': {
		maxWidth: '1140px',
	},
};

const boxShadow = {
	boxShadow:
    '0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
};

const card = {
	background: '#fff',
	borderRadius: '3px',
	boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.14)',
	color: 'rgba(0, 0, 0, 0.87)',
	display: 'inline-block',
	margin: '25px 0',
	position: 'relative',
	width: '100%',
};

const primaryBoxShadow = {
	boxShadow:
    '0 12px 20px -10px rgba(30, 136, 229, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(30, 136, 229, 0.2)',
};
const infoBoxShadow = {
	boxShadow:
    '0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2)',
};
const successBoxShadow = {
	boxShadow:
    '0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2)',
};
const warningBoxShadow = {
	boxShadow:
    '0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2)',
};
const dangerBoxShadow = {
	boxShadow:
    '0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2)',
};

const warningCardHeader = {
	...warningBoxShadow,
	background: 'linear-gradient(60deg, #ffa726, #fb8c00)',
	color: '#fff',
};
const successCardHeader = {
	...successBoxShadow,
	background: 'linear-gradient(60deg, #66bb6a, #43a047)',
	color: '#fff',
};
const dangerCardHeader = {
	...dangerBoxShadow,
	background: 'linear-gradient(60deg, #ef5350, #e53935)',
	color: '#fff',
};
const infoCardHeader = {
	...infoBoxShadow,
	background: 'linear-gradient(60deg, #26c6da, #00acc1)',
	color: '#fff',
};
const primaryCardHeader = {
	...primaryBoxShadow,
	background: 'linear-gradient(60deg, #1e88e5, #1976d2)',
	color: '#fff',
};

const cardActions = {
	borderTop: '1px solid #eeeeee',
	height: 'auto',
	margin: '0 20px 10px',
	paddingTop: '10px',
};

const cardHeader = {
	borderRadius: '3px',
	margin: '-30px 15px 0',
	padding: '15px',
};

const defaultBoxShadow = {
	border: '0',
	borderRadius: '3px',
	boxShadow: '0 10px 20px -12px rgba(0, 0, 0, 0.42), 0 3px 20px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
	padding: '10px 0',
	transition: 'all 150ms ease 0s',
};

const title = {
	color: '#3C4858',
	fontWeight: '700',
	margin: '1.75rem 0 0.875rem',
	textDecoration: 'none',
};

const cardTitle = {
	...title,
	marginTop: '.625rem',
};

const cardLink = {
	'& + $cardLink': {
		marginLeft: '1.25rem',
	},
};

const cardSubtitle = {
	marginBottom: '0',
	marginTop: '-.375rem',
};

export {
	boxShadow,
	card,
	cardActions,
	cardHeader,
	cardLink,
	cardSubtitle,
	cardTitle,
	container,
	containerFluid,
	dangerBoxShadow,
	dangerCardHeader,
	defaultBoxShadow,
	drawerWidth,
	infoBoxShadow,
	infoCardHeader,
	primaryBoxShadow,
	primaryCardHeader,
	successBoxShadow,
	successCardHeader,
	title,
	transition,
	warningBoxShadow,
	warningCardHeader,
};
