import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';
import { Item, Input, Label } from 'native-base';
import GoogleIcon from '../../assets/google.png';
import FacebookIcon from 'react-native-vector-icons/FontAwesome';
import styles from './Styles';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isFocusedEmail: false,
			isFocusedPassword: false
		};
	}
	handleFocus1 = () => {
		this.setState({ isFocusedEmail: true });
	};
	handleBlur1 = () => {
		this.setState({ isFocusedEmail: false });
	};
	handleFocus2 = () => {
		this.setState({ isFocusedPassword: true });
	};
	handleBlur2 = () => {
		this.setState({ isFocusedPassword: false });
	};
	render() {
		return (
			<View style={styles.mainViewStyle}>
				<View style={styles.innerViewStyle}>
					<KeyboardAvoidingView behavior="padding" style={styles.keyboardAvoidingViewStyle}>
						<View style={styles.keyboardAvoidingViewMainViewStyle}>
							<View style={styles.textInputMainViewStyle}>
								<Item
									floatingLabel
									style={[
										this.state.isFocusedEmail
											? { borderBottomWidth: 1, borderBottomColor: 'rgba(61,178,50,1)' }
											: { borderBottomWidth: 1, borderBottomColor: 'rgba(232,232,232,0.33)' }
									]}
								>
									<Label style={styles.lableStyle}>Email</Label>
									<Input
										style={styles.inputStyle}
										onBlur={this.handleBlur1}
										onFocus={this.handleFocus1}
										underlineColorAndroid="transparent"
									/>
								</Item>

								<Item
									floatingLabel
									style={[
										{ marginTop: '5%' },
										this.state.isFocusedPassword
											? { borderBottomWidth: 1, borderBottomColor: 'rgba(61,178,50,1)' }
											: { borderBottomWidth: 1, borderBottomColor: 'rgba(232,232,232,0.33)' }
									]}
								>
									<Label style={styles.lableStyle}>Password</Label>
									<Input
										style={styles.inputStyle}
										onBlur={this.handleBlur2}
										onFocus={this.handleFocus2}
										underlineColorAndroid="transparent"
										secureTextEntry={true}
									/>
								</Item>
							</View>

							<TouchableOpacity>
								<View style={styles.forgotPasswordViewStyle}>
									<Text style={styles.forgotPasswordTextStyle}>I forgot my password</Text>
								</View>
							</TouchableOpacity>
						</View>

						<View style={styles.buttonsMainViewStyle}>
							<TouchableOpacity style={styles.signinbuttonViewStyle}>
								<View>
									<Text style={styles.signinbuttonTextStyle}>SIGN IN</Text>
								</View>
							</TouchableOpacity>

							<View style={styles.signinWithViewStyle}>
								<Text style={styles.signinWithTextStyle}>sign in with</Text>
							</View>

							<TouchableOpacity style={styles.signinWithFacebookMainViewStyle}>
								<View>
									<View style={styles.signinWithFacebookInnerViewStyle}>
										<View style={styles.signinWithFacebookIconViewStyle}>
											<FacebookIcon name="facebook" size={23} color="#fff" />
										</View>
										<View>
											<Text style={styles.signinWithFacebookTextStyle}>
												Sign in with Facebook
											</Text>
										</View>
									</View>
								</View>
							</TouchableOpacity>

							<TouchableOpacity style={styles.signinWithGoogleMainViewStyle}>
								<View>
									<View style={styles.signinWithGoogleInnerViewStyle}>
										<View style={styles.signinWithGoogleIconViewStyle}>
											<Image source={GoogleIcon} style={{ width: 20, height: 20 }} />
										</View>
										<View>
											<Text style={styles.signinWithGoogleTextStyle}>Sign up with Google</Text>
										</View>
									</View>
								</View>
							</TouchableOpacity>
						</View>
					</KeyboardAvoidingView>
				</View>
			</View>
		);
	}
}

export default Login;
