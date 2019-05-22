import React, { Component } from 'react';
import { Text, View, TextInput, Animated, TouchableOpacity, AsyncStorage } from 'react-native';
import styles from './Styles';
import ListView from '../../ListMain/ListView';
import Icon from 'react-native-vector-icons/FontAwesome';

class HomeCopy extends Component {
	state = {
		animated: new Animated.Value(0)
	};

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

	logout() {
		const _this = this;
		AsyncStorage.removeItem('accessToken', (err) => {
			if (err) {
				console.log(err)
			} else {
				_this.props.navigation.navigate("LoginSignup");
			}
		});
	}

	render() {
		const { animated } = this.state;
		return (
			<View style={styles.mainViewStyle}>
				<View style={styles.headerViewStyle}>
					<View style={styles.imLookingFortextViewStyle}>
						<Text style={styles.imlookingForTextStyle}>I’m looking for…</Text>
					</View>
					<TouchableOpacity onPress={() => { this.logout() }}
						style={{ padding: 10, alignItems: 'center', position: 'absolute', right: 0, top: 5 }} >
						<Icon style={{}} name='sign-out' size={20} color='#fff' />
					</TouchableOpacity>
					<View style={styles.textInputViewStyle}>
						<TextInput
							underlineColorAndroid="transparent"
							style={styles.textInputStyle}
							placeholder="carpenter, technician"
							placeholderTextColor="#012e41"
						/>
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

				<View style={styles.sliderMainViewStyle}>
					<View style={styles.currentJobsTextViewStyle}>
						<Text style={styles.currentJobsTextStyle}>CURRENT JOBS</Text>
					</View>

					<ListView />
				</View>
			</View>
		);
	}
}

export default HomeCopy;
