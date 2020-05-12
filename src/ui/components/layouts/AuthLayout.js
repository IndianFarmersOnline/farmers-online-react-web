import Footer from '../Footer';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles';

const useStyles = makeStyles(styles);

const AuthLayout = ({ children }) => {
	const classes = useStyles();
	return (
		<div className={classes.site}>
			<div className={classes.siteContent}>
				{children}
			</div>
			<Footer />
		</div>
	);
};

AuthLayout.propTypes = {
	children: PropTypes.object,
};

export default AuthLayout;
