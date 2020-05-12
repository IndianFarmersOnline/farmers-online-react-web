/* eslint-disable react/jsx-props-no-spreading */
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import TextField from '@material-ui/core/TextField';

const styles = (theme) => ({
	input: {
		// '&,&::placeholder': {
		// 	lineHeight: '1.4',
		// },
		// color: 'red !important',
		fontSize: '1.6rem !important',
		fontWeight: '400 !important',
	},
	labelRoot: {
		color: `${theme.palette.text.primary} !important`,
		fontSize: '1.6rem !important',
		fontWeight: '400 !important',
		lineHeight: '1.42857',
		top: '-10px',
	},
	root: {
		'& svg,& .fab,& .far,& .fal,& .fas,& .material-icons': {
			color: theme.palette.text.primary,
		},
		margin: '0 0 8px 0',
		paddingTop: '20px',
		position: 'relative',
	},
});

const useStyles = makeStyles(styles);

const TextBox = ({ ...props }) => {
	const classes = useStyles();
	const { InputProps, className, ...rest } = props;
	return (
		<div className={classes.root}>
			<TextField
				InputLabelProps={{
					classes: {
						root: classes.labelRoot,
					},
				}}
				InputProps={{
					...InputProps,
					className: classes.input,
				}}
				{...rest}
			/>
		</div>
	);
};

TextBox.defaultProps = {
	className: '',
};

TextBox.propTypes = {
	className: PropTypes.string,
	InputProps: PropTypes.object,
};

export default TextBox;
