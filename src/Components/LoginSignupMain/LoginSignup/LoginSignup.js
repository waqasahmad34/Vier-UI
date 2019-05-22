import React, { Component } from 'react';
import { Text, View, ImageBackground, TouchableOpacity, KeyboardAvoidingView, ActivityIndicator } from 'react-native';
import BackgroundImage from '../../../assets/Background2x.png';
import Login from '../LoginMain/Login/Login';
import Signup from '../SignupMain/Signup/Signup';
import styles from './Styles';

class LoginSignup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loginTab: true,
			signUpTab: false,
			spinner: false
		};
		this.setSpinnerState = this.setSpinnerState.bind(this)
	}

	setSpinnerState() {
		this.setState({
			spinner: !this.state.spinner
		})
	}
	render() {
		return (
			<ImageBackground source={BackgroundImage} style={styles.imageBackgroundStyle}>
				{
					this.state.spinner
						?
						null
						:
						<View>
							<View style={styles.innerViewStyle}>
								<TouchableOpacity onPress={() => this.setState({ loginTab: true, signUpTab: false })}>
									<View style={styles.loginViewStyle}>
										<Text style={styles.loginTextStyle}>LOG IN</Text>
										<View
											style={[
												styles.borderBottomViewStyle,
												this.state.loginTab
													? { borderBottomColor: 'rgba(255,255,255,1)', borderBottomWidth: 3 }
													: null
											]}
										/>
									</View>
								</TouchableOpacity>
								<TouchableOpacity onPress={() => this.setState({ signUpTab: true, loginTab: false })}>
									<View style={styles.sigingupViewStyle}>
										<Text style={styles.signupTextStyle}>SIGN UP</Text>
										<View
											style={[
												styles.borderBottomViewStyle,
												this.state.signUpTab
													? { borderBottomColor: 'rgba(255,255,255,1)', borderBottomWidth: 3 }
													: null
											]}
										/>
									</View>
								</TouchableOpacity>
							</View>
						</View>
				}
				{/* {
					this.state.spinner
						?
						<View style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
							<ActivityIndicator />
						</View>
						: */}
				<View style={{ flex: 1 }}>
					{this.state.loginTab ? <Login setSpinner={this.setSpinnerState} navigation={this.props.navigation} /> : null}
					{this.state.signUpTab ? <Signup setSpinner={this.setSpinnerState} navigation={this.props.navigation} /> : null}
				</View>
				{/* } */}
			</ImageBackground>
		);
	}
}

export default LoginSignup;
