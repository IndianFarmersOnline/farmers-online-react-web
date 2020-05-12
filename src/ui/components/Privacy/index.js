/* eslint-disable max-len */
import PropTypes from 'prop-types';
import React from 'react';
import style from './styles';
import { withStyles } from '@material-ui/core';

const Privacy = ({ ...props }) => {
	React.useEffect(() => {
		document.title = 'Privacy Policy | FarmersOnline.com';
	}, []);

	const { classes } = props;

	return (
		<div className={classes.root}>
			<div className={classes.content}>
				<h3>General Information</h3>
				<p>
			We collect the Phone numbers and e-mail addresses of those who communicate with us via phone and e-mail, aggregate information on what pages consumers access or visit, and information volunteered by the consumer (such as survey information and/or site registrations). The information we collect is used to improve the content of our Web pages and the quality of our service, and is not shared with or sold to other organizations for commercial purposes, except to provide products or services you’ve requested, when we have your permission, or under the following circumstances:
				</p>
				<ul>
					<li>
				It is necessary to share information in order to investigate, prevent, or take action regarding illegal activities, suspected fraud, situations involving potential threats to the physical safety of any person, violations of Terms of Service, or as otherwise required by law.
					</li>
				</ul>
				<h3>
			Information Gathering and Usage
				</h3>
				<ul>
					<li>When you register for FarmersOnline.com website we ask for information such as your name, phone number, addresses and email.</li>
					<li>FarmersOnline.com website uses collected information for the following general purposes: Services provision, identification and authentication, services improvement, contact, and research.</li>
				</ul>
				<h3>Cookies</h3>
				<ul>
					<li>A cookie is a small amount of data, which often includes an anonymous unique identifier, that is sent to your browser from a web site’s computers and stored on your computer’s hard drive.</li>
					<li>Cookies are required to use the FarmersOnline.com website service.</li>
					<li>We use cookies to record current session information, but do not use permanent cookies. You are required to re-login to your FarmersOnline.com website account after a certain period of time has elapsed to protect you against others accidentally accessing your account contents.</li>
				</ul>
				<h3>Data Storage</h3>
				<p>
			FarmersOnline.com website uses third party vendors and hosting partners to provide the necessary hardware, software, networking, storage, and related technology required to run FarmersOnline.com website. Although FarmersOnline.com website owns the code, databases, and all rights to the FarmersOnline.com website application, you retain all rights to your data.
				</p>
				<h3>Disclosure</h3>
				<p>
			FarmersOnline.com website may disclose personally identifiable information under special circumstances, such as to comply with subpoenas or when your actions violate the Terms of Service.
				</p>
			</div>
		</div>
	);
};

Privacy.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(style)(Privacy);
