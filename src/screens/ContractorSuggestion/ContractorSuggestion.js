import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import styles from './Styles';
import PersonIcon from 'react-native-vector-icons/MaterialIcons';
import StarRating from 'react-native-star-rating';
import BackgroundImage from '../../assets/Orignal.jpg';
import Dialog, { SlideAnimation, DialogContent } from 'react-native-popup-dialog';

class ContractorSuggestion extends Component {
	constructor(props) {
		super(props);
		this.state = {
			starCount: 3,
			visible: false
		};
	}

	onStarRatingPress(rating) {
		this.setState({
			starCount: rating
		});
	}

	setModalVisible = (visible) => {
		this.setState({ visible: visible });
	};
	render() {
		return (
			<View style={styles.mainViewStyle}>
				<View style={{ flex: 0.1, justifyContent: 'center', alignItems: 'center' }}>
					<Text
						style={{
							fontFamily: 'GothamRounded',
							fontSize: hp('2%'),
							fontWeight: '500',
							fontStyle: 'normal',
							letterSpacing: 0.31,
							color: '#012e41'
						}}
					>
						{' '}
						We’ve found{' '}
						<Text
							style={{
								fontFamily: 'GothamRounded',
								fontSize: hp('2%'),
								fontWeight: '500',
								fontStyle: 'normal',
								letterSpacing: 0.31,
								color: 'rgba(61,178,50,1)'
							}}
						>
							3
						</Text>{' '}
						matches!{' '}
					</Text>
				</View>

				<Dialog
					visible={this.state.visible}
					height={0.31}
					width={0.7}
					onHardwareBackPress={() => this.setState({ visible: true })}
					onTouchOutside={() => this.setState({ visible: false })}
					dialogAnimation={
						new SlideAnimation({
							slideFrom: 'bottom'
						})
					}
				>
					<DialogContent>
						<View style={{ height: hp('30%') }}>
							<View
								style={{
									height: hp('10%'),
									justifyContent: 'center',
									alignItems: 'center'
								}}
							>
								<Text
									style={{
										fontFamily: 'GothamRounded',
										fontSize: hp('2%'),
										fontWeight: '500',
										fontStyle: 'normal',
										letterSpacing: 0.31,
										color: '#3db232'
									}}
								>
									Congratulations!
								</Text>
								<View
									style={{
										marginTop: '10%',
										width: wp('18%'),
										opacity: 0.21,
										borderStyle: 'solid',
										borderWidth: 2,
										borderColor: '#012e41',
										borderRadius: 1
									}}
								/>
							</View>
							<View
								style={{
									height: hp('10%'),
									justifyContent: 'center',
									alignItems: 'center',
									marginHorizontal: '10%'
								}}
							>
								<Text
									style={{
										fontFamily: 'GothamRounded',
										fontSize: hp('1.5%'),
										fontWeight: 'normal',
										fontStyle: 'normal',
										lineHeight: 21,
										letterSpacing: 0.33,
										textAlign: 'center',
										color: '#666666'
									}}
								>
									<Text
										style={{
											fontFamily: 'GothamRounded',
											fontSize: hp('1.8%'),
											fontWeight: 'normal',
											fontStyle: 'normal',
											lineHeight: 21,
											letterSpacing: 0.33,
											textAlign: 'center',
											color: '#666666'
										}}
									>
										Home Deport
									</Text>{' '}
									will notify you with a quote if they are interested.
								</Text>
							</View>

							<View
								style={{
									height: hp('10%'),
									justifyContent: 'center',
									alignItems: 'center'
								}}
							>
								<TouchableOpacity
									onPress={() => this.setModalVisible(false)}
									style={{
										borderRadius: 25,
										backgroundColor: '#3db232',
										height: hp('5%'),
										width: '80%',
										justifyContent: 'center',
										alignItems: 'center'
									}}
								>
									<Text
										style={{
											fontFamily: 'GothamRounded',
											fontSize: hp('1.8%'),
											fontWeight: '500',
											fontStyle: 'normal',
											letterSpacing: 0.26,
											textAlign: 'center',
											color: '#ffffff'
										}}
									>
										CLOSE
									</Text>
								</TouchableOpacity>
							</View>
						</View>
					</DialogContent>
				</Dialog>
				<ScrollView style={{ flex: 1 }}>
					<View
						style={{
							flex: 1,
							marginTop: '10%',
							height: hp('25%'),
							marginLeft: '5%'
						}}
					>
						<View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
							<View
								style={{
									flex: 1,
									borderRadius: 9,
									elevation: 1,
									backgroundColor: '#ffffff'
								}}
							>
								<View style={{ flex: 0.4, marginHorizontal: '5%', marginTop: '5%' }}>
									<Text
										style={{
											fontFamily: 'GothamRounded',
											fontSize: hp('1.6%'),
											fontWeight: '500',
											fontStyle: 'normal',
											letterSpacing: 0.25,
											color: '#012e41'
										}}
									>
										Dan’s Repair
									</Text>
									<View
										style={{
											width: wp('10%'),
											borderStyle: 'solid',
											borderWidth: 1.5,
											borderColor: '#3db232',
											marginTop: '5%',
											borderRadius: 5
										}}
									/>
								</View>
								<View style={{ flex: 1, marginHorizontal: '5%', justifyContent: 'center' }}>
									<View style={{}}>
										<Text
											style={{
												fontFamily: 'GothamRounded',
												fontSize: hp('1.3%'),
												fontWeight: 'normal',
												fontStyle: 'normal',
												lineHeight: 15,
												letterSpacing: 0.16,
												color: '#989898'
											}}
										>
											Lorem ipsum dolor sit amet consectetur adip scing elit. Donec lacinia{' '}
										</Text>
									</View>
								</View>
								<View style={{ flex: 0.8, marginHorizontal: '5%' }}>
									<View style={{ flex: 1, flexDirection: 'row' }}>
										<View style={{ flex: 1, justifyContent: 'center', marginRight: '10%' }}>
											<StarRating
												starSize={hp('2%')}
												fullStarColor="#ffce33"
												emptyStarColor="#ffce33"
												disabled={false}
												maxStars={4}
												rating={this.state.starCount}
												selectedStar={(rating) => this.onStarRatingPress(rating)}
											/>
										</View>
										<View style={{ flex: 1, justifyContent: 'center' }}>
											<TouchableOpacity
												onPress={() => this.setModalVisible(true)}
												style={{
													borderRadius: 4,
													backgroundColor: '#3db232',
													alignItems: 'center',
													justifyContent: 'center',
													height: hp('4.5%')
												}}
											>
												<Text
													style={{
														fontFamily: 'GothamRounded',
														fontSize: hp('1.3%'),
														fontWeight: '500',
														fontStyle: 'normal',
														letterSpacing: 0.16,
														color: '#ffffff'
													}}
												>
													SELECT
												</Text>
											</TouchableOpacity>
										</View>
									</View>
								</View>
							</View>
							<View
								style={{
									backgroundColor: '',
									height: hp('28%'),
									borderRadius: 9,
									backgroundColor: '#384665',
									flex: 1,
									position: 'relative',
									right: 20
								}}
							>
								<ImageBackground
									source={BackgroundImage}
									style={{
										flex: 1,
										opacity: 0.62,
										resizeMode: 'cover',
										borderRadius: 9,
										backgroundColor: '#384665',
										justifyContent: 'center',
										alignItems: 'center'
									}}
								>
									<View
										style={{
											width: 64,
											height: 64,
											borderStyle: 'solid',
											borderWidth: 1,
											borderColor: 'rgba(255,255,255,0.18)',
											borderRadius: 32,
											justifyContent: 'center',
											alignItems: 'center'
										}}
									>
										<View
											style={{
												width: 45,
												height: 45,
												borderRadius: 23,
												backgroundColor: '#ffffff',
												justifyContent: 'center',
												alignItems: 'center'
											}}
										>
											<View
												style={{
													borderRadius: 2,
													width: 4,
													height: 4,
													position: 'absolute',
													backgroundColor: '#3db232',
													left: 41,
													bottom: 11,
													zIndex: 1
												}}
											/>
											<PersonIcon name="person-outline" color="#3db232" size={hp('2.5%')} />
										</View>
									</View>
								</ImageBackground>
							</View>
						</View>
					</View>

					<View
						style={{
							flex: 1,
							marginTop: '10%',
							height: hp('25%'),
							marginLeft: '5%'
						}}
					>
						<View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
							<View
								style={{
									flex: 1,
									borderRadius: 9,
									elevation: 1,
									backgroundColor: '#ffffff'
								}}
							>
								<View style={{ flex: 0.4, marginHorizontal: '5%', marginTop: '5%' }}>
									<Text
										style={{
											fontFamily: 'GothamRounded',
											fontSize: hp('1.6%'),
											fontWeight: '500',
											fontStyle: 'normal',
											letterSpacing: 0.25,
											color: '#012e41'
										}}
									>
										Home Depart
									</Text>
									<View
										style={{
											width: wp('10%'),
											borderStyle: 'solid',
											borderWidth: 1.5,
											borderColor: '#3db232',
											marginTop: '5%',
											borderRadius: 5
										}}
									/>
								</View>
								<View style={{ flex: 1, marginHorizontal: '5%', justifyContent: 'center' }}>
									<View style={{}}>
										<Text
											style={{
												fontFamily: 'GothamRounded',
												fontSize: hp('1.3%'),
												fontWeight: 'normal',
												fontStyle: 'normal',
												lineHeight: 15,
												letterSpacing: 0.16,
												color: '#989898'
											}}
										>
											Lorem ipsum dolor sit amet consectetur adip scing elit. Donec lacinia{' '}
										</Text>
									</View>
								</View>
								<View style={{ flex: 0.8, marginHorizontal: '5%' }}>
									<View style={{ flex: 1, flexDirection: 'row' }}>
										<View style={{ flex: 1, justifyContent: 'center', marginRight: '10%' }}>
											<StarRating
												starSize={hp('2%')}
												fullStarColor="#ffce33"
												emptyStarColor="#ffce33"
												disabled={false}
												maxStars={4}
												rating={this.state.starCount}
												selectedStar={(rating) => this.onStarRatingPress(rating)}
											/>
										</View>
										<View style={{ flex: 1, justifyContent: 'center' }}>
											<TouchableOpacity
												onPress={() => this.setModalVisible(true)}
												style={{
													borderRadius: 4,
													backgroundColor: '#3db232',
													alignItems: 'center',
													justifyContent: 'center',
													height: hp('4.5%')
												}}
											>
												<Text
													style={{
														fontFamily: 'GothamRounded',
														fontSize: hp('1.3%'),
														fontWeight: '500',
														fontStyle: 'normal',
														letterSpacing: 0.16,
														color: '#ffffff'
													}}
												>
													SELECT
												</Text>
											</TouchableOpacity>
										</View>
									</View>
								</View>
							</View>
							<View
								style={{
									backgroundColor: '',
									height: hp('28%'),
									borderRadius: 9,
									backgroundColor: '#384665',
									flex: 1,
									position: 'relative',
									right: 20
								}}
							>
								<ImageBackground
									source={BackgroundImage}
									style={{
										flex: 1,
										opacity: 0.62,
										resizeMode: 'cover',
										borderRadius: 9,
										backgroundColor: '#384665',
										justifyContent: 'center',
										alignItems: 'center'
									}}
								>
									<View
										style={{
											width: 64,
											height: 64,
											borderStyle: 'solid',
											borderWidth: 1,
											borderColor: 'rgba(255,255,255,0.18)',
											borderRadius: 32,
											justifyContent: 'center',
											alignItems: 'center'
										}}
									>
										<View
											style={{
												width: 45,
												height: 45,
												borderRadius: 23,
												backgroundColor: '#ffffff',
												justifyContent: 'center',
												alignItems: 'center'
											}}
										>
											<View
												style={{
													borderRadius: 2,
													width: 4,
													height: 4,
													position: 'absolute',
													backgroundColor: '#3db232',
													left: 41,
													bottom: 11,
													zIndex: 1
												}}
											/>
											<PersonIcon name="person-outline" color="#3db232" size={hp('2.5%')} />
										</View>
									</View>
								</ImageBackground>
							</View>
						</View>
					</View>

					<View
						style={{
							flex: 1,
							marginTop: '10%',
							height: hp('25%'),
							marginLeft: '5%'
						}}
					>
						<View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
							<View
								style={{
									flex: 1,
									borderRadius: 9,
									elevation: 1,
									backgroundColor: '#ffffff'
								}}
							>
								<View style={{ flex: 0.4, marginHorizontal: '5%', marginTop: '5%' }}>
									<Text
										style={{
											fontFamily: 'GothamRounded',
											fontSize: hp('1.6%'),
											fontWeight: '500',
											fontStyle: 'normal',
											letterSpacing: 0.25,
											color: '#012e41'
										}}
									>
										Canadian Fire
									</Text>
									<View
										style={{
											width: wp('10%'),
											borderStyle: 'solid',
											borderWidth: 1.5,
											borderColor: '#3db232',
											marginTop: '5%',
											borderRadius: 5
										}}
									/>
								</View>
								<View style={{ flex: 1, marginHorizontal: '5%', justifyContent: 'center' }}>
									<View style={{}}>
										<Text
											style={{
												fontFamily: 'GothamRounded',
												fontSize: hp('1.3%'),
												fontWeight: 'normal',
												fontStyle: 'normal',
												lineHeight: 15,
												letterSpacing: 0.16,
												color: '#989898'
											}}
										>
											Lorem ipsum dolor sit amet consectetur adip scing elit. Donec lacinia{' '}
										</Text>
									</View>
								</View>
								<View style={{ flex: 0.8, marginHorizontal: '5%' }}>
									<View style={{ flex: 1, flexDirection: 'row' }}>
										<View style={{ flex: 1, justifyContent: 'center', marginRight: '10%' }}>
											<StarRating
												starSize={hp('2%')}
												fullStarColor="#ffce33"
												emptyStarColor="#ffce33"
												disabled={false}
												maxStars={4}
												rating={this.state.starCount}
												selectedStar={(rating) => this.onStarRatingPress(rating)}
											/>
										</View>
										<View style={{ flex: 1, justifyContent: 'center' }}>
											<TouchableOpacity
												onPress={() => this.setModalVisible(true)}
												style={{
													borderRadius: 4,
													backgroundColor: '#3db232',
													alignItems: 'center',
													justifyContent: 'center',
													height: hp('4.5%')
												}}
											>
												<Text
													style={{
														fontFamily: 'GothamRounded',
														fontSize: hp('1.3%'),
														fontWeight: '500',
														fontStyle: 'normal',
														letterSpacing: 0.16,
														color: '#ffffff'
													}}
												>
													SELECT
												</Text>
											</TouchableOpacity>
										</View>
									</View>
								</View>
							</View>
							<View
								style={{
									backgroundColor: '',
									height: hp('28%'),
									borderRadius: 9,
									backgroundColor: '#384665',
									flex: 1,
									position: 'relative',
									right: 20
								}}
							>
								<ImageBackground
									source={BackgroundImage}
									style={{
										flex: 1,
										opacity: 0.62,
										resizeMode: 'cover',
										borderRadius: 9,
										backgroundColor: '#384665',
										justifyContent: 'center',
										alignItems: 'center'
									}}
								>
									<View
										style={{
											width: 64,
											height: 64,
											borderStyle: 'solid',
											borderWidth: 1,
											borderColor: 'rgba(255,255,255,0.18)',
											borderRadius: 32,
											justifyContent: 'center',
											alignItems: 'center'
										}}
									>
										<View
											style={{
												width: 45,
												height: 45,
												borderRadius: 23,
												backgroundColor: '#ffffff',
												justifyContent: 'center',
												alignItems: 'center'
											}}
										>
											<View
												style={{
													borderRadius: 2,
													width: 4,
													height: 4,
													position: 'absolute',
													backgroundColor: '#3db232',
													left: 41,
													bottom: 11,
													zIndex: 1
												}}
											/>
											<PersonIcon name="person-outline" color="#3db232" size={hp('2.5%')} />
										</View>
									</View>
								</ImageBackground>
							</View>
						</View>
					</View>
				</ScrollView>
			</View>
		);
	}
}

export default ContractorSuggestion;
