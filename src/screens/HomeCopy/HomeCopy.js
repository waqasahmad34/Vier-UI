import React, { Component } from 'react';
import { Text, View, TextInput, Animated, ScrollView, Keyboard, Modal, TouchableOpacity } from 'react-native';
import styles from './Styles';
import ListView from '../../components/ListView';
import Swiper from 'react-native-swiper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ArrowBack from 'react-native-vector-icons/MaterialIcons';
class HomeCopy extends Component {
	constructor(props) {
		super(props);
		this.state = {
			animated: new Animated.Value(0),
			modalVisible: false
		};
	}

	setModalVisible(visible) {
		this.setState({ modalVisible: visible });
	}

	componentDidMount() {
		const { animated } = this.state;
		Animated.loop(
			Animated.sequence([
				Animated.timing(animated, {
					toValue: 1,
					duration: 1500
				})
			]),
			{
				iterations: 5
			}
		).start();
	}

	render() {
		const { animated } = this.state;
		return (
			<View style={styles.mainViewStyle}>
				<View style={styles.headerViewStyle}>
					<View style={styles.imLookingFortextViewStyle}>
						<Text style={styles.imlookingForTextStyle}>I’m looking for…</Text>
					</View>
					<View style={styles.textInputViewStyle}>
						<TouchableOpacity
							onPress={() => this.setModalVisible(true)}
							style={{
								flexDirection: 'row',
								borderRadius: 29,
								width: '80%',
								justifyContent: 'center',
								alignItems: 'center',
								height: hp('7%'),
								backgroundColor: '#ffffff'
							}}
						>
							<Text style={styles.textInputStyle}>carpenter, technician</Text>
						</TouchableOpacity>
						<Animated.View
							style={[
								styles.roundOuterViewStyle,
								{
									transform: [
										{
											scale: animated
										}
									]
								}
							]}
						>
							<Animated.View style={styles.roundInnerViewStyle} />
						</Animated.View>
					</View>
				</View>

				<Modal
					animationType="slide"
					transparent={false}
					visible={this.state.modalVisible}
					// onRequestClose={() => {
					// 	Alert.alert('Modal has been closed.');
					// }}
				>
					<View
						style={{
							flex: 0.85,
							backgroundColor: '#384665',
							borderBottomLeftRadius: 24,
							borderBottomRightRadius: 24
						}}
					>
						<View style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center' }}>
							<Text
								style={{
									fontFamily: 'GothamRounded',
									fontSize: hp('2.5%'),
									fontWeight: 'normal',
									fontStyle: 'normal',
									letterSpacing: 0.31,
									color: '#ffffff'
								}}
							>
								I’m looking for…
							</Text>
							<TouchableOpacity
								style={{ position: 'absolute', left: '10%' }}
								onPress={() => {
									this.setModalVisible(!this.state.modalVisible);
								}}
							>
								<ArrowBack name="arrow-back" color="#ffffff" size={hp('4%')} />
							</TouchableOpacity>
						</View>
						<View
							style={{
								flex: 1,
								borderRadius: 29,
								backgroundColor: '#ffffff',
								marginHorizontal: '10%'
							}}
						>
							<View style={{ flex: 0.1, marginLeft: '10%', justifyContent: 'center' }}>
								<Text
									style={{
										opacity: 0.45,
										fontFamily: 'GothamRounded',
										fontSize: hp('1.8%'),
										fontWeight: 'normal',
										fontStyle: 'normal',
										letterSpacing: 0.26,
										color: '#012e41'
									}}
								>
									Select an option below
								</Text>
							</View>
							<View
								style={{
									flex: 1,
									justifyContent: 'center',
									marginBottom: '5%',
									marginLeft: '10%',
									marginRight: '5%'
								}}
							>
								<ScrollView>
									<TouchableOpacity>
										<Text
											style={{
												opacity: 1,
												fontFamily: 'GothamRounded',
												fontSize: hp('1.9%'),
												fontWeight: 'normal',
												fontStyle: 'normal',
												lineHeight: 51,
												letterSpacing: 0.56,
												color: '#012e41'
											}}
										>
											Plumber
										</Text>
									</TouchableOpacity>
									<TouchableOpacity>
										<Text
											style={{
												opacity: 1,
												fontFamily: 'GothamRounded',
												fontSize: hp('1.9%'),
												fontWeight: 'normal',
												fontStyle: 'normal',
												lineHeight: 51,
												letterSpacing: 0.56,
												color: '#012e41'
											}}
										>
											Heating and Ductwork
										</Text>
									</TouchableOpacity>
									<TouchableOpacity>
										<Text
											style={{
												opacity: 1,
												fontFamily: 'GothamRounded',
												fontSize: hp('1.9%'),
												fontWeight: 'normal',
												fontStyle: 'normal',
												lineHeight: 51,
												letterSpacing: 0.56,
												color: '#012e41'
											}}
										>
											Drywaller
										</Text>
									</TouchableOpacity>
									<TouchableOpacity>
										<Text
											style={{
												opacity: 1,
												fontFamily: 'GothamRounded',
												fontSize: hp('1.9%'),
												fontWeight: 'normal',
												fontStyle: 'normal',
												lineHeight: 51,
												letterSpacing: 0.56,
												color: '#012e41'
											}}
										>
											Painter
										</Text>
									</TouchableOpacity>
									<TouchableOpacity>
										<Text
											style={{
												opacity: 1,
												fontFamily: 'GothamRounded',
												fontSize: hp('1.9%'),
												fontWeight: 'normal',
												fontStyle: 'normal',
												lineHeight: 51,
												letterSpacing: 0.56,
												color: '#012e41'
											}}
										>
											Finish Carpenter
										</Text>
									</TouchableOpacity>
									<TouchableOpacity>
										<Text
											style={{
												opacity: 1,
												fontFamily: 'GothamRounded',
												fontSize: hp('1.9%'),
												fontWeight: 'normal',
												fontStyle: 'normal',
												lineHeight: 51,
												letterSpacing: 0.56,
												color: '#012e41'
											}}
										>
											Plumbing
										</Text>
									</TouchableOpacity>
									<TouchableOpacity>
										<Text
											style={{
												opacity: 1,
												fontFamily: 'GothamRounded',
												fontSize: hp('1.9%'),
												fontWeight: 'normal',
												fontStyle: 'normal',
												lineHeight: 51,
												letterSpacing: 0.56,
												color: '#012e41'
											}}
										>
											Headting
										</Text>
									</TouchableOpacity>
									<TouchableOpacity>
										<Text
											style={{
												opacity: 1,
												fontFamily: 'GothamRounded',
												fontSize: hp('1.9%'),
												fontWeight: 'normal',
												fontStyle: 'normal',
												lineHeight: 51,
												letterSpacing: 0.56,
												color: '#012e41'
											}}
										>
											Air Conditioning
										</Text>
									</TouchableOpacity>
								</ScrollView>

								{/* <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
									<FlatList
										date={listItems}
										renderItem={({ item }) => (
											<TouchableOpacity style={{ padding: 20 }}>
												<Text
													style={{
														opacity: 1,
														fontFamily: 'GothamRounded',
														fontSize: hp('1.9%'),
														fontWeight: 'normal',
														fontStyle: 'normal',
														lineHeight: 51,
														letterSpacing: 0.56,
														color: '#012e41'
													}}
												>
													{item}
												</Text>
											</TouchableOpacity>
										)}
										keyExtractor={(item, index) => index.toString()}
									/>
								</View> */}
							</View>
						</View>

						<View
							style={{
								flex: 0.1,
								justifyContent: 'center',
								alignItems: 'center'
							}}
						>
							<View
								style={{
									width: wp('20%'),
									opacity: 0.4,
									borderStyle: 'solid',
									borderWidth: 2,
									borderRadius: 2,
									borderColor: '#ffffff'
								}}
							/>
						</View>
					</View>
				</Modal>

				<View style={styles.sliderMainViewStyle}>
					<View style={styles.currentJobsTextViewStyle}>
						<Text style={styles.currentJobsTextStyle}>CURRENT JOBS</Text>
					</View>

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

export default HomeCopy;
