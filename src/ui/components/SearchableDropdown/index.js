import Autocomplete from '@material-ui/lab/Autocomplete';
/* eslint-disable react/jsx-props-no-spreading */
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import TextBox from '../TextBox';

const styles = {
	input: {
		'& div > div > button': {
			color: 'grey',
		},
		'& div > input': {
			color: 'rgba(117, 117, 117, 1) !important',
		},
		'& label': {
			color: 'rgba(117, 117, 117, 1) !important',
			fontSize: '1.6rem',
			fontWeight: '400',
			top: '-10px',
		},
		width: '100%',
	},
};

const useStyles = makeStyles(styles);

const SearchableDropdown = ({ ...props }) => {
	const classes = useStyles();
	const {
		getOptionLabel,
		getOptionSelected,
		id,
		inputProps,
		labelText,
		onChange,
		options,
		value,
	} = props;

	const defaultProps = {
		getOptionLabel,
		getOptionSelected,
		options,
	};
	return (
		<Autocomplete
			classes={{ root: classes.input }}
			{...defaultProps}
			id={id}
			onChange={onChange}
			renderInput={(params) => <TextBox {...params} label={labelText} {...inputProps} />}
			value={value}
		/>
	);
};

SearchableDropdown.defaultProps = {
	getOptionLabel: (option) => option.name,
	getOptionSelected: (option, value) => value.code === option.code,
};

SearchableDropdown.propTypes = {
	classes: PropTypes.object,
	getOptionLabel: PropTypes.func,
	getOptionSelected: PropTypes.func,
	id: PropTypes.string,
	inputProps: PropTypes.object,
	labelText: PropTypes.string,
	onChange: PropTypes.func,
	options: PropTypes.array,
	value: PropTypes.object,
};

export default SearchableDropdown;
