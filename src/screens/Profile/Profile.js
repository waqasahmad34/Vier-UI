import React, { Component } from 'react';
import { Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native';
import styles from './Styles';
import ProfileImageBackground from '../../assets/profileBackgroudImage.png';
import ArrowBack from 'react-native-vector-icons/Ionicons';
import SettingIcon from 'react-native-vector-icons/AntDesign';
import { Thumbnail } from 'native-base';
import ProfileImage from '../../assets/profile.jpg';
import EditProfile from '../../assets/edit.png';
import ChevronIcon from 'react-native-vector-icons/MaterialIcons';
import PreviousProject from '../../assets/previous.png';
import PaymentMethod from '../../assets/payment.png';
import Security from '../../assets/security.png';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class Profile extends Component {
	render() {
		return (
			<ImageBackground source={ProfileImageBackground} style={styles.imagebackgroundStyle}>
				<View style={styles.profileMainViewStyle}>
					<View style={styles.profileArrowViewStyle}>
						<TouchableOpacity style={styles.touchableBtnStyle}>
							<ArrowBack name="md-arrow-back" color="white" size={hp('4.3%')} />
							<Text style={styles.profileTextStyle}>Profile</Text>
						</TouchableOpacity>

						<View style={styles.settingIconViewStyle}>
							<SettingIcon name="setting" color="rgba(1,46,65,0.87)" size={hp('4.3%')} />
						</View>
					</View>
				</View>
				<View style={styles.cardMainViewStyle}>
					<View style={styles.cardViewStyle}>
						<View style={styles.imageViewStyle}>
							<Thumbnail style={styles.thumbnailStyle} large source={ProfileImage} />
						</View>
						<View style={styles.nameAndDesTextmainViewStyle}>
							<View style={styles.nameAndDesTextInnerViewStyle}>
								<Text style={styles.nameTextStyle}>Mike Dodge</Text>
								<Text style={styles.desTextStyle}>Hi, I’m a proud Home Owner.</Text>
							</View>
							<View style={styles.lineViewStyle} />
						</View>

						<View style={{}}>
							<View style={styles.settingContentViewStyle}>
								<Image source={EditProfile} style={styles.editProfileImageStyle} />
								<TouchableOpacity style={styles.settingContentBtnStyle}>
									<View style={{}}>
										<Text style={styles.settingContentBtnTextStyle}>Edit Profile</Text>
									</View>
									<ChevronIcon name="chevron-right" color="rgba(0,0,0,0.23)" size={hp('3%')} />
								</TouchableOpacity>
							</View>

							<View style={styles.settingContentViewStyle}>
								<Image source={PreviousProject} style={styles.previousProjectImageStyle} />
								<TouchableOpacity style={styles.settingContentBtnStyle}>
									<View style={{}}>
										<Text style={styles.settingContentBtnTextStyle}>Previous Projects</Text>
									</View>
									<ChevronIcon name="chevron-right" color="rgba(0,0,0,0.23)" size={hp('3%')} />
								</TouchableOpacity>
							</View>

							<View style={styles.settingContentViewStyle}>
								<Image source={PaymentMethod} style={styles.paymentMethodImageStyle} />
								<TouchableOpacity style={styles.settingContentBtnStyle}>
									<View style={{}}>
										<Text style={styles.settingContentBtnTextStyle}>Payment Methods</Text>
									</View>
									<ChevronIcon name="chevron-right" color="rgba(0,0,0,0.23)" size={hp('3%')} />
								</TouchableOpacity>
							</View>

							<View style={styles.settingContentViewStyle}>
								<Image source={Security} style={styles.securityImageStyle} />
								<TouchableOpacity style={styles.settingContentBtnStyle}>
									<View style={{}}>
										<Text style={styles.settingContentBtnTextStyle}>Security</Text>
									</View>
									<ChevronIcon name="chevron-right" color="rgba(0,0,0,0.23)" size={hp('3%')} />
								</TouchableOpacity>
							</View>

							<TouchableOpacity style={styles.contractBtnStyle}>
								<Text style={styles.contractBtnTextStyle}>CONTRACTS</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</ImageBackground>
		);
	}
}

export default Profile;
