import React, { Component } from 'react';
import { Text, View, ImageBackground, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import GreyBackground from '../../assets/grey_background.png';
import styles from './Styles';
import { Item, Input, Label } from 'native-base';
import ArrowLeft from 'react-native-vector-icons/AntDesign';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import ChevronIcon from 'react-native-vector-icons/Entypo';

class Recovery2 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isFocusedRecoverCode: false
		};
	}
	handleFocus = () => {
		this.setState({ isFocusedRecoverCode: true });
	};
	handleBlur = () => {
		this.setState({ isFocusedRecoverCode: false });
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
								<Text style={styles.cardHeaderTextStyle}>RECOVERY CODE</Text>
							</View>
							<View style={styles.cardLineStyle} />
							<View style={styles.cardDescriptionViewStyle}>
								<Text style={styles.cardDescriptionTextStyle}>
									Please enter the 5-Digit code we’ve sent to your email below.
								</Text>
							</View>
						</View>

						<View style={styles.btnInputMainViewStyle}>
							<KeyboardAvoidingView behavior="padding">
								<View>
									<Item
										floatingLabel
										style={[
											this.state.isFocusedRecoverCode
												? { borderBottomWidth: 1, borderBottomColor: '#012e41' }
												: { borderBottomWidth: 1, borderBottomColor: 'rgba(232,232,232,0.33)' }
										]}
									>
										<Label style={styles.lableStyle}>Recovery Code</Label>
										<Input
											style={styles.inputStyle}
											onBlur={this.handleBlur}
											onFocus={this.handleFocus}
											underlineColorAndroid="transparent"
										/>
									</Item>
								</View>
								<View style={{ marginTop: '10%' }} />
								<TouchableOpacity style={styles.submitButtonMainViewStyle}>
									<View style={styles.submitButtonInnerViewStyle}>
										<View>
											<Text style={styles.submitButtonTextStyle}>SUBMIT</Text>
										</View>
										<View>
											<ChevronIcon name="chevron-right" size={hp('3.3%')} color="#fff" />
										</View>
									</View>
								</TouchableOpacity>
								<View style={{ marginTop: '10%' }} />
								<TouchableOpacity style={styles.resendButtonMainViewStyle}>
									<View style={styles.resendButtonInnerViewStyle}>
										<View style={styles.resendButtontextViewStyle}>
											<Text style={styles.resendButtonTextStyle}>RESEND CODE</Text>
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

export default Recovery2;
