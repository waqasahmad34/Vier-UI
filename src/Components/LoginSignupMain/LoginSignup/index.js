import React, { Component } from 'react';
import LoginSignup from './LoginSignup';

class LoginSignupContainer extends Component {
	render() {
		return <LoginSignup navigation={this.props.navigation} />;
	}
}

export default LoginSignupContainer;
