import Carousel from '../Carousel';
import React from 'react';
import style from './styles';
import { withStyles } from '@material-ui/core';

const Home = () => (
	<Carousel />
);

export default withStyles(style)(Home);
