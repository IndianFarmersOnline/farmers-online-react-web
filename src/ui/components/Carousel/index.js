import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import image1 from '../../assets/images/Carousel1.jpeg';
import image2 from '../../assets/images/Carousel3.jpeg';
import image3 from '../../assets/images/Carousel2.jpeg';
import PropTypes from 'prop-types';
import React from 'react';
import style from './styles';
import { withStyles } from '@material-ui/core';

const CustomCarousel = ({ ...props }) => {
	const { classes } = props;
	return (
		<Carousel
			autoPlay
			emulateTouch={false}
			infiniteLoop
			showArrows={false}
			showStatus={false}
			showThumbs={false}
		>
			<div>
				<img alt="Farmer 1" className={classes.image} src={image1} />
				<div className={classes.caption}>
					<h2>Data to be shown</h2>
						Visit our website
				</div>
			</div>
			<div>
				<img alt="Farmer 1" className={classes.image} src={image2} />
				<div className={classes.caption}>
					<h2>Data to be shown</h2>
						Visit our website
				</div>
			</div>
			<div>
				<img alt="Farmer 1" className={classes.image} src={image3} />
				<div className={classes.caption}>
					<h2>Data to be shown</h2>
						Visit our website
				</div>
			</div>
		</Carousel>
	);
};

CustomCarousel.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(style)(CustomCarousel);
