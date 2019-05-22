import React, { Component } from 'react';
import { Text, View, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import styles from './Styles';
import ThreeDotsIcon from 'react-native-vector-icons/Entypo';
import { Thumbnail } from 'native-base';

class MessageSingle extends Component {
	render() {
		return (
			<View style={styles.mainViewStyle}>
				<View style={{ flex: 0.18 }}>
					<View
						style={{
							flex: 1,
							flexDirection: 'row',
							justifyContent: 'center',
							alignItems: 'center',
							marginHorizontal: '5%'
						}}
					>
						<View style={{ flex: 0.2 }}>
							<Thumbnail small source={require('../../assets/profile.jpg')} />
						</View>
						<View style={{ flex: 1 }}>
							<Text
								style={{
									fontFamily: 'GothamRounded',
									fontSize: hp('2%'),
									fontWeight: '500',
									fontStyle: 'normal',
									letterSpacing: 0.31,
									color: '#747474'
								}}
							>
								{' '}
								Joe’s Painting{' '}
							</Text>
						</View>
						<View style={{ flex: 0.2 }}>
							<TouchableOpacity>
								<ThreeDotsIcon name="dots-three-horizontal" size={hp('3%')} color="#012e41" />
							</TouchableOpacity>
						</View>
					</View>
				</View>
				<View
					style={{
						flex: 0.14,
						borderTopLeftRadius: 22,
						borderTopRightRadius: 22,
						backgroundColor: '#384665',
						justifyContent: 'center',
						position: 'relative',
						top: 20
					}}
				>
					<View style={{ justifyContent: 'center', alignItems: 'center' }}>
						<Text
							style={{
								fontFamily: 'GothamRounded',
								fontSize: hp('1.8%'),
								fontWeight: '500',
								fontStyle: 'normal',
								letterSpacing: 0.26,
								color: '#ffffff',
								marginBottom: '5%'
							}}
						>
							{' '}
							CONTRACT & PAYMENT{' '}
						</Text>
					</View>
				</View>

				<View
					style={{
						flex: 1,
						borderTopLeftRadius: 22,
						borderTopRightRadius: 22,
						backgroundColor: '#f7f7f7'
					}}
				>
					<View style={{ flex: 0.05, justifyContent: 'center', alignItems: 'center' }}>
						<View
							style={{
								justifyContent: 'center',
								alignItems: 'center',
								width: wp('20%'),
								borderRadius: 10,
								opacity: 0.25,
								borderStyle: 'solid',
								borderWidth: 2,
								borderColor: '#979797'
							}}
						/>
					</View>
					<View style={{ flex: 1 }}>
						<ScrollView showsVerticalScrollIndicator={false}>
							<View style={{ marginHorizontal: '5%', marginTop: '1%' }}>
								<View
									style={{
										alignSelf: 'flex-start',
										flexWrap: 'wrap',
										backgroundColor: '#fff',
										borderTopRightRadius: 5,
										borderBottomRightRadius: 5,
										borderBottomLeftRadius: 5,
										justifyContent: 'center',
										alignItems: 'center'
									}}
								>
									<Text
										style={{
											marginHorizontal: '5%',
											marginVertical: '2%',
											fontFamily: 'GothamRounded',
											fontSize: hp('1.5%'),
											fontWeight: 'normal',
											fontStyle: 'normal',
											lineHeight: 20,
											letterSpacing: -0.35,
											color: '#313131'
										}}
									>
										Hi there, I’ve taken a look at your project, and I’ve also given the cost
										analysis.
									</Text>

									<View
										style={{
											position: 'absolute',
											left: -8,
											top: 0.1,
											width: 0,
											height: 0,
											borderTopColor: 'transparent',
											borderTopWidth: 0.1,
											borderRightWidth: 8,
											borderRightColor: '#fff',
											borderBottomWidth: 8,
											borderBottomColor: 'transparent'
										}}
									/>
								</View>

								<View style={{ marginTop: '1%', marginLeft: '3%', alignSelf: 'flex-start' }}>
									<Text
										style={{
											fontFamily: 'GothamRounded',
											fontSize: hp('1.2%'),
											fontWeight: 'normal',
											fontStyle: 'normal',
											letterSpacing: -0.26,
											color: '#c8c8c8'
										}}
									>
										9:33 PM
									</Text>
								</View>
							</View>

							<View style={{ marginHorizontal: '5%' }}>
								<View
									style={{
										alignSelf: 'flex-end',
										flexWrap: 'wrap',
										backgroundColor: '#3db232',
										borderTopLeftRadius: 5,
										borderTopRightRadius: 5,
										borderBottomLeftRadius: 5,
										justifyContent: 'center',
										alignItems: 'center'
									}}
								>
									<Text
										style={{
											marginHorizontal: '5%',
											marginVertical: '2%',
											fontFamily: 'GothamRounded',
											fontSize: hp('1.5%'),
											fontWeight: 'normal',
											fontStyle: 'normal',
											lineHeight: 20,
											letterSpacing: -0.35,
											color: '#ffffff'
										}}
									>
										Great, thank you.
									</Text>

									<View
										style={{
											position: 'absolute',
											right: -8,
											bottom: 0.1,
											width: 0,
											height: 0,
											borderTopColor: 'transparent',
											borderTopWidth: 0.01,
											borderRightWidth: 8,
											borderRightColor: '#3db232',
											borderBottomWidth: 8,
											borderBottomColor: 'transparent',
											transform: [ { rotate: '-180deg' } ]
										}}
									/>
								</View>

								<View
									style={{
										marginTop: '1%',
										alignSelf: 'flex-end',
										marginRight: '2%'
									}}
								>
									<Text
										style={{
											fontFamily: 'GothamRounded',
											fontSize: hp('1.2%'),
											fontWeight: 'normal',
											fontStyle: 'normal',
											letterSpacing: -0.26,
											color: '#c8c8c8'
										}}
									>
										9:33 PM
									</Text>
								</View>
							</View>
							<View style={{ marginHorizontal: '5%', marginTop: '1%' }}>
								<View
									style={{
										alignSelf: 'flex-start',
										flexWrap: 'wrap',
										backgroundColor: '#fff',
										borderTopRightRadius: 5,
										borderBottomRightRadius: 5,
										borderBottomLeftRadius: 5,
										justifyContent: 'center',
										alignItems: 'center'
									}}
								>
									<Text
										style={{
											marginHorizontal: '5%',
											marginVertical: '2%',
											fontFamily: 'GothamRounded',
											fontSize: hp('1.5%'),
											fontWeight: 'normal',
											fontStyle: 'normal',
											lineHeight: 20,
											letterSpacing: -0.35,
											color: '#313131'
										}}
									>
										You’re welcome, please give me your availability.
									</Text>
									<View
										style={{
											position: 'absolute',
											left: -8,
											top: 0.1,
											width: 0,
											height: 0,
											borderTopColor: 'transparent',
											borderTopWidth: 0.1,
											borderRightWidth: 8,
											borderRightColor: '#fff',
											borderBottomWidth: 8,
											borderBottomColor: 'transparent'
										}}
									/>
								</View>

								<View style={{ marginTop: '1%', marginLeft: '3%', alignSelf: 'flex-start' }}>
									<Text
										style={{
											fontFamily: 'GothamRounded',
											fontSize: hp('1.2%'),
											fontWeight: 'normal',
											fontStyle: 'normal',
											letterSpacing: -0.26,
											color: '#c8c8c8'
										}}
									>
										9:33 PM
									</Text>
								</View>
							</View>

							<View style={{ marginHorizontal: '5%' }}>
								<View
									style={{
										alignSelf: 'flex-end',
										flexWrap: 'wrap',
										backgroundColor: '#3db232',
										borderTopLeftRadius: 5,
										borderTopRightRadius: 5,

										borderBottomLeftRadius: 5,
										justifyContent: 'center',
										alignItems: 'center'
									}}
								>
									<Text
										style={{
											marginHorizontal: '5%',
											marginVertical: '2%',
											fontFamily: 'GothamRounded',
											fontSize: hp('1.5%'),
											fontWeight: 'normal',
											fontStyle: 'normal',
											lineHeight: 20,
											letterSpacing: -0.35,
											color: '#ffffff'
										}}
									>
										Great, thank you.
									</Text>

									<View
										style={{
											position: 'absolute',
											right: -8,
											bottom: 0.1,
											width: 0,
											height: 0,
											borderTopColor: 'transparent',
											borderTopWidth: 0.01,
											borderRightWidth: 8,
											borderRightColor: '#3db232',
											borderBottomWidth: 8,
											borderBottomColor: 'transparent',
											transform: [ { rotate: '-180deg' } ]
										}}
									/>
								</View>

								<View
									style={{
										marginTop: '1%',
										alignSelf: 'flex-end',
										marginRight: '2%'
									}}
								>
									<Text
										style={{
											fontFamily: 'GothamRounded',
											fontSize: hp('1.2%'),
											fontWeight: 'normal',
											fontStyle: 'normal',
											letterSpacing: -0.26,
											color: '#c8c8c8'
										}}
									>
										9:33 PM
									</Text>
								</View>
							</View>
							<View style={{ marginHorizontal: '5%', marginTop: '1%' }}>
								<View
									style={{
										alignSelf: 'flex-start',
										flexWrap: 'wrap',
										backgroundColor: '#fff',
										borderTopRightRadius: 5,
										borderBottomRightRadius: 5,
										borderBottomLeftRadius: 5,
										justifyContent: 'center',
										alignItems: 'center'
									}}
								>
									<Text
										style={{
											marginHorizontal: '5%',
											marginVertical: '2%',
											fontFamily: 'GothamRounded',
											fontSize: hp('1.5%'),
											fontWeight: 'normal',
											fontStyle: 'normal',
											lineHeight: 20,
											letterSpacing: -0.35,
											color: '#313131'
										}}
									>
										You’re welcome, please give me your availability.
									</Text>
									<View
										style={{
											position: 'absolute',
											left: -8,
											top: 0.1,
											width: 0,
											height: 0,
											borderTopColor: 'transparent',
											borderTopWidth: 0.1,
											borderRightWidth: 8,
											borderRightColor: '#fff',
											borderBottomWidth: 8,
											borderBottomColor: 'transparent'
										}}
									/>
								</View>

								<View style={{ marginTop: '1%', marginLeft: '3%', alignSelf: 'flex-start' }}>
									<Text
										style={{
											fontFamily: 'GothamRounded',
											fontSize: hp('1.2%'),
											fontWeight: 'normal',
											fontStyle: 'normal',
											letterSpacing: -0.26,
											color: '#c8c8c8'
										}}
									>
										9:33 PM
									</Text>
								</View>
							</View>

							<View style={{ marginHorizontal: '5%' }}>
								<View
									style={{
										alignSelf: 'flex-end',
										flexWrap: 'wrap',
										backgroundColor: '#3db232',
										borderTopLeftRadius: 5,
										borderTopRightRadius: 5,

										borderBottomLeftRadius: 5,
										justifyContent: 'center',
										alignItems: 'center'
									}}
								>
									<Text
										style={{
											marginHorizontal: '5%',
											marginVertical: '2%',
											fontFamily: 'GothamRounded',
											fontSize: hp('1.5%'),
											fontWeight: 'normal',
											fontStyle: 'normal',
											lineHeight: 20,
											letterSpacing: -0.35,
											color: '#ffffff'
										}}
									>
										Great, thank you.
									</Text>

									<View
										style={{
											position: 'absolute',
											right: -8,
											bottom: 0.1,
											width: 0,
											height: 0,
											borderTopColor: 'transparent',
											borderTopWidth: 0.01,
											borderRightWidth: 8,
											borderRightColor: '#3db232',
											borderBottomWidth: 8,
											borderBottomColor: 'transparent',
											transform: [ { rotate: '-180deg' } ]
										}}
									/>
								</View>

								<View
									style={{
										marginTop: '1%',
										alignSelf: 'flex-end',
										marginRight: '2%'
									}}
								>
									<Text
										style={{
											fontFamily: 'GothamRounded',
											fontSize: hp('1.2%'),
											fontWeight: 'normal',
											fontStyle: 'normal',
											letterSpacing: -0.26,
											color: '#c8c8c8'
										}}
									>
										9:33 PM
									</Text>
								</View>
							</View>
							<View style={{ marginHorizontal: '5%', marginTop: '1%' }}>
								<View
									style={{
										alignSelf: 'flex-start',
										flexWrap: 'wrap',
										backgroundColor: '#fff',
										borderTopRightRadius: 5,
										borderBottomRightRadius: 5,
										borderBottomLeftRadius: 5,
										justifyContent: 'center',
										alignItems: 'center'
									}}
								>
									<Text
										style={{
											marginHorizontal: '5%',
											marginVertical: '2%',
											fontFamily: 'GothamRounded',
											fontSize: hp('1.5%'),
											fontWeight: 'normal',
											fontStyle: 'normal',
											lineHeight: 20,
											letterSpacing: -0.35,
											color: '#313131'
										}}
									>
										You’re welcome, please give me your availability.
									</Text>
									<View
										style={{
											position: 'absolute',
											left: -8,
											top: 0.1,
											width: 0,
											height: 0,
											borderTopColor: 'transparent',
											borderTopWidth: 0.1,
											borderRightWidth: 8,
											borderRightColor: '#fff',
											borderBottomWidth: 8,
											borderBottomColor: 'transparent'
										}}
									/>
								</View>

								<View style={{ marginTop: '1%', marginLeft: '3%', alignSelf: 'flex-start' }}>
									<Text
										style={{
											fontFamily: 'GothamRounded',
											fontSize: hp('1.2%'),
											fontWeight: 'normal',
											fontStyle: 'normal',
											letterSpacing: -0.26,
											color: '#c8c8c8'
										}}
									>
										9:33 PM
									</Text>
								</View>
							</View>

							<View style={{ marginHorizontal: '5%' }}>
								<View
									style={{
										alignSelf: 'flex-end',
										flexWrap: 'wrap',
										backgroundColor: '#3db232',
										borderTopLeftRadius: 5,
										borderTopRightRadius: 5,

										borderBottomLeftRadius: 5,
										justifyContent: 'center',
										alignItems: 'center'
									}}
								>
									<Text
										style={{
											marginHorizontal: '5%',
											marginVertical: '2%',
											fontFamily: 'GothamRounded',
											fontSize: hp('1.5%'),
											fontWeight: 'normal',
											fontStyle: 'normal',
											lineHeight: 20,
											letterSpacing: -0.35,
											color: '#ffffff'
										}}
									>
										Great, thank you.
									</Text>

									<View
										style={{
											position: 'absolute',
											right: -8,
											bottom: 0.1,
											width: 0,
											height: 0,
											borderTopColor: 'transparent',
											borderTopWidth: 0.01,
											borderRightWidth: 8,
											borderRightColor: '#3db232',
											borderBottomWidth: 8,
											borderBottomColor: 'transparent',
											transform: [ { rotate: '-180deg' } ]
										}}
									/>
								</View>

								<View
									style={{
										marginTop: '1%',
										alignSelf: 'flex-end',
										marginRight: '2%'
									}}
								>
									<Text
										style={{
											fontFamily: 'GothamRounded',
											fontSize: hp('1.2%'),
											fontWeight: 'normal',
											fontStyle: 'normal',
											letterSpacing: -0.26,
											color: '#c8c8c8'
										}}
									>
										9:33 PM
									</Text>
								</View>
							</View>
							<View style={{ marginHorizontal: '5%', marginTop: '1%' }}>
								<View
									style={{
										alignSelf: 'flex-start',
										flexWrap: 'wrap',
										backgroundColor: '#fff',
										borderTopRightRadius: 5,
										borderBottomRightRadius: 5,
										borderBottomLeftRadius: 5,
										justifyContent: 'center',
										alignItems: 'center'
									}}
								>
									<Text
										style={{
											marginHorizontal: '5%',
											marginVertical: '2%',
											fontFamily: 'GothamRounded',
											fontSize: hp('1.5%'),
											fontWeight: 'normal',
											fontStyle: 'normal',
											lineHeight: 20,
											letterSpacing: -0.35,
											color: '#313131'
										}}
									>
										You’re welcome, please give me your availability.
									</Text>
									<View
										style={{
											position: 'absolute',
											left: -8,
											top: 0.1,
											width: 0,
											height: 0,
											borderTopColor: 'transparent',
											borderTopWidth: 0.1,
											borderRightWidth: 8,
											borderRightColor: '#fff',
											borderBottomWidth: 8,
											borderBottomColor: 'transparent'
										}}
									/>
								</View>

								<View style={{ marginTop: '1%', marginLeft: '3%', alignSelf: 'flex-start' }}>
									<Text
										style={{
											fontFamily: 'GothamRounded',
											fontSize: hp('1.2%'),
											fontWeight: 'normal',
											fontStyle: 'normal',
											letterSpacing: -0.26,
											color: '#c8c8c8'
										}}
									>
										9:33 PM
									</Text>
								</View>
							</View>

							<View style={{ marginHorizontal: '5%' }}>
								<View
									style={{
										alignSelf: 'flex-end',
										flexWrap: 'wrap',
										backgroundColor: '#3db232',
										borderTopLeftRadius: 5,
										borderTopRightRadius: 5,

										borderBottomLeftRadius: 5,
										justifyContent: 'center',
										alignItems: 'center'
									}}
								>
									<Text
										style={{
											marginHorizontal: '5%',
											marginVertical: '2%',
											fontFamily: 'GothamRounded',
											fontSize: hp('1.5%'),
											fontWeight: 'normal',
											fontStyle: 'normal',
											lineHeight: 20,
											letterSpacing: -0.35,
											color: '#ffffff'
										}}
									>
										Great, thank you.
									</Text>

									<View
										style={{
											position: 'absolute',
											right: -8,
											bottom: 0.1,
											width: 0,
											height: 0,
											borderTopColor: 'transparent',
											borderTopWidth: 0.01,
											borderRightWidth: 8,
											borderRightColor: '#3db232',
											borderBottomWidth: 8,
											borderBottomColor: 'transparent',
											transform: [ { rotate: '-180deg' } ]
										}}
									/>
								</View>

								<View
									style={{
										marginTop: '1%',
										alignSelf: 'flex-end',
										marginRight: '2%'
									}}
								>
									<Text
										style={{
											fontFamily: 'GothamRounded',
											fontSize: hp('1.2%'),
											fontWeight: 'normal',
											fontStyle: 'normal',
											letterSpacing: -0.26,
											color: '#c8c8c8'
										}}
									>
										9:33 PM
									</Text>
								</View>
							</View>
							<View style={{ marginHorizontal: '5%', marginTop: '1%' }}>
								<View
									style={{
										alignSelf: 'flex-start',
										flexWrap: 'wrap',
										backgroundColor: '#fff',
										borderTopRightRadius: 5,
										borderBottomRightRadius: 5,
										borderBottomLeftRadius: 5,
										justifyContent: 'center',
										alignItems: 'center'
									}}
								>
									<Text
										style={{
											marginHorizontal: '5%',
											marginVertical: '2%',
											fontFamily: 'GothamRounded',
											fontSize: hp('1.5%'),
											fontWeight: 'normal',
											fontStyle: 'normal',
											lineHeight: 20,
											letterSpacing: -0.35,
											color: '#313131'
										}}
									>
										You’re welcome, please give me your availability.
									</Text>
									<View
										style={{
											position: 'absolute',
											left: -8,
											top: 0.1,
											width: 0,
											height: 0,
											borderTopColor: 'transparent',
											borderTopWidth: 0.1,
											borderRightWidth: 8,
											borderRightColor: '#fff',
											borderBottomWidth: 8,
											borderBottomColor: 'transparent'
										}}
									/>
								</View>

								<View style={{ marginTop: '1%', marginLeft: '3%', alignSelf: 'flex-start' }}>
									<Text
										style={{
											fontFamily: 'GothamRounded',
											fontSize: hp('1.2%'),
											fontWeight: 'normal',
											fontStyle: 'normal',
											letterSpacing: -0.26,
											color: '#c8c8c8'
										}}
									>
										9:33 PM
									</Text>
								</View>
							</View>
						</ScrollView>
					</View>

					<View style={{ flex: 0.12, backgroundColor: '#ffffff' }}>
						<View style={{ flex: 1, flexDirection: 'row' }}>
							<View style={{ flex: 1 }}>
								<TextInput
									style={{ padding: '3%' }}
									placeholder="Your message…"
									placeholderTextColor="#c0c0c0"
									underlineColorAndroid="transparent"
									multiline={true}
								/>
							</View>

							<TouchableOpacity style={{ flex: 0.15, justifyContent: 'center', alignItems: 'center' }}>
								<Text
									style={{
										fontFamily: 'GothamRounded',
										fontSize: hp('2%'),
										fontWeight: '500',
										fontStyle: 'normal',
										letterSpacing: 0.2,
										color: '#4bc149'
									}}
								>
									Send
								</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</View>
		);
	}
}

export default MessageSingle;
