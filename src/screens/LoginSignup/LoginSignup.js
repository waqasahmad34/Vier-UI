import React, { Component } from 'react';
import { Text, View, ImageBackground, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import BackgroundImage from '../../assets/Background2x.png';
import Login from '../Login';
import Signup from '../Signup';
import styles from './Styles';

class LoginSignup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loginTab: true,
			signUpTab: false
		};
	}
	render() {
		return (
			<ImageBackground source={BackgroundImage} style={styles.imageBackgroundStyle}>
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
				{this.state.loginTab ? <Login /> : null}
				{this.state.signUpTab ? <Signup /> : null}
			</ImageBackground>
		);
	}
}

export default LoginSignup;
