import React, { Component } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Text, View, Modal, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import styles from './Styles';

const listItems = [
	'Plumber',
	'Heating and Ductwork',
	'Drywaller',
	'Painter',
	'Finish Carpenter',
	'Plumbing',
	'Headting',
	'Air Conditioning'
];
class Selection extends Component {
	state = {
		modalVisible: true
	};

	setModalVisible(visible) {
		this.setState({ modalVisible: visible });
	}

	render() {
		return (
			<View style={styles.mainViewStyle}>
				<Modal
					animationType="slide"
					transparent={false}
					visible={this.state.modalVisible}
					onRequestClose={() => {
						Alert.alert('Modal has been closed.');
					}}
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
							<View style={{ flex: 1, justifyContent: 'center', marginLeft: '10%', marginRight: '5%' }}>
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
			</View>
		);
	}
}

export default Selection;
