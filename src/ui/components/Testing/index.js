import React from 'react';
import TextBox from '../TextBox';

const Testing = () => {
	React.useEffect(() => {
		document.title = 'Home | FarmersOnline.com';
	}, []);
	return (
		<div>
			<h2>Testing Screen</h2>
			<TextBox
				autoComplete="off"
				// error
				fullWidth
				// helperText="Incorrect entry."
				id="password"
				// InputProps={{
				// 	endAdornment: (
				// 		<InputAdornment position="end">
				// 			<LockOutlinedIcon className={classes.inputIconsColor} />
				// 		</InputAdornment>
				// 	),
				// }}
				label="Password"
				name="password"
				required
				type="text"
				variant="outlined"
			/>
		</div>
	);
};

export default Testing;
