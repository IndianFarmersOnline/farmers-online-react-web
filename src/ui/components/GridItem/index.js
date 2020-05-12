/* eslint-disable react/jsx-props-no-spreading */
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';

const styles = {
	grid: {
		// flexBasis: 'auto',
		// minHeight: '1px',
		// paddingLeft: '15px',
		// paddingRight: '15px',
		// position: 'relative',
		// width: '100%',
	},
};

const useStyles = makeStyles(styles);

const GridItem = ({ ...props }) => {
	const classes = useStyles();
	const { children, className, ...rest } = props;
	return (
		<Grid item {...rest} className={`${classes.grid} ${className}`}>
			{children}
		</Grid>
	);
};

GridItem.defaultProps = {
	className: '',
};

GridItem.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
};

export default GridItem;
