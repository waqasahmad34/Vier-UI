import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import styles from './Styles';
import ListView from '../../components/ListView';
import Swiper from 'react-native-swiper';

class HomeJobs extends Component {
	render() {
		return (
			<View style={styles.mainViewStyle}>
				<View style={{ flex: 0.1, justifyContent: 'center', marginLeft: '5%' }}>
					<Text
						style={{
							fontFamily: 'GothamRounded',
							fontSize: hp('2.2%'),
							fontWeight: '500',
							fontStyle: 'normal',
							letterSpacing: 0.74,
							color: '#012e41'
						}}
					>
						Home
					</Text>
				</View>
				<View style={{ flex: 0.05, justifyContent: 'center', marginLeft: '5%' }}>
					<Text
						style={{
							fontSize: hp('1.5%'),
							opacity: 0.69,
							fontFamily: 'GothamRounded',
							fontWeight: '500',
							fontStyle: 'normal',
							letterSpacing: 0.1,
							color: '#012e41'
						}}
					>
						CURRENT JOBS
					</Text>
				</View>

				<View style={{ flex: 1 }}>
					<Swiper
						horizontal={true}
						loop={false}
						bounces={true}
						dotColor="#dedede"
						activeDotColor="rgba(35,194,104,0.67)"
						pagingEnabled={true}
						index={0}
						showsHorizontalScrollIndicator={true}
					>
						<ListView />
						<ListView />
						<ListView />
						<ListView />
					</Swiper>
				</View>
			</View>
		);
	}
}

export default HomeJobs;
