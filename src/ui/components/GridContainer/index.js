/* eslint-disable react/jsx-props-no-spreading */
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';

const styles = {
	grid: {
		// marginLeft: '-15px',
		// marginRight: '-15px',
		// width: 'auto',
	},
};

const useStyles = makeStyles(styles);

const GridContainer = ({ ...props }) => {
	const classes = useStyles();
	const { children, className, ...rest } = props;
	return (
		<Grid container {...rest} className={`${classes.grid} ${className}`}>
			{children}
		</Grid>
	);
};

GridContainer.defaultProps = {
	className: '',
};

GridContainer.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
};

export default GridContainer;
