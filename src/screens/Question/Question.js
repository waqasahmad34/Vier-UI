import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './Styles';
import ChevronIcon from 'react-native-vector-icons/Entypo';
import PlusIcon from 'react-native-vector-icons/AntDesign';
import MinusIcon from 'react-native-vector-icons/AntDesign';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class Question extends Component {
	constructor(props) {
		super(props);
		this.state = {
			counter: 0
		};
	}
	render() {
		return (
			<View style={styles.mainViewStyle}>
				<View style={styles.headerViewStyle}>
					<View style={styles.headerTitleAndDesViewStyle}>
						<View>
							<Text style={styles.headerTitleText}>Painting Project</Text>
						</View>
						<View style={styles.headerDesViewStyle}>
							<Text style={styles.headerDesText}>Please answer everything</Text>
							<Text style={styles.headerDesText}> to the best of your ability</Text>
						</View>
					</View>

					<View style={styles.questionViewStyle}>
						<Text style={styles.questionTextStyle}>HOW MANY WALLS?</Text>
						<View style={styles.questionCounterViewStyle}>
							<View style={styles.questionCounterInnerViewStyle}>
								<TouchableOpacity
									onPress={() =>
										this.setState((prevState) => ({
											counter: prevState.counter ? prevState.counter - 1 : 0
										}))}
									style={styles.minusButtonStyle}
								>
									<MinusIcon name="minus" size={hp('2.8%')} color="#aed55d" />
								</TouchableOpacity>
								<View style={styles.rightBorderLineStyle} />
								<View style={styles.counterViewStyle}>
									<Text style={styles.counterTextStyle}>{this.state.counter}</Text>
								</View>
								<View style={styles.leftBorderLineStyle} />
								<TouchableOpacity
									onPress={() => this.setState({ counter: this.state.counter + 1 })}
									style={styles.plusButtonStyle}
								>
									<PlusIcon name="plus" color="#aed55d" size={hp('2.8%')} />
								</TouchableOpacity>
							</View>
						</View>
					</View>

					<TouchableOpacity style={styles.continueButtonMainViewStyle}>
						<View style={styles.continueButtonInnerViewStyle}>
							<View>
								<Text style={styles.continueButtonTextStyle}>CONTINUE</Text>
							</View>
							<View>
								<ChevronIcon name="chevron-right" size={hp('3.3%')} color="#fff" />
							</View>
						</View>
					</TouchableOpacity>

					<View style={styles.lineViewStyle} />
				</View>
			</View>
		);
	}
}

export default Question;
