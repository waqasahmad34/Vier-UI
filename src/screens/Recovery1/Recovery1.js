import React, { Component } from 'react';
import { Text, View, ImageBackground, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import GreyBackground from '../../assets/grey_background.png';
import styles from './Styles';
import { Item, Input, Label } from 'native-base';
import ArrowLeft from 'react-native-vector-icons/AntDesign';
import ChevronIcon from 'react-native-vector-icons/Entypo';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class Recovery1 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isFocusedEmail: false
		};
	}
	handleFocus = () => {
		this.setState({ isFocusedEmail: true });
	};
	handleBlur = () => {
		this.setState({ isFocusedEmail: false });
	};
	render() {
		return (
			<ImageBackground source={GreyBackground} style={styles.imageBackgroundStyle}>
				<View style={styles.innerViewStyle}>
					<View style={styles.textAndArrowMainViewStyle}>
						<TouchableOpacity>
							<View style={styles.textAndArrowInnerViewStyle}>
								<ArrowLeft name="arrowleft" size={32} color="rgba(61,178,50,1)" />
								<Text style={styles.textStyle}>LOGIN</Text>
							</View>
						</TouchableOpacity>
					</View>

					<View style={styles.cardMainViewStyle}>
						<View style={styles.cardInnerViewStyle}>
							<View style={styles.cardHeaderViewStyle}>
								<Text style={styles.cardHeaderTextStyle}>ACCOUNT RECOVERY</Text>
							</View>
							<View style={styles.cardLineStyle} />
							<View style={styles.cardDescriptionViewStyle}>
								<Text style={styles.cardDescriptionTextStyle}>
									Please provide your email address & we will send you a recovery link.
								</Text>
							</View>
						</View>

						<View style={styles.btnInputMainViewStyle}>
							<KeyboardAvoidingView behavior="padding">
								<View>
									<Item
										floatingLabel
										style={[
											this.state.isFocusedEmail
												? { borderBottomWidth: 1, borderBottomColor: '#012e41' }
												: { borderBottomWidth: 1, borderBottomColor: 'rgba(232,232,232,0.33)' }
										]}
									>
										<Label style={styles.lableStyle}>Email</Label>
										<Input
											style={styles.inputStyle}
											onBlur={this.handleBlur}
											onFocus={this.handleFocus}
											underlineColorAndroid="transparent"
										/>
									</Item>
								</View>
								<View style={{ marginTop: '10%' }} />
								<TouchableOpacity style={styles.buttonMainViewStyle}>
									<View style={styles.buttonInnerViewStyle}>
										<View>
											<Text style={styles.buttonTextStyle}>SEND LINK</Text>
										</View>
										<View>
											<ChevronIcon
												name="chevron-right"
												style={{ alignSelf: 'center' }}
												size={hp('3.3%')}
												color="#fff"
											/>
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

export default Recovery1;
