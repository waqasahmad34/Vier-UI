import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import PhoneIcon from 'react-native-vector-icons/SimpleLineIcons';
import TelegramIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './Styles';
import { Thumbnail } from 'native-base';

class ViewScreen extends Component {
	render() {
		return (
			<View style={styles.mainViewStyle}>
				<View style={{ flex: 1 }}>
					<Image
						source={require('../../assets/Orignal.jpg')}
						style={{ flex: 1, height: null, width: null, resizeMode: 'cover' }}
					/>
				</View>
				<View
					style={{
						flex: 1.2,
						borderTopRightRadius: 14,
						backgroundColor: '#ffffff',
						borderTopLeftRadius: 14
					}}
				>
					<View
						style={{
							width: 60,
							height: 60,
							borderStyle: 'solid',
							borderWidth: 3,
							borderColor: '#ffffff',
							position: 'absolute',
							bottom: '95%',
							left: 25,
							borderRadius: 30,
							zIndex: 2,
							elevation: 1
						}}
					>
						<Thumbnail
							style={{ flex: 1, height: null, width: null }}
							source={require('../../assets/profile.jpg')}
						/>
					</View>
					<View
						style={{
							flex: 0.27,
							marginHorizontal: '8%'
						}}
					>
						<View style={{ marginTop: '8%' }}>
							<Text
								style={{
									opacity: 0.73,
									fontFamily: 'GothamRounded',
									fontSize: hp('2%'),
									fontWeight: '500',
									fontStyle: 'normal',
									letterSpacing: 0.33,
									color: '#012e41'
								}}
							>
								Bedroom Renovation
							</Text>
							<Text
								style={{
									fontFamily: 'GothamRounded',
									fontSize: hp('1.5%'),
									fontWeight: '500',
									fontStyle: 'normal',
									letterSpacing: 0.22,
									color: '#c0c2c0'
								}}
							>
								2 Days Remaining
							</Text>
						</View>
						<View
							style={{
								width: wp('20%'),
								opacity: 0.21,
								borderStyle: 'solid',
								borderWidth: 1,
								borderColor: '#979797',
								marginTop: '4%'
							}}
						/>
					</View>

					<View
						style={{
							flex: 0.4,
							marginHorizontal: '8%'
						}}
					>
						<View style={{ flexDirection: 'row', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
							<View
								style={{
									width: wp('50%'),
									height: 36,
									borderRadius: 18.5,
									backgroundColor: 'rgba(216,216,216,0.25)',
									flexDirection: 'row'
								}}
							>
								<Thumbnail small source={require('../../assets/profile.jpg')} />
								<View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
									<Text
										styl={{
											fontFamily: 'SFProText',
											fontSize: hp('1%'),
											fontWeight: 'normal',
											fontStyle: 'normal',
											letterSpacing: 0.22,
											color: '#8a8a8a'
										}}
									>
										Toms Renovators
									</Text>
								</View>
							</View>

							<View
								style={{
									flexDirection: 'row',
									justifyContent: 'center',
									alignItems: 'center',
									flex: 1
								}}
							>
								<TouchableOpacity
									style={{
										width: 38,
										height: 38,
										borderRadius: 20,
										backgroundColor: 'rgba(216,216,216,0.27)',
										justifyContent: 'center',
										alignItems: 'center',
										marginRight: '5%'
									}}
								>
									<TelegramIcon name="telegram" color="#3db232" size={hp('2.5%')} />
								</TouchableOpacity>
								<TouchableOpacity
									style={{
										width: 38,
										height: 38,
										borderRadius: 20,
										backgroundColor: 'rgba(216,216,216,0.27)',
										justifyContent: 'center',
										alignItems: 'center'
									}}
								>
									<PhoneIcon name="phone" color="#3db232" size={hp('2.5%')} />
								</TouchableOpacity>
							</View>
						</View>
					</View>

					<View
						style={{
							flex: 0.9,
							marginHorizontal: '8%'
						}}
					>
						<View
							style={{
								flex: 0.2
							}}
						>
							<View>
								<Text
									style={{
										opacity: 0.72,
										fontFamily: 'GothamRounded',
										fontSize: hp('1.6%'),
										fontWeight: '500',
										fontStyle: 'normal',
										letterSpacing: 0.22,
										color: '#012e41'
									}}
								>
									Details
								</Text>
							</View>

							<View
								style={{
									width: wp('10%'),
									borderStyle: 'solid',
									borderWidth: 1.5,
									borderColor: '#3db232',
									marginTop: '1.5%'
								}}
							/>
						</View>

						<View
							style={{
								flex: 1
							}}
						>
							<Text
								style={{
									opacity: 0.8,
									fontFamily: 'GothamRounded',
									fontSize: hp('1.5%'),
									fontWeight: 'normal',
									fontStyle: 'normal',
									lineHeight: 19,
									letterSpacing: 0.11,
									color: '#535353'
								}}
							>
								Lorem ipsum dolor sit amet, consectetur adip scing elit. Donec lacinia sapien dolor,
								eget tristique enim hendrerit vel. Nullam ornare magna nec interdum gravida.
							</Text>
						</View>
					</View>
				</View>
			</View>
		);
	}
}

export default ViewScreen;
