import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Dimensions } from 'react-native';
import styles from './Styles';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Thumbnail } from 'native-base';

const { width, height } = Dimensions.get('window');

class ContractorView extends Component {
	render() {
		return (
			<View style={styles.mainViewStyle}>
				<View
					style={{
						height: hp('18%'),
						borderRadius: 19,
						width: width - 50,
						marginTop: 15,
						backgroundColor: '#ffffff',
						marginHorizontal: 10
					}}
				>
					<View style={{ flex: 1 }}>
						<View
							style={{
								flex: 1,
								flexDirection: 'row',
								justifyContent: 'center',
								marginLeft: '12%'
							}}
						>
							<View style={{ flexDirection: 'row', justifyContent: 'center', flex: 1 }}>
								<View
									style={{
										justifyContent: 'center',
										flexDirection: 'row',
										alignItems: 'center',
										flex: 1
									}}
								>
									<View
										style={{
											height: hp('5%'),
											borderStyle: 'solid',
											borderWidth: 1,
											borderColor: '#3db232'
										}}
									/>
									<Text
										style={{
											fontFamily: 'GothamRounded',
											fontSize: hp('2.2%'),
											fontWeight: 'normal',
											fontStyle: 'normal',
											lineHeight: 19,
											letterSpacing: 0.43,
											color: '#4b4b4b',
											marginLeft: '8%'
										}}
									>
										Full Bedroom Paint & Renovation
									</Text>
								</View>
							</View>
							<View style={{ justifyContent: 'center', flex: 0.3, marginRight: '3%' }}>
								<View
									style={{
										width: wp('12%'),
										height: hp('6.5%'),
										borderRadius: 8,
										backgroundColor: 'rgba(45, 202, 112, 0.14)',
										justifyContent: 'center',
										alignItems: 'center'
									}}
								>
									<Text
										style={{
											fontFamily: 'GothamRounded',
											fontSize: hp('1.8%'),
											fontWeight: 'bold',
											fontStyle: 'normal',
											letterSpacing: 0.23,
											color: '#23c268'
										}}
									>
										23
									</Text>
									<Text
										style={{
											fontFamily: 'GothamRounded',
											fontSize: hp('1%'),
											fontWeight: '500',
											fontStyle: 'normal',
											letterSpacing: 0.14,
											color: '#23c268'
										}}
									>
										JUNE
									</Text>
								</View>
							</View>
						</View>

						<View
							style={{
								flex: 1,
								flexDirection: 'row',
								justifyContent: 'center',

								marginHorizontal: '8%'
							}}
						>
							<View
								style={{
									flex: 0.7,
									flexDirection: 'row',

									justifyContent: 'center',
									alignItems: 'center'
								}}
							>
								<View style={{ flex: 0.7 }}>
									<Thumbnail source={require('../../assets/Orignal.jpg')} small />
								</View>
								<View style={{ flex: 1 }}>
									<Text
										style={{
											fontFamily: 'GothamRounded',
											fontSize: hp('1.1%'),
											fontWeight: '500',
											fontStyle: 'normal',
											letterSpacing: 0.28,
											color: '#4b4b4b'
										}}
									>
										John Doe
									</Text>
									<Text
										style={{
											fontFamily: 'GothamRounded',
											fontSize: hp('0.8%'),
											fontWeight: 'normal',
											fontStyle: 'normal',
											letterSpacing: 0.15,
											color: '#898989'
										}}
									>
										HOMEOWNER
									</Text>
								</View>
							</View>

							<View
								style={{
									flex: 1,
									flexDirection: 'row',
									justifyContent: 'center',
									alignItems: 'center'
								}}
							>
								<TouchableOpacity
									style={{
										flex: 1,
										borderRadius: 20,
										backgroundColor: '#3db232',
										justifyContent: 'center',
										alignItems: 'center',
										height: hp('4.5%'),
										marginRight: '4%'
									}}
								>
									<Text
										style={{
											fontFamily: 'GothamRounded',
											fontSize: hp('1.2%'),
											fontWeight: '500',
											fontStyle: 'normal',
											letterSpacing: 0.3,
											color: '#ffffff'
										}}
									>
										View
									</Text>
								</TouchableOpacity>
								<TouchableOpacity
									style={{
										flex: 1,
										borderRadius: 20,
										backgroundColor: '#f6f6f6',
										justifyContent: 'center',
										alignItems: 'center',
										height: hp('4.5%')
									}}
								>
									<Text
										style={{
											fontFamily: 'GothamRounded',
											fontSize: hp('1.2%'),
											fontWeight: '500',
											fontStyle: 'normal',
											letterSpacing: 0.3,
											color: '#898989'
										}}
									>
										Cancel
									</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				</View>
			</View>
		);
	}
}

export default ContractorView;
