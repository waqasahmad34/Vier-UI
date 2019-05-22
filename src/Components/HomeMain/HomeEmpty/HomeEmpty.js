import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import styles from './Styles';
import GhostImage from '../../../assets/ghost.png';

class HomeEmpty extends Component {
	render() {
		return (
			<View style={styles.mainViewStyle}>
				<View style={styles.textViewStyle}>
					<Text style={styles.homeTextStyle}>Home</Text>
				</View>
				<View style={styles.innerViewStyle}>
					<View style={styles.contentMainViewStyle}>
						<View style={styles.imageViewStyle}>
							<Image source={GhostImage} style={styles.imageStyle} />
						</View>
						<View style={styles.lineViewStyle} />
						<View style={styles.descriptionMainViewStyle}>
							<View>
								<Text style={styles.description1TextStyle}>You don’t have any jobs yet.</Text>
								<Text style={styles.description2TextStyle}>We will notify you when you do</Text>
							</View>
						</View>
					</View>
				</View>
			</View>
		);
	}
}

export default HomeEmpty;
