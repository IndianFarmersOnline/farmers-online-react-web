/* eslint-disable react/jsx-props-no-spreading */

// @material-ui/core components
// @material-ui/icons

import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import style from './styles';
import { withStyles } from '@material-ui/core';

const Card = ({ ...props }) => {
	const {
		carousel,
		children,
		className,
		classes,
		plain,
		...rest
	} = props;
	const cardClasses = classNames({
		[classes.card]: true,
		[classes.cardPlain]: plain,
		[classes.cardCarousel]: carousel,
		[className]: className !== undefined,
	});
	return (
		<div className={cardClasses} {...rest}>
			{children}
		</div>
	);
};

Card.propTypes = {
	carousel: PropTypes.bool,
	children: PropTypes.node,
	classes: PropTypes.object.isRequired,
	className: PropTypes.string,
	plain: PropTypes.bool,
};

export default withStyles(style)(Card);
