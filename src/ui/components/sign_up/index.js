import {
	Avatar,
	Box,
	Button,
	Checkbox,
	Container,
	FormControlLabel,
	Grid,
	Link,
	TextField,
	Typography,
	withStyles,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import PropTypes from 'prop-types';
import React from 'react';
import style from './styles';

// Note: Component copied from material UI samples.

const Copyright = () => (
	<Typography align="center" color="textSecondary" variant="body2">
		{'Copyright © '}
		<Link color="inherit" href="https://farmersonline.co.in/">
        Farmers Online
		</Link>{' '}
		{new Date().getFullYear()}
		{'.'}
	</Typography>
);

const SignUp = ({ ...props }) => {
	const { classes } = props;

	return (
		<Container component="main" maxWidth="xs">
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
          Sign up
				</Typography>
				<form className={classes.form} noValidate>
					<Grid container spacing={2}>
						<Grid item sm={6} xs={12}>
							<TextField
								autoComplete="fname"
								autoFocus
								fullWidth
								id="firstName"
								label="First Name"
								name="firstName"
								required
								variant="outlined"
							/>
						</Grid>
						<Grid item sm={6} xs={12}>
							<TextField
								autoComplete="lname"
								fullWidth
								id="lastName"
								label="Last Name"
								name="lastName"
								required
								variant="outlined"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								autoComplete="phone"
								fullWidth
								id="phone"
								label="Phone Number"
								name="phone"
								required
								variant="outlined"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								autoComplete="current-password"
								fullWidth
								id="password"
								label="Password"
								name="password"
								required
								type="password"
								variant="outlined"
							/>
						</Grid>
						<Grid item xs={12}>
							<FormControlLabel
								control={<Checkbox color="primary" value="allowExtraEmails" />}
								label="I want to receive notifications and updates via text messages."
							/>
						</Grid>
					</Grid>
					<Button
						className={classes.submit}
						color="primary"
						fullWidth
						type="submit"
						variant="contained"
					>
            Sign Up
					</Button>
					<Grid container justify="flex-end">
						<Grid item>
							<Link href="https://farmersonline.co.in/" variant="body2">
                Already have an account? Sign in
							</Link>
						</Grid>
					</Grid>
				</form>
			</div>
			<Box mt={5}>
				<Copyright />
			</Box>
		</Container>
	);
};

SignUp.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(style)(SignUp);
