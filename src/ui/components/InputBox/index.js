/* eslint-disable react/jsx-props-no-spreading */
import {
	FormControl,
	Input,
	InputLabel,
	withStyles,
} from '@material-ui/core';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles';

const InputBox = ({ ...props }) => {
	const {
		classes,
		error,
		formControlProps,
		id,
		inputProps,
		inputRootCustomClasses,
		labelProps,
		labelText,
		success,
		white,
	} = props;

	const labelClasses = classNames({
		[` ${classes.labelRootError}`]: error,
		[` ${classes.labelRootSuccess}`]: success && !error,
	});
	const underlineClasses = classNames({
		[classes.underlineError]: error,
		[classes.underlineSuccess]: success && !error,
		[classes.underline]: true,
		[classes.whiteUnderline]: white,
	});
	const marginTop = classNames({
		[inputRootCustomClasses]: inputRootCustomClasses !== undefined,
	});
	const inputClasses = classNames({
		[classes.input]: true,
		[classes.whiteInput]: white,
	});
	let formControlClasses;
	if (formControlProps !== undefined) {
		formControlClasses = classNames(
			formControlProps.className,
			classes.formControl,
		);
	} else {
		formControlClasses = classes.formControl;
	}
	return (
		<FormControl {...formControlProps} className={formControlClasses}>
			{labelText !== undefined ? (
				<InputLabel
					className={`${classes.labelRoot} ${labelClasses}`}
					htmlFor={id}
					{...labelProps}
				>
					{labelText}
				</InputLabel>
			) : null}
			<Input
				classes={{
					disabled: classes.disabled,
					input: inputClasses,
					root: marginTop,
					underline: underlineClasses,
				}}
				id={id}
				{...inputProps}
			/>
		</FormControl>
	);
};

InputBox.propTypes = {
	classes: PropTypes.object.isRequired,
	error: PropTypes.bool,
	formControlProps: PropTypes.object,
	id: PropTypes.string,
	inputProps: PropTypes.object,
	inputRootCustomClasses: PropTypes.string,
	labelProps: PropTypes.object,
	labelText: PropTypes.node,
	success: PropTypes.bool,
	white: PropTypes.bool,
};

export default withStyles(styles)(InputBox);
