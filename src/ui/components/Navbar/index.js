import {
	AppBar,
	Button,
	Drawer,
	Hidden,
	IconButton,
	Toolbar,
	withStyles,
} from '@material-ui/core';
import brandImage from '../../assets/images/brand.png';
import classNames from 'classnames';
import Menu from '@material-ui/icons/Menu';
import PropTypes from 'prop-types';
import React from 'react';
import style from './styles';

const Navbar = ({ ...props }) => {
	const { classes } = props;
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const headerColorChange = () => {
		const { changeColorOnScroll, color } = props;
		const windowsScrollTop = window.pageYOffset;
		if (windowsScrollTop > changeColorOnScroll.height) {
			document.body
				.getElementsByTagName('header')[0]
				.classList.remove(classes[color]);
			document.body
				.getElementsByTagName('header')[0]
				.classList.add(classes[changeColorOnScroll.color]);
		} else {
			document.body
				.getElementsByTagName('header')[0]
				.classList.add(classes[color]);
			document.body
				.getElementsByTagName('header')[0]
				.classList.remove(classes[changeColorOnScroll.color]);
		}
	};

	React.useEffect(() => {
		if (props.changeColorOnScroll) {
			window.addEventListener('scroll', headerColorChange);
		}
		return function cleanup() {
			if (props.changeColorOnScroll) {
				window.removeEventListener('scroll', headerColorChange);
			}
		};
	});

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const {
		absolute, brand, color, fixed, leftLinks, rightLinks,
	} = props;

	const appBarClasses = classNames({
		[classes.appBar]: true,
		[classes[color]]: color,
		[classes.absolute]: absolute,
		[classes.fixed]: fixed,
	});

	const brandComponent = (
		<div className={classes.brandContainer}>
			<img alt="brand" className={classes.brandImage} src={brandImage} />
			<Button className={classes.brandTitle}>{brand}</Button>
		</div>
	);

	return (
		<AppBar className={appBarClasses}>
			<Toolbar className={classes.container}>
				{leftLinks !== undefined ? brandComponent : null}
				<div className={classes.flex}>
					{leftLinks !== undefined ? (
						<Hidden implementation="css" smDown>
							{leftLinks}
						</Hidden>
					) : (
						brandComponent
					)}
				</div>
				<Hidden implementation="css" smDown>
					{rightLinks}
				</Hidden>
				<Hidden mdUp>
					<IconButton
						aria-label="open drawer"
						color="inherit"
						onClick={handleDrawerToggle}
					>
						<Menu />
					</IconButton>
				</Hidden>
			</Toolbar>
			<Hidden implementation="js" mdUp>
				<Drawer
					anchor="right"
					classes={{
						paper: classes.drawerPaper,
					}}
					onClose={handleDrawerToggle}
					open={mobileOpen}
					variant="temporary"
				>
					<div className={classes.appResponsive}>
						{leftLinks}
						{rightLinks}
					</div>
				</Drawer>
			</Hidden>
		</AppBar>
	);
};

Navbar.defaultProp = {
	color: 'white',
};

Navbar.propTypes = {
	absolute: PropTypes.bool,
	brand: PropTypes.string,
	// this will cause the sidebar to change the color from
	// props.color (see above) to changeColorOnScroll.color
	// when the window.pageYOffset is higher or equal to
	// changeColorOnScroll.height and then when it is smaller than
	// changeColorOnScroll.height change it back to
	// props.color (see above)
	changeColorOnScroll: PropTypes.shape({
		color: PropTypes.oneOf([
			'dark',
			'primary',
			'primaryLight',
			'transparent',
			'white',
		]).isRequired,
		height: PropTypes.number.isRequired,
	}),
	classes: PropTypes.object.isRequired,
	color: PropTypes.oneOf([
		'dark',
		'primary',
		'primaryLight',
		'transparent',
		'white',
	]),
	fixed: PropTypes.bool,
	leftLinks: PropTypes.node,
	rightLinks: PropTypes.node,
};

// const Header = ({ ...props }) => {
// 	const { classes } = props;
// 	const [mobileOpen, setMobileOpen] = React.useState(false);

// 	const handleDrawerToggle = () => {
// 		setMobileOpen(!mobileOpen);
// 	};

// 	const {
// 		absolute, brand, color, fixed, leftLinks, rightLinks,
// 	} = props;
// 	const appBarClasses = classNames({
// 		[classes.appBar]: true,
// 		[classes[color]]: color,
// 		[classes.absolute]: absolute,
// 		[classes.fixed]: fixed,
// 	});
// 	const brandComponent = <Button className={classes.title}>{brand}</Button>;
// 	return (
// 		<AppBar className={appBarClasses}>
// 			<Toolbar className={classes.container}>
// 				{leftLinks !== undefined ? brandComponent : null}
// 				<div className={classes.flex}>
// 					{leftLinks !== undefined ? (
// 						<Hidden implementation="css" smDown>
// 							{leftLinks}
// 						</Hidden>
// 					) : (
// 						brandComponent
// 					)}
// 				</div>
// 				<Hidden implementation="css" smDown>
// 					{rightLinks}
// 				</Hidden>
// 				<Hidden mdUp>
// 					<IconButton
// 						aria-label="open drawer"
// 						color="inherit"
// 						onClick={handleDrawerToggle}
// 					>
// 						<Menu />
// 					</IconButton>
// 				</Hidden>
// 			</Toolbar>
// 			<Hidden implementation="js" mdUp>
// 				<Drawer
// 					anchor="right"
// 					classes={{
// 						paper: classes.drawerPaper,
// 					}}
// 					onClose={handleDrawerToggle}
// 					open={mobileOpen}
// 					variant="temporary"
// 				>
// 					<div className={classes.appResponsive}>
// 						{leftLinks}
// 						{rightLinks}
// 					</div>
// 				</Drawer>
// 			</Hidden>
// 		</AppBar>
// 	);
// };

// Header.defaultProp = {
// 	color: 'dark',
// };

// Header.propTypes = {
// 	absolute: PropTypes.bool,
// 	brand: PropTypes.string,
// 	classes: PropTypes.object.isRequired,
// 	color: PropTypes.oneOf([
// 		'primary',
// 		'transparent',
// 		'white',
// 		'dark',
// 	]),
// 	fixed: PropTypes.bool,
// 	leftLinks: PropTypes.node,
// 	rightLinks: PropTypes.node,
// };

export default withStyles(style)(Navbar);
