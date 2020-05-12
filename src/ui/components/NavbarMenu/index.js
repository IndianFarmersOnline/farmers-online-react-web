import {
	List,
	ListItem,
	withStyles,
} from '@material-ui/core';
import Button from '../Button';
import { ExitToApp } from '@material-ui/icons';
import PropTypes from 'prop-types';
import React from 'react';
import { RegisterIcon } from '../Icons';
import style from './styles';

const NavbarMenu = ({ ...props }) => {
	const { classes } = props;
	return (
		<List className={classes.list}>
			<ListItem className={classes.listItem}>
				<Button
					className={classes.navLink}
					color="secondary"
					href="/login"
					round
				>
					<ExitToApp className={classes.icons} /> Login
				</Button>
			</ListItem>
			<ListItem className={classes.listItem}>
				<Button
					className={classes.navLink}
					color="secondary"
					href="/register"
					round
				>
					<RegisterIcon className={classes.icons} /> Register
				</Button>
			</ListItem>
		</List>
	);
};

NavbarMenu.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(style)(NavbarMenu);
