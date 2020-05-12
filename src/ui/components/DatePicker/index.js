/* eslint-disable react/jsx-props-no-spreading */
import {
	KeyboardDatePicker,
	MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';
import MomentUtils from '@date-io/moment';
import PropTypes from 'prop-types';
import React from 'react';
import TextBox from '../TextBox';

const useStyles = makeStyles({
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
});

const DatePicker = ({ ...props }) => {
	const [selectedDate, setSelectedDate] = React.useState(null);
	const {
		format,
		label,
	} = props;

	const classes = useStyles();

	const handleDateChange = (date) => {
		setSelectedDate(moment(date));
	};

	return (
		<MuiPickersUtilsProvider utils={MomentUtils}>
			<div className={classes.root}>
				<KeyboardDatePicker
					classes={{ root: classes.input }}
					format={format}
					id="datepicker"
					KeyboardButtonProps={{
						'aria-label': 'change date',
					}}
					label={label}
					onChange={handleDateChange}
					TextFieldComponent={
						(textProps) => (<TextBox {...textProps} disabled required />)
					}
					value={selectedDate}
				/>
			</div>
		</MuiPickersUtilsProvider>
	);
};

DatePicker.defaultProps = {
	format: 'DD/MM/YYYY',
};

DatePicker.propTypes = {
	format: PropTypes.string,
	label: PropTypes.string.isRequired,
};

export default DatePicker;
