import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity, Image, Dimensions, KeyboardAvoidingView } from 'react-native';
import { Item, Input, Label } from 'native-base';
import ChevronIcon from 'react-native-vector-icons/Entypo';
import SignUpHouseImage from '../../assets/sign_up_house.png';
import SignUpContractorImage from '../../assets/sign_up_contractor.png';
import styles from './Styles';

const { width, height } = Dimensions.get('window');

class Signup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isFocusedEmail: false,
			isFocusedChoosePassword: false,
			isFocusedConfirmPassword: false,
			contractorBtn: false,
			homeOwnerBtn: true
		};

		console.log('Width ', width, ' --- ', 'Height ', height);
	}

	handleFocus1 = () => {
		this.setState({ isFocusedEmail: true });
	};
	handleBlur1 = () => {
		this.setState({ isFocusedEmail: false });
	};
	handleFocus2 = () => {
		this.setState({ isFocusedChoosePassword: true });
	};
	handleBlur2 = () => {
		this.setState({ isFocusedChoosePassword: false });
	};
	handleFocus3 = () => {
		this.setState({ isFocusedConfirmPassword: true });
	};
	handleBlur3 = () => {
		this.setState({ isFocusedConfirmPassword: false });
	};
	render() {
		return (
			<View style={styles.mainViewStyle}>
				<View style={styles.innerViewStyle}>
					<ScrollView showsVerticalScrollIndicator={false} style={styles.scrollViewStyle}>
						<KeyboardAvoidingView behavior="padding">
							<View style={styles.scrollViewMainViewStyle}>
								<View style={styles.sigingupViewStyle}>
									<Text style={styles.sigingupTextStyle}>I’m signing up as a…</Text>
								</View>
								<View style={styles.imagesViewStyle}>
									<TouchableOpacity
										onPress={() => this.setState({ homeOwnerBtn: true, contractorBtn: false })}
										style={[
											styles.homeOwnerBtnStyle,
											this.state.homeOwnerBtn
												? { backgroundColor: 'rgba(56,70,101,1)' }
												: { backgroundColor: '#fff' },
											{ borderColor: 'rgba(238,238,238,1)' },
											{ borderWidth: 1 }
										]}
									>
										<View>
											<Image source={SignUpHouseImage} style={styles.homeOwnerImageStyle} />
											<Text
												style={[
													this.state.homeOwnerBtn
														? { color: '#fff' }
														: { color: 'rgba(1,46,65,1)' },
													styles.homeOwnerImageTextStyle
												]}
											>
												HOMEOWNER
											</Text>
										</View>
									</TouchableOpacity>

									<TouchableOpacity
										onPress={() => this.setState({ contractorBtn: true, homeOwnerBtn: false })}
										style={[
											styles.contractorBtnStyle,
											this.state.contractorBtn
												? { backgroundColor: 'rgba(56,70,101,1)' }
												: { backgroundColor: '#fff' },
											{ borderColor: 'rgba(238,238,238,1)' },
											{ borderWidth: 1 }
										]}
									>
										<View>
											<Image source={SignUpContractorImage} style={styles.contractorImageStyle} />
											<Text
												style={[
													this.state.contractorBtn
														? { color: '#fff' }
														: { color: 'rgba(1,46,65,1)' },
													styles.contractorImageTextStyle
												]}
											>
												CONTRACTOR
											</Text>
										</View>
									</TouchableOpacity>
								</View>

								<View style={styles.textInputMainViewStyle}>
									<Item
										floatingLabel
										style={[
											this.state.isFocusedEmail
												? { borderBottomWidth: 1.5, borderBottomColor: 'rgba(1,46,65,1)' }
												: { borderBottomWidth: 1.5, borderBottomColor: 'rgba(232,232,232,0.7)' }
										]}
									>
										<Label style={styles.lableStyle}>Email</Label>
										<Input
											onBlur={this.handleBlur1}
											onFocus={this.handleFocus1}
											underlineColorAndroid="transparent"
											style={styles.inputStyle}
										/>
									</Item>

									<Item
										floatingLabel
										style={[
											{ marginTop: '5%' },
											this.state.isFocusedChoosePassword
												? { borderBottomWidth: 1.5, borderBottomColor: 'rgba(1,46,65,1)' }
												: { borderBottomWidth: 1.5, borderBottomColor: 'rgba(232,232,232,0.7)' }
										]}
									>
										<Label style={styles.lableStyle}>Choose Password</Label>
										<Input
											onBlur={this.handleBlur2}
											onFocus={this.handleFocus2}
											underlineColorAndroid="transparent"
											secureTextEntry={true}
											style={styles.inputStyle}
										/>
									</Item>

									<Item
										floatingLabel
										style={[
											{ marginTop: '5%' },
											this.state.isFocusedConfirmPassword
												? { borderBottomWidth: 1.5, borderBottomColor: 'rgba(1,46,65,1)' }
												: { borderBottomWidth: 1.5, borderBottomColor: 'rgba(232,232,232,0.7)' }
										]}
									>
										<Label style={styles.lableStyle}>Confirm Password</Label>
										<Input
											onBlur={this.handleBlur3}
											onFocus={this.handleFocus3}
											underlineColorAndroid="transparent"
											secureTextEntry={true}
											style={styles.inputStyle}
										/>
									</Item>
								</View>

								<TouchableOpacity style={styles.buttonMainViewStyle}>
									<View style={styles.buttonInnerViewStyle}>
										<View style={styles.textViewStyle}>
											<Text style={styles.buttonTextStyle}>CONTINUE</Text>
										</View>
										<View style={{ height: 5, width: 20, alignSelf: 'center' }}>
											<ChevronIcon name="chevron-right" size={20} color="#fff" />
										</View>
									</View>
								</TouchableOpacity>
							</View>
						</KeyboardAvoidingView>
					</ScrollView>
				</View>
			</View>
		);
	}
}

export default Signup;
