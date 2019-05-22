import React, { Component } from 'react';
import { Text, ImageBackground, View, ProgressBarAndroid, ProgressViewIOS, Platform } from 'react-native';
import styles from './Styles';
import SplashImage from '../../assets/splash.png';

class Splash extends Component {
	render() {
		return (
			<ImageBackground source={SplashImage} style={styles.imageBackgroundStyle}>
				<View style={styles.progressBarViewStyle}>
					{Platform.OS == 'android' ? (
						<ProgressBarAndroid
							style={styles.progressBarStyle}
							indeterminate={false}
							progress={0.75}
							styleAttr="Horizontal"
							color="rgba(140,164,219,1)"
						/>
					) : (
						<ProgressViewIOS
							style={styles.progressBarStyle}
							indeterminate={false}
							progress={0.75}
							styleAttr="Horizontal"
							color="rgba(140,164,219,1)"
						/>
					)}
				</View>
			</ImageBackground>
		);
	}
}

export default Splash;
