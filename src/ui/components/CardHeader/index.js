/* eslint-disable react/jsx-props-no-spreading */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/core';

const CardHeader = ({ ...props }) => {
	const {
		children,
		className,
		classes,
		color,
		plain,
		...rest
	} = props;
	const cardHeaderClasses = classNames({
		[classes.cardHeader]: true,
		[classes[`${color}CardHeader`]]: color,
		[classes.cardHeaderPlain]: plain,
		[className]: className !== undefined,
	});
	return (
		<div className={cardHeaderClasses} {...rest}>
			{children}
		</div>
	);
};

CardHeader.propTypes = {
	children: PropTypes.node,
	classes: PropTypes.object.isRequired,
	className: PropTypes.string,
	color: PropTypes.oneOf([
		'warning',
		'success',
		'danger',
		'info',
		'primary',
	]),
	plain: PropTypes.bool,
};

export default withStyles(styles)(CardHeader);
