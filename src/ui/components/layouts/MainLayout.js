import Footer from '../Footer';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from '../Navbar';
import NavbarMenu from '../NavbarMenu';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles';

const useStyles = makeStyles(styles);

const MainLayout = ({ children }) => {
	const classes = useStyles();
	return (
		<div className={classes.site}>
			<div className={classes.siteContent}>
				<div className={classes.appHeader}>
					<Navbar
						brand="Farmers Online"
						changeColorOnScroll={{
							color: 'primaryLight',
							height: 400,
						}}
						color="primary"
						fixed
						rightLinks={<NavbarMenu />}
					/>
				</div>
				<div className={classes.main}>
					{children}
				</div>
			</div>
			<Footer />
		</div>
	);
};

MainLayout.propTypes = {
	children: PropTypes.object,
};

export default MainLayout;
