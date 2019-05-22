import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './Styles';
import { Thumbnail } from 'native-base';

class ContratorProposalAccept extends Component {
	render() {
		return (
			<View style={styles.mainViewStyle}>
				<View style={styles.projectProposalMainViewStyle}>
					<View style={styles.projectProposalTextViewStyle}>
						<Text style={styles.projectProposalTextStyle}>Project Proposal</Text>
					</View>
				</View>
				<View style={styles.cardMainViewStyle}>
					<View style={styles.cardHeadingDateMainViewStyle}>
						<View style={styles.cardHeadingDateInnerViewStyle}>
							<View style={styles.cardDateViewStyle}>
								<View style={styles.cardDateViewInnerStyle}>
									<Text style={styles.cardDateTextStyle1}>23</Text>
									<Text style={styles.cardDateTextStyle2}>JUNE</Text>
								</View>
							</View>
							<View style={styles.cardHeadingViewStyle}>
								<Text style={styles.cardHeadingTextStyle}>Full Bedroom Paint & Renovation</Text>
							</View>
						</View>
					</View>
					<View style={styles.cardImageStuffViewStyle}>
						<View style={styles.cardImageStuffInnerViewStyle}>
							<View style={styles.cardImageViewStyle}>
								<Thumbnail source={require('../../assets/profile.jpg')} />
							</View>
							<View style={styles.cardImageStuffTitleViewStyle}>
								<Text style={styles.cardImageStuffTitleTextStyle1}>John Doe</Text>
								<Text style={styles.cardImageStuffTitleTextStyle2}>HOMEOWNER</Text>
							</View>
							<View style={styles.cardImageStuffButtonViewStyle}>
								<TouchableOpacity style={styles.cardImageStuffButtonStyle}>
									<Text style={styles.cardImageStuffButtonTextStyle}>CONTRACT</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
					<View style={styles.cardDesMainViewStyle}>
						<View style={styles.cardDesTitleViewStyle}>
							<Text style={styles.cardDesTitleTextStyle}>Description</Text>
						</View>
						<View style={styles.cardDesViewStyle}>
							<Text style={styles.cardDesTextStyle}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer egestas lectus a nisi
								elementum, quis fermentum turpis placerat. Phasellus ultrices non nisl quis interdum.
								Proin vitae nibh at nisl faucibus convallis.{' '}
							</Text>
						</View>
					</View>
					<View style={styles.cardQAndAMainViewStyle}>
						<View style={styles.cardQAndATitleViewStyle}>
							<Text style={styles.cardQAndATitleTextStyle}>Questions & Answers</Text>
						</View>
						<View style={styles.cardQ1AndA1ViewStyle}>
							<Text style={styles.cardQAndATextStyle1}>How many walls?</Text>

							<Text style={styles.cardQAndATextStyle2}>5 Walls</Text>
						</View>
						<View style={styles.cardQ2AndA2ViewStyle}>
							<Text style={styles.cardQAndATextStyle1}>What type of paint surface?</Text>
							<Text style={styles.cardQAndATextStyle2}>Matte</Text>
						</View>
						<View style={styles.cardQ2AndA2ViewStyle}>
							<Text style={styles.cardQAndATextStyle1}>How many layers of paint?</Text>

							<Text style={styles.cardQAndATextStyle2}>Over 9000</Text>
						</View>
					</View>
				</View>

				<View style={styles.approveDeclineBtnMainViewStyle}>
					<View style={styles.approveDeclineBtnInnerViewStyle}>
						<TouchableOpacity style={styles.approveBtnStyle}>
							<Text style={styles.approveBtnTextStyle}>Approve</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.declineBtnStyle}>
							<Text style={styles.declineBtnTextStyle}>Decline</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		);
	}
}

export default ContratorProposalAccept;
