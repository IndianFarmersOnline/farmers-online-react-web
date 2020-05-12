import {
	Button,
	withStyles,
} from '@material-ui/core';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import style from './styles';

const RegularButton = ({ ...props }) => {
	const {
		block,
		children,
		className,
		classes,
		color,
		disabled,
		fullWidth,
		justIcon,
		link,
		round,
		simple,
		size,
		...rest
	} = props;

	const btnClasses = classNames({
		[classes.button]: true,
		[classes[size]]: size,
		[classes[color]]: color,
		[classes.round]: round,
		[classes.fullWidth]: fullWidth,
		[classes.disabled]: disabled,
		[classes.simple]: simple,
		[classes.block]: block,
		[classes.link]: link,
		[classes.justIcon]: justIcon,
		[className]: className,
	});
	return (
		// eslint-disable-next-line react/jsx-props-no-spreading
		<Button {...rest} className={btnClasses}>
			{children}
		</Button>
	);
};

RegularButton.propTypes = {
	block: PropTypes.bool,
	children: PropTypes.node,
	classes: PropTypes.object,
	className: PropTypes.string,
	color: PropTypes.oneOf([
		'primary',
		'info',
		'success',
		'warning',
		'danger',
		'rose',
		'white',
		'facebook',
		'twitter',
		'google',
		'github',
		'transparent',
		'secondary',
	]),
	disabled: PropTypes.bool,
	fullWidth: PropTypes.bool,
	justIcon: PropTypes.bool,
	link: PropTypes.bool,
	round: PropTypes.bool,
	simple: PropTypes.bool,
	size: PropTypes.oneOf(['sm', 'lg']),
};

export default withStyles(style)(RegularButton);
