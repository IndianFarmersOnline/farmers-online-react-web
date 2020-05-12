import 'react-perfect-scrollbar/dist/css/styles.css';
import {
	Checkbox,
	FormControlLabel,
	FormGroup,
	Grid,
	Step,
	StepLabel,
	Stepper,
	Typography,
} from '@material-ui/core';
import brandImage from '../../assets/images/brand.png';
import Button from '../Button';
import CardHeader from '../CardHeader';
import Container from '../Container';
import DatePicker from '../DatePicker';
import DistrictJson from '../../../data/districts.json';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import React from 'react';
import SearchableDropdown from '../SearchableDropdown';
import StatesJson from '../../../data/states.json';
import styles from './styles';
import TextBox from '../TextBox';
import withStyles from '@material-ui/styles/withStyles';

const getSteps = () => [
	'Personal',
	'Address',
	'Farm',
	'Crops',
	'Terms',
];

const stepDescriptions = [
	'Personal Details',
	'Address Info',
	'Farm details',
	'Crops Details',
	'Terms & Conditions',
];

const Register = ({ ...props }) => {
	const [activeStep, setActiveStep] = React.useState(0);
	const [selectedState, setSelectedStateOption] = React.useState(null);
	const [selectedDistrict, setSelectedDistrictOption] = React.useState(null);
	const [districtOptions, setDistrictOptions] = React.useState([]);
	const [termsChecked, setTermsChecked] = React.useState(false);

	React.useEffect(() => {
		document.title = 'Register | FarmersOnline.com';
	}, []);


	const handleNext = () => {
		setActiveStep(activeStep + 1);
	};

	const gotoHome = () => {
		window.location = './home';
	};

	const handleBack = () => {
		setActiveStep(activeStep - 1);
	};

	const handleTerms = (event) => {
		setTermsChecked(event.target.checked);
	};

	const stepActions = () => {
		if (activeStep === 4) {
			return 'Submit';
		}
		return 'Next';
	};

	const { classes } = props;
	const steps = getSteps();

	return (
		<Container component="main" maxWidth="md">
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
						<h2>{stepDescriptions[activeStep]}</h2>
					</CardHeader>
				</Grid>
				<Grid className={classes.gridItem} item xs={12}>
					<Stepper
						activeStep={activeStep}
						alternativeLabel
						classes={{ root: classes.stepper }}
					>
						{steps.map((index, label) => (
							<Step key={label}>
								<StepLabel>{index}</StepLabel>
							</Step>
						))}
					</Stepper>
				</Grid>
				{activeStep === 0 && (
					<Container className={classes.itemContainer} component="sub" maxWidth="md">
						<div className={classes.paper}>
							<Grid
								className={classes.paperContent}
								container
							>
								<Grid item xs={12}>
									<TextBox
										autoComplete="firstName"
										autoFocus
										fullWidth
										id="firstName"
										label="First Name"
										name="firstName"
										required
										type="text"
										variant="standard"
									/>
								</Grid>
								<Grid item xs={12}>
									<TextBox
										autoComplete="surname"
										fullWidth
										id="surname"
										label="Surname"
										name="surname"
										required
										type="text"
										variant="standard"
									/>
								</Grid>
								<Grid item xs={12}>
									<TextBox
										autoComplete="fatherSpouseName"
										fullWidth
										id="fatherSpouseName"
										label="Father/Spouse Name"
										name="fatherSpouseName"
										required
										type="text"
										variant="standard"
									/>
								</Grid>
								<Grid item xs={12}>
									<DatePicker
										label="Date of Birth"
									/>
								</Grid>
							</Grid>
						</div>
					</Container>
				)}
				{activeStep === 1 && (
					<Container className={classes.itemContainer} component="sub" maxWidth="md">
						<div className={classes.paper}>
							<Grid
								className={classes.paperContent}
								container
							>
								<Grid item xs={12}>
									<TextBox
										autoComplete="addressLine1"
										autoFocus
										fullWidth
										id="addressLine1"
										label="Address"
										name="addressLine1"
										required
										type="text"
										variant="standard"
									/>
								</Grid>
								<Grid item xs={12}>
									{/* <Droplist
										formControlProps={{
											fullWidth: true,
										}}
										id="district"
										inputProps={{
											autoComplete: 'district',
										}}
										labelText="Select District"
										onChange={this.handleStateChange}
										options={states}
									/> */}
									<SearchableDropdown
										getOptionLabel={(option) => option.name}
										getOptionSelected={(option, value) => value.code === option.code}
										id="state"
										inputProps={{
											autoComplete: 'state',
											required: true,
										}}
										labelText="Select State"
										onChange={(_, selectedStateOption) => {
											setSelectedStateOption(selectedStateOption);
											setSelectedDistrictOption(null);
											if (selectedStateOption) {
												setDistrictOptions(DistrictJson[selectedStateOption.code]);
											}
										}}
										options={StatesJson}
										value={selectedState}
									/>
								</Grid>
								<Grid item xs={12}>
									<SearchableDropdown
										getOptionLabel={(option) => option.name}
										getOptionSelected={(option, value) => value.code === option.code}
										id="district"
										inputProps={{
											autoComplete: 'district',
											required: true,
										}}
										labelText="Select District"
										onChange={(_, selectedDistrictOption) => {
											setSelectedDistrictOption(selectedDistrictOption);
										}}
										options={districtOptions}
										value={selectedDistrict}
									/>
								</Grid>
								<Grid item xs={12}>
									<TextBox
										autoComplete="taluk"
										fullWidth
										id="taluk"
										label="Taluk"
										name="taluk"
										required
										type="text"
										variant="standard"
									/>
								</Grid>
								<Grid item xs={12}>
									<TextBox
										autoComplete="village"
										fullWidth
										id="village"
										label="Village"
										name="village"
										required
										type="text"
										variant="standard"
									/>
								</Grid>
								<Grid item xs={12}>
									<TextBox
										autoComplete="pincode"
										fullWidth
										id="pincode"
										label="Pincode"
										name="pincode"
										required
										type="text"
										variant="standard"
									/>
								</Grid>
							</Grid>
						</div>
					</Container>
				)}
				{activeStep === 2 && (
					<Container className={classes.itemContainer} component="sub" maxWidth="md">
						<div className={classes.paper}>
							<Grid
								className={classes.paperContent}
								container
							>
								<Grid item xs={12}>
									<TextBox
										autoComplete="totalFarmLand"
										autoFocus
										fullWidth
										id="totalFarmLand"
										label="Total farm land area"
										name="totalFarmLand"
										required
										type="text"
										variant="standard"
									/>
								</Grid>
								<Grid item xs={12}>
									<TextBox
										autoComplete="organicFarmLand"
										fullWidth
										id="organicFarmLand"
										label="Organic farm land area"
										name="organicFarmLand"
										required
										type="text"
										variant="standard"
									/>
								</Grid>
								<Grid item xs={12}>
									<TextBox
										autoComplete="nonOrganicFarmLand"
										fullWidth
										id="nonOrganicFarmLand"
										label="Non-Organic farm land area"
										name="nonOrganicFarmLand"
										required
										type="text"
										variant="standard"
									/>
								</Grid>
								<Grid item xs={12}>
									<TextBox
										autoComplete="horticultureArea"
										fullWidth
										id="horticultureArea"
										label="Horticulture land area"
										name="horticultureArea"
										required
										type="text"
										variant="standard"
									/>
								</Grid>
								<Grid item xs={12}>
									<TextBox
										autoComplete="agricultureLandArea"
										fullWidth
										id="agricultureLandArea"
										label="Agriculture land area"
										name="agricultureLandArea"
										required
										type="text"
										variant="standard"
									/>
								</Grid>
							</Grid>
						</div>
					</Container>
				)}
				{activeStep === 3 && (
					<Container className={classes.itemContainer} component="sub" maxWidth="md">
						<div className={classes.paper}>
							<Grid
								className={classes.paperContent}
								container
							>
								<Grid item xs={12}>
									<TextBox
										autoComplete="cropName"
										autoFocus
										fullWidth
										id="cropName"
										label="Name of Crop"
										name="cropName"
										required
										type="text"
										variant="standard"
									/>
								</Grid>
								<Grid item xs={12}>
									<DatePicker
										label="Harvest Date"
									/>
								</Grid>
								<Grid item xs={12}>
									<TextBox
										autoComplete="qtyInQuintals"
										fullWidth
										id="qtyInQuintals"
										label="Quantity in Quintals"
										name="qtyInQuintals"
										required
										type="text"
										variant="standard"
									/>
								</Grid>
							</Grid>
						</div>
					</Container>
				)}
				{activeStep === 4 && (
					<div>
						<div className={classes.paper}>
							<div className={classes.termsRoot}>
								<Typography
									className={classes.termsHeaderStyle}
									gutterBottom
									variant="subtitle1"
								>
Terms & Conditions
								</Typography>
								<Typography gutterBottom variant="body1">
Please read through and accept the terms &
conditions
								</Typography>
							</div>
							<PerfectScrollbar className={classes.termsContent}>
								<div>
									<Typography
										className={classes.termsHeaderStyle}
										gutterBottom
										variant="subtitle1"
									>
1. Your agreement
									</Typography>
									<Typography gutterBottom variant="body1">
By using this FarmersOnline.com, you agree to be bound by, and to
comply with, these Terms and Conditions. If you do
not agree to these Terms and Conditions, please do
not use this FarmersOnline.com. <br />  <br /> PLEASE NOTE: We reserve the
right, at our sole discretion, to change, modify or
otherwise alter these Terms and Conditions at any
time. Unless otherwise indicated, amendments will
become effective immediately. Please review these
Terms and Conditions periodically. Your continued
use of the FarmersOnline.com following the posting of changes
and/or modifications will constitute your acceptance
of the revised Terms and Conditions and the
reasonableness of these standards for notice of
changes. For your information, this page was last
updated as of the date at the top of these terms and
conditions.
									</Typography>
									<Typography
										className={classes.termsHeaderStyle}
										gutterBottom
										variant="subtitle1"
									>
2. Privacy
									</Typography>
									<Typography gutterBottom variant="body1">
Please review our Privacy Policy, which also governs
your visit to this FarmersOnline.com, to understand our
practices. By using this FarmersOnline.com, you agree to be bound
by, and to comply with, these Terms and Conditions.
If you do not agree to these Terms and Conditions,
please do not use this FarmersOnline.com. <br />  <br /> PLEASE NOTE: We reserve
the right, at our sole discretion, to change, modify
or otherwise alter these Terms and Conditions at any
time. Unless otherwise indicated, amendments will
become effective immediately. Please review these
Terms and Conditions periodically. Your continued
use of the FarmersOnline.com following the posting of changes
and/or modifications will constitute your acceptance
of the revised Terms and Conditions and the
reasonableness of these standards for notice of
changes. For your information, this page was last
updated as of the date at the top of these terms and
conditions.
									</Typography>
								</div>
							</PerfectScrollbar>
							<FormGroup row>
								<FormControlLabel
									control={(
										<Checkbox
											checked={termsChecked}
											onChange={handleTerms}
											value="check"
										/>
									)}
									label="I have read and understood the terms & conditions"
								/>
							</FormGroup>
						</div>
					</div>
				)}
				<Grid item xs={12}>
					<div className={classes.flexBar}>
						{activeStep !== 5 && (
							<Button
								className={classes.backButton}
								disabled={activeStep === 0}
								onClick={handleBack}
								round
								// size="lg"
							>
Back
							</Button>
						)}
						<Button
							color="primary"
							disabled={
								activeStep === 4 && !termsChecked
							}
							onClick={
								activeStep !== 4 ? handleNext : gotoHome
							}
							round
							// size="lg"
						>
							{stepActions()}
						</Button>
					</div>
				</Grid>
			</Grid>
		</Container>
	);
};

Register.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Register);
