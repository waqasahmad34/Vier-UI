import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, KeyboardAvoidingView, Alert, ActivityIndicator, Dimensions } from 'react-native';
import { Item, Input, Label } from 'native-base';
import GoogleIcon from '../../../../assets/google.png';
import FacebookIcon from 'react-native-vector-icons/FontAwesome';
import styles from './Styles';
import { ActionCreators } from '../../../../Actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

var height = Dimensions.get('window').height;

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isFocusedEmail: false,
			isFocusedPassword: false,
			isVisible: false,
			email: '',
			password: '',
		};
		this.login = this.login.bind(this)
	}

	componentDidMount() {
		console.log(this.props)
	}

	signinAlert(message) {
		Alert.alert(
			'Signin',
			message,
			[
				{ text: 'OK', onPress: () => { } },
			],
			{ cancelable: false }
		)
	}

	login() {
		const _this = this;
		if (_this.state.email != '' && _this.state.password != '') {
			_this.props.setSpinner();
			_this.setState({
				isVisible: true
			}, () => {

				const DataObjLogin = {
					email: _this.state.email,
					password: _this.state.password
				}
				_this.props.login(DataObjLogin).then((status) => {
					_this.props.setSpinner();
					if (status.status) {
						_this.setState({
							isVisible: false
						}, () => {
							_this.props.navigation.navigate("HomeCopy");
						})
					} else {
						_this.setState({
							isVisible: false
						}, () => {
							_this.signinAlert(status.error)
						})
					}
				})
			})
		} else {
			if (_this.state.email == '') {
				_this.signinAlert('Enter Email');
			} else if (_this.state.password == '') {
				_this.signinAlert('Enter Password');
			}
		}
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
				{
					this.state.isVisible
						?
						<View style={{ height: height,justifyContent: 'center', flex: 1, alignItems: 'center', position:'absolute',zIndex:1000, top:0,right:0,left:0,bottom:0,backgroundColor:'#fff' }}>
							<ActivityIndicator />
						</View>
						:
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
												onChangeText={(email) => this.setState({ email })} value={this.state.email}
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
												onChangeText={(password) => this.setState({ password })} value={this.state.password}
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
									<TouchableOpacity style={styles.signinbuttonViewStyle} onPress={() => { this.login() }} >
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
				}
			</View>
		);
	}
}

function mapStateToProps(state) {
	return {

	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);