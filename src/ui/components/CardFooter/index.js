/* eslint-disable react/jsx-props-no-spreading */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/core';

const CardFooter = ({ ...props }) => {
	const {
		children,
		className,
		classes,
		...rest
	} = props;
	const cardFooterClasses = classNames({
		[classes.cardFooter]: true,
		[className]: className !== undefined,
	});
	return (
		<div className={cardFooterClasses} {...rest}>
			{children}
		</div>
	);
};

CardFooter.propTypes = {
	children: PropTypes.node,
	classes: PropTypes.object.isRequired,
	className: PropTypes.string,
};

export default withStyles(styles)(CardFooter);
