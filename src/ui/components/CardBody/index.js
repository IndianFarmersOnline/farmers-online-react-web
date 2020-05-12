/* eslint-disable react/jsx-props-no-spreading */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/core';

const CardBody = ({ ...props }) => {
	const {
		children, className, classes, ...rest
	} = props;
	const cardBodyClasses = classNames({
		[classes.cardBody]: true,
		[className]: className !== undefined,
	});
	return (
		<div className={cardBodyClasses} {...rest}>
			{children}
		</div>
	);
};

CardBody.propTypes = {
	children: PropTypes.node,
	classes: PropTypes.object.isRequired,
	className: PropTypes.string,
};

export default withStyles(styles)(CardBody);
