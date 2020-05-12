/* eslint-disable react/jsx-props-no-spreading */
import MaterialContainer from '@material-ui/core/Container';
import PropTypes from 'prop-types';
import React from 'react';

const Container = ({ ...props }) => {
	const { children, className, ...rest } = props;
	return (
		<MaterialContainer {...rest}>
			{children}
		</MaterialContainer>
	);
};

Container.defaultProps = {
	className: '',
};

Container.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
};

export default Container;
