import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import styles from './Styles';
import SliderImage from '../../../assets/Orignal.jpg';
import Ripple from 'react-native-material-ripple';
import { Thumbnail } from 'native-base';

class ListView extends Component {
	render() {
		return (
			<Ripple rippleOpacity={0.1} style={styles.sliderViewStyle}>
				<Image source={SliderImage} style={styles.sliderImageStyle} />

				<View style={styles.descriptionContentmainViewStyle}>
					<View style={{ flexDirection: 'row', justifyContent: 'center' }}>
						<View style={styles.dateViewStyle}>
							<Text style={styles.dateTextStyle}>23</Text>
							<Text style={styles.monthTextStyle}>JUNE</Text>
						</View>

						<View style={styles.nameAndRemainingDayViewStyle}>
							<Text style={styles.nameTextStyle}>Backyard Deck Polish</Text>
							<Text style={styles.remainingDayTextStyle}>2 Days Remaining</Text>
						</View>
					</View>

					<View style={styles.circleAndRepairTextMainView}>
						<Thumbnail small source={SliderImage} />
						<View style={styles.repairTextViewStyle}>
							<Text style={styles.repairTextStyle}>Dan’s Deck Repair</Text>
						</View>
					</View>
				</View>
			</Ripple>
		);
	}
}

export default ListView;
