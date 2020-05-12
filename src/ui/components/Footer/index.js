import {
	Grid,
	List,
	ListItem,
	withStyles,
} from '@material-ui/core';
import Container from '../Container';
import PropTypes from 'prop-types';
import React from 'react';
import style from './styles';

const Footer = ({ ...props }) => {
	const { classes } = props;
	return (
		<footer className={classes.footer}>
			<div className={classes.container}>
				<Container component="sub">
					<Grid
						container
						spacing={2}
					>
						<Grid className={classes.gridItem} item sm={6} xs={12}>
							<div className={classes.left}>
								<List className={classes.list}>
									<ListItem className={classes.inlineBlock}>
										<a className={classes.block} href="/home">
											Home
										</a>
									</ListItem>
									<ListItem className={classes.inlineBlock}>
										<a className={classes.block} href="/privacy-policy">
											Privacy
										</a>
									</ListItem>
									<ListItem className={classes.inlineBlock}>
										<div className={classes.block}>
											Version 1.0.0
										</div>
									</ListItem>
								</List>
							</div>
						</Grid>
						<Grid className={classes.gridItemRight} item sm={6} xs={12}>
							<p className={classes.right}>
								<span>
									&copy; {1900 + new Date().getYear()}{' '}
									FarmersOnline.com
								</span>
							</p>
						</Grid>
					</Grid>
				</Container>
			</div>
		</footer>
	);
};

Footer.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(style)(Footer);
