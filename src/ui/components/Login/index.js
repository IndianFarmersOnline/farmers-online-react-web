import {
	Checkbox,
	FormControlLabel,
	Grid,
	InputAdornment,
	Link,
	withStyles,
} from '@material-ui/core';
import brandImage from '../../assets/images/brand.png';
import Button from '../Button';
import CardHeader from '../CardHeader';
import Container from '../Container';
import Email from '@material-ui/icons/Email';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import PropTypes from 'prop-types';
import React from 'react';
import style from './styles';
import TextBox from '../TextBox';

const Login = ({ ...props }) => {
	React.useEffect(() => {
		document.title = 'Login | FarmersOnline.com';
	}, []);

	const { classes } = props;

	return (
		<Container component="main" maxWidth="xs">
			<div className={classes.paper}>
				<div className={classes.avatar}>
					<img
						alt="Avatar"
						className={classes.brandImage}
						src={brandImage}
					/>
				</div>
				<Grid
					className={classes.gridContainer}
					container
					spacing={2}
				>
					<Grid
						className={classes.gridItem}
						item
						xs={12}
					>
						<CardHeader
							className={classes.cardHeader}
							color="primary"
						>
							<h2>Login</h2>
						</CardHeader>
					</Grid>
					<Grid item xs={12}>
						<TextBox
							autoComplete="emailPhone"
							autoFocus
							fullWidth
							id="emailPhone"
							InputProps={{
								endAdornment: (
									<InputAdornment position="end">
										<Email />
									</InputAdornment>
								),
							}}
							label="Email/Phone"
							name="emailPhone"
							required
							type="text"
							variant="standard"
						/>
					</Grid>
					<Grid item xs={12}>
						<TextBox
							autoComplete="off"
							fullWidth
							id="password"
							InputProps={{
								endAdornment: (
									<InputAdornment position="end">
										<LockOutlinedIcon />
									</InputAdornment>
								),
							}}
							label="Password"
							name="password"
							required
							type="password"
							variant="standard"
						/>
					</Grid>
				</Grid>
				<Button
					className={classes.submit}
					color="primary"
					round
					type="submit"
				>
                    Login
				</Button>
				<Grid container justify="flex-start">
					<Grid item xs={6}>
						<FormControlLabel
							control={(
								<Checkbox
									classes={{
										root: classes.checkboxDefault,
									}}
									color="secondary"
									value="rememberMe"
								/>
							)}
							label={<span className={classes.linkFontStyle}>Remember Me</span>}
						/>
					</Grid>
					<Grid className={classes.forgotPassword} item xs={6}>
						<Link
							className={classes.linkFontStyle}
							href="/home"
							variant="body2"
						>
                        Forgot password?
						</Link>
					</Grid>
				</Grid>
			</div>
		</Container>
	);
};

Login.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(style)(Login);
