import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import styles from './Styles';
import TickIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import StarIcon from 'react-native-vector-icons/FontAwesome';
import NoteBookIcon from 'react-native-vector-icons/SimpleLineIcons';
import PlusIcon from 'react-native-vector-icons/AntDesign';
import MinusIcon from 'react-native-vector-icons/AntDesign';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Textarea } from 'native-base';

const images = [
	require('../../assets/Orignal.jpg'),
	require('../../assets/Orignal.jpg'),
	require('../../assets/Orignal.jpg')
];

class JobCompletion extends Component {
	renderImages = () => {
		return images.map((image, index) => {
			return (
				<View
					key={index}
					style={[
						{ width: wp('11%') },
						{ height: hp('6%') },
						{ marginBottom: 5 },
						{ marginRight: 5 },
						{ marginTop: 5 }
					]}
				>
					<Image
						style={[
							index === 2 ? { opacity: 0.42, backgroundColor: '#0069e2' } : null,
							{ resizeMode: 'cover' },
							{ borderRadius: 7 },
							{ flex: 1 },
							{ width: null },
							{ height: null }
						]}
						source={image}
					/>
				</View>
			);
		});
	};
	render() {
		return (
			<View style={styles.mainViewStyle}>
				<View
					style={{
						borderRadius: 11,
						backgroundColor: '#ffffff',
						flex: 1.6,
						marginHorizontal: '5%',
						marginTop: 10,
						justifyContent: 'center'
					}}
				>
					<View style={{ flexDirection: 'row', marginHorizontal: '10%', justifyContent: 'space-between' }}>
						<TouchableOpacity
							style={{
								borderRadius: 20,
								width: wp('11.5%'),
								height: hp('6%'),
								backgroundColor: '#d8d8d8',
								justifyContent: 'center',
								alignItems: 'center'
							}}
						>
							<MinusIcon name="minus" size={hp('2%')} />
						</TouchableOpacity>

						<View
							style={{
								position: 'absolute',
								left: 75,
								bottom: -40,
								justifyContent: 'center',
								alignItems: 'center'
							}}
						>
							<View>
								<Text
									style={{
										opacity: 0.75,
										fontFamily: 'BebasNeue',
										fontSize: hp('5%'),
										fontWeight: 'normal',
										fontStyle: 'normal',
										letterSpacing: 2.55,
										textAlign: 'center',
										color: '#3db232'
									}}
								>
									00:03
								</Text>
							</View>
							<View style={{ marginTop: 10 }}>
								<Text
									style={{
										opacity: 0.84,
										fontFamily: 'BebasNeue',
										fontSize: hp('2.5%'),
										fontWeight: 'normal',
										fontStyle: 'normal',
										letterSpacing: 0.78,
										textAlign: 'center',
										color: '#3db232'
									}}
								>
									01:31:57
								</Text>
							</View>

							<View style={{ marginTop: 10 }}>
								<Text
									style={{
										opacity: 0.73,
										fontFamily: 'GothamRounded',
										fontSize: hp('2%'),
										fontWeight: '500',
										fontStyle: 'normal',
										letterSpacing: 0.23,
										color: '#012e41'
									}}
								>
									TIME REMAINING
								</Text>
							</View>
						</View>

						<TouchableOpacity
							style={{
								borderRadius: 20,
								width: wp('11.5%'),
								height: hp('6%'),
								backgroundColor: '#d8d8d8',
								justifyContent: 'center',
								alignItems: 'center'
							}}
						>
							<PlusIcon name="plus" size={hp('2%')} />
						</TouchableOpacity>
					</View>
				</View>
				<View
					style={{
						flex: 3,
						borderRadius: 11,
						backgroundColor: '#ffffff',
						marginHorizontal: '5%',
						marginTop: 10
					}}
				>
					<View style={{ flex: 1.5, marginTop: 12, marginHorizontal: '5%' }}>
						<View
							style={{
								opacity: 0.26,
								borderRadius: 7,
								backgroundColor: 'rgba(216, 216, 216, 0.14)',
								borderStyle: 'solid',
								borderWidth: 1,
								borderColor: '#979797'
							}}
						>
							<Textarea rowSpan={6} />
						</View>
					</View>
					<View style={{ flex: 1 }}>
						<View
							style={{
								justifyContent: 'center',
								alignItems: 'center',
								marginTop: 8
							}}
						>
							<TouchableOpacity
								style={{
									width: '90%',
									height: hp('6%'),
									borderRadius: 5,
									backgroundColor: '#b9b9b9',
									justifyContent: 'center',
									alignItems: 'center'
								}}
							>
								<View
									style={{
										flexDirection: 'row',
										flex: 1,
										justifyContent: 'center',
										alignItems: 'center'
									}}
								>
									<View style={{ flex: 0.15 }}>
										<NoteBookIcon name="notebook" color="white" size={hp('2.5%')} />
									</View>
									<View>
										<Text
											style={{
												fontFamily: 'GothamRounded',
												fontSize: hp('1.5%'),
												fontWeight: '500',
												fontStyle: 'normal',
												letterSpacing: 0.26,
												color: '#ffffff'
											}}
										>
											SAVE NOTE
										</Text>
									</View>
								</View>
							</TouchableOpacity>
						</View>

						<View
							style={{
								justifyContent: 'center',
								alignItems: 'center',
								marginTop: 10
							}}
						>
							<TouchableOpacity
								style={{
									width: '90%',
									height: hp('6%'),
									borderRadius: 5,
									backgroundColor: '#ffb220',
									justifyContent: 'center',
									alignItems: 'center'
								}}
							>
								<View
									style={{
										flexDirection: 'row',
										flex: 1,
										justifyContent: 'center',
										alignItems: 'center'
									}}
								>
									<View style={{ flex: 0.15 }}>
										<StarIcon name="star-o" color="white" size={hp('2.5%')} />
									</View>
									<View>
										<Text
											style={{
												fontSize: hp('1.5%'),
												fontFamily: 'GothamRounded',
												fontWeight: '500',
												fontStyle: 'normal',
												lineHeight: 15,
												letterSpacing: 0.19,
												color: '#ffffff'
											}}
										>
											GET USER REVIEW
										</Text>
									</View>
								</View>
							</TouchableOpacity>
						</View>
					</View>
				</View>
				<View
					style={{
						borderRadius: 11,
						backgroundColor: '#ffffff',
						marginTop: 10,
						marginHorizontal: '5%',
						justifyContent: 'center',
						flexWrap: 'wrap'
					}}
				>
					<View style={{ flexDirection: 'row', marginLeft: '5%', flexWrap: 'wrap' }}>
						{this.renderImages()}

						<TouchableOpacity
							style={{
								width: wp('11%'),
								height: hp('6%'),
								opacity: 0.65,
								marginTop: 5,
								marginBottom: 5,
								borderRadius: 6,
								backgroundColor: '#d8d8d8',
								justifyContent: 'center',
								alignItems: 'center'
							}}
						>
							<PlusIcon name="plus" size={hp('2%')} />
						</TouchableOpacity>
					</View>
				</View>
				<View style={{ marginTop: 15, flex: 1 }}>
					<View
						style={{
							justifyContent: 'center',
							alignItems: 'center'
						}}
					>
						<TouchableOpacity
							style={{
								width: '80%',
								height: hp('6%'),
								borderRadius: 25,
								backgroundColor: '#3db232',
								justifyContent: 'center',
								alignItems: 'center'
							}}
						>
							<View
								style={{
									flexDirection: 'row',
									flex: 1,
									justifyContent: 'center',
									alignItems: 'center'
								}}
							>
								<View style={{ flex: 0.3 }}>
									<TickIcon name="checkbox-marked-circle-outline" color="white" size={hp('2.5%')} />
								</View>
								<View style={{ flex: 0.6 }}>
									<Text
										style={{
											fontFamily: 'GothamRounded',
											fontSize: hp('1.6%'),
											fontWeight: '500',
											fontStyle: 'normal',
											letterSpacing: 0.26,
											color: '#ffffff'
										}}
									>
										JOB COMPLETED
									</Text>
								</View>
							</View>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		);
	}
}

export default JobCompletion;
