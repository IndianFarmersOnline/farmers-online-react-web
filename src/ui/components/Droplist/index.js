/* eslint-disable react/jsx-props-no-spreading */
import {
	FormControl,
	InputLabel,
	NativeSelect,
	withStyles,
} from '@material-ui/core';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles';

const Droplist = ({ ...props }) => {
	const {
		classes,
		error,
		formControlProps,
		id,
		inputProps,
		inputRootCustomClasses,
		labelProps,
		labelText,
		onChange,
		options,
		success,
		value,
	} = props;

	const labelClasses = classNames({
		[` ${classes.labelRootError}`]: error,
		[` ${classes.labelRootSuccess}`]: success && !error,
	});

	const marginTop = classNames({
		[inputRootCustomClasses]: inputRootCustomClasses !== undefined,
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

	const optionsList = options.map((opt, index) => <option key={index} value={opt.value}>{opt.text}</option>);
	optionsList.splice(0, 0, <option aria-label="-None-" key={-1} text="" value="" />);

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
			<NativeSelect
				classes={{
					disabled: classes.disabled,
					root: marginTop,
				}}
				id={id}
				onChange={onChange}
				value={value}
				variant="outlined"
				{...inputProps}
			>
				{optionsList}

			</NativeSelect>
		</FormControl>
	);
};

Droplist.propTypes = {
	classes: PropTypes.object.isRequired,
	error: PropTypes.bool,
	formControlProps: PropTypes.object,
	id: PropTypes.string,
	inputProps: PropTypes.object,
	inputRootCustomClasses: PropTypes.string,
	labelProps: PropTypes.object,
	labelText: PropTypes.node,
	onChange: PropTypes.func,
	options: PropTypes.array,
	success: PropTypes.bool,
	value: PropTypes.string,
};

export default withStyles(styles)(Droplist);
