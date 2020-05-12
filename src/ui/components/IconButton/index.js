import { makeStyles } from '@material-ui/core/styles';
import MaterialIconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import React from 'react';

const useStyles = makeStyles({
	button: {
		// padding: '8px 8px',
	},
});

const IconButton = ({
	Icon,
	...others
}) => {
	const classes = useStyles();
	return (
		<MaterialIconButton
			className={classes.button}
			// eslint-disable-next-line react/jsx-props-no-spreading
			{...others}
		>
			<Icon />
		</MaterialIconButton>
	);
};

IconButton.propTypes = {
	Icon: PropTypes.func,
};

export default IconButton;
