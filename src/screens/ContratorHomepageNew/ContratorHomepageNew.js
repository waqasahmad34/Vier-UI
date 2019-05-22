import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import styles from './Styles';
import ListView from '../../components/ListView';
import ContractorView from '../../components/ContractorView';

class ContratorHomepageNew extends Component {
	render() {
		return (
			<View style={styles.mainViewStyle}>
				<View style={{ flex: 0.05, justifyContent: 'center', marginHorizontal: '8%',marginTop: 10, }}>
					<Text
						style={{
							fontFamily: 'GothamRounded',
							fontSize: hp('2%'),
							fontWeight: '500',
							fontStyle: 'normal',
							letterSpacing: 0.48,
							color: '#012e41'
						}}
					>
						Home
					</Text>
				</View>
				<View style={{ flex: 0.3,}}>
					<ScrollView horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={false}>
						<ContractorView />
                        <ContractorView />
                        <ContractorView />
					</ScrollView>
				</View>
				<View style={{ flex: 0.05, justifyContent: 'center', marginHorizontal: '8%' }}>
					<Text
						style={{
							fontFamily: 'GothamRounded',
							fontSize: hp('2%'),
							fontWeight: '500',
							fontStyle: 'normal',
							letterSpacing: 0.48,
							color: '#012e41'
						}}
					>
						Current Work
					</Text>
				</View>
				<View style={{ flex: 0.9 }}>
					<ScrollView horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={false}>
						<ListView />
						<ListView />
						<ListView />
					</ScrollView>
				</View>
			</View>
		);
	}
}

export default ContratorHomepageNew;
