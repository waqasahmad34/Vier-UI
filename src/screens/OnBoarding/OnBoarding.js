import React from 'react';
import { View, Text } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import styles from './Styles';

const slides = [
	{
		key: 'pic1',
		image: require('../../assets/Onboarding1.png'),
		imageStyle: styles.image
	},
	{
		key: 'pic2',
		image: require('../../assets/Onboarding2.png'),
		imageStyle: styles.image
	},
	{
		key: 'pic3',
		title: 'jasfdjasg',
		image: require('../../assets/Onboarding3.png'),
		imageStyle: styles.image
	}
];

class OnBoarding extends React.Component {
	state = {
		showRealApp: false
	};
	_onDone = () => {
		// User finished the introduction. Show real app through
		// navigation or simply by controlling state
	};

	_onSkip = () => {
		// User finished the introduction. Show real app through
		// navigation or simply by controlling state
	};

	render() {
		return (
			<AppIntroSlider
				onSkip={this._onSkip}
				showSkipButton={true}
				skipLabel="SKIP"
				doneLabel="DONE"
				nextLabel="NEXT"
				buttonStyle={styles.buttonStyle}
				buttonTextStyle={styles.buttonTextStyle}
				activeDotStyle={styles.activeDotStyle}
				dotStyle={styles.dotStyle}
				slides={slides}
				onDone={this._onDone}
			/>
		);
	}
}

export default OnBoarding;
