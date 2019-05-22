import React, { Component } from 'react';
import { Text, View, ImageBackground, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import GreyBackground from '../../assets/grey_background.png';
import styles from './Styles';
import { Item, Input, Label } from 'native-base';
import ArrowLeft from 'react-native-vector-icons/AntDesign';
import ChevronIcon from 'react-native-vector-icons/Entypo';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class Recovery3 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isFocusedChoosePassword: false,
			isFocusedConfirmPassword: false
		};
	}
	handleFocus1 = () => {
		this.setState({ isFocusedChoosePassword: true });
	};
	handleBlur1 = () => {
		this.setState({ isFocusedChoosePassword: false });
	};
	handleFocus2 = () => {
		this.setState({ isFocusedConfirmPassword: true });
	};
	handleBlur2 = () => {
		this.setState({ isFocusedConfirmPassword: false });
	};
	render() {
		return (
			<ImageBackground source={GreyBackground} style={styles.imageBackgroundStyle}>
				<View style={styles.innerViewStyle}>
					<View style={styles.textAndArrowMainViewStyle}>
						<TouchableOpacity>
							<View style={styles.textAndArrowInnerViewStyle}>
								<ArrowLeft name="arrowleft" size={32} color="rgba(61,178,50,1)" />
								<Text style={styles.textStyle}>BACK</Text>
							</View>
						</TouchableOpacity>
					</View>

					<View style={styles.cardMainViewStyle}>
						<View style={styles.cardInnerViewStyle}>
							<View style={styles.cardHeaderViewStyle}>
								<Text style={styles.cardHeaderTextStyle}>CHANGE PASSWORD</Text>
							</View>
							<View style={styles.cardLineStyle} />
							<View style={styles.cardDescriptionViewStyle}>
								<Text style={styles.cardDescriptionTextStyle}>
									Please choose a new password and confirm. You can then log in to your vier account.
								</Text>
							</View>
						</View>

						<View style={styles.btnInputMainViewStyle}>
							<KeyboardAvoidingView behavior="padding">
								<View>
									<Item
										floatingLabel
										style={[
											this.state.isFocusedChoosePassword
												? { borderBottomWidth: 1, borderBottomColor: 'rgba(1,46,65,1)' }
												: { borderBottomWidth: 1, borderBottomColor: 'rgba(232,232,232,0.33)' }
										]}
									>
										<Label style={styles.lableStyle}>Choose Password</Label>
										<Input
											style={styles.inputStyle}
											onBlur={this.handleBlur1}
											onFocus={this.handleFocus1}
											underlineColorAndroid="transparent"
											secureTextEntry={true}
										/>
									</Item>

									<Item
										floatingLabel
										style={[
											{ marginTop: '5%' },
											this.state.isFocusedConfirmPassword
												? { borderBottomWidth: 1, borderBottomColor: 'rgba(1,46,65,1)' }
												: { borderBottomWidth: 1, borderBottomColor: 'rgba(232,232,232,0.33)' }
										]}
									>
										<Label style={styles.lableStyle}>Confirm Password</Label>
										<Input
											style={styles.inputStyle}
											onBlur={this.handleBlur2}
											onFocus={this.handleFocus2}
											underlineColorAndroid="transparent"
											secureTextEntry={true}
										/>
									</Item>
								</View>
								<View style={{ marginTop: '10%' }} />
								<TouchableOpacity style={styles.goToLoginButtonMainViewStyle}>
									<View style={styles.goToLoginButtonInnerViewStyle}>
										<View>
											<Text style={styles.goToLoginButtonTextStyle}>GO TO LOG IN</Text>
										</View>
										<View>
											<ChevronIcon name="chevron-right" size={hp('3.3%')} color="#fff" />
										</View>
									</View>
								</TouchableOpacity>
							</KeyboardAvoidingView>
						</View>
					</View>
				</View>
			</ImageBackground>
		);
	}
}

export default Recovery3;
