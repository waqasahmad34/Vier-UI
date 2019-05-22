import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
	imagebackgroundStyle: {
		flex: 1,
		width: null,
		height: null
	},
	profileMainViewStyle: {
		flex: 1,
		justifyContent: 'center'
	},

	profileArrowViewStyle: {
		justifyContent: 'space-between',
		flexDirection: 'row'
	},
	touchableBtnStyle: {
		flexDirection: 'row',
		alignSelf: 'center',
		marginLeft: '10%'
	},
	profileTextStyle: {
		paddingLeft: '8%',
		width: wp('25%'),
		fontFamily: 'GothamRounded-Book',
		fontSize: hp('3%'),
		fontWeight: '500',
		fontStyle: 'normal',
		letterSpacing: 0.34,
		color: '#ffffff'
	},
	settingIconViewStyle: {
		width: 55,
		height: 44,
		borderTopLeftRadius: 48,
		borderBottomLeftRadius: 48,
		backgroundColor: '#ffffff',
		justifyContent: 'center',
		alignItems: 'center'
	},
	cardMainViewStyle: {
		flex: 4.5
	},
	cardViewStyle: {
		flex: 0.8,
		marginTop: '5%',
		borderRadius: 19,
		backgroundColor: '#ffffff',
		marginHorizontal: '5%',
		elevation: 5
	},
	imageViewStyle: {
		width: 98,
		height: 98,
		borderStyle: 'solid',
		borderWidth: 5,
		borderColor: '#ffffff',
		alignSelf: 'center',
		position: 'relative',
		bottom: 45,
		borderRadius: 50,
		zIndex: 1,
		elevation: 1
	},
	thumbnailStyle: {
		flex: 1,
		width: null,
		height: null
	},
	nameAndDesTextmainViewStyle: {
		position: 'relative',
		bottom: 30
	},
	nameAndDesTextInnerViewStyle: {
		alignItems: 'center',
		justifyContent: 'center'
	},
	nameTextStyle: {
		fontFamily: 'GothamRounded-Book',
		fontSize: hp('2.2%'),
		fontWeight: '500',
		fontStyle: 'normal',
		letterSpacing: 0.28,
		color: '#555555'
	},
	desTextStyle: {
		height: hp('2.5%'),
		fontFamily: 'GothamRounded-Book',
		fontSize: hp('1.8%'),
		fontWeight: '500',
		fontStyle: 'normal',
		letterSpacing: 0.19,
		color: '#b1b1b1'
	},
	lineViewStyle: {
		width: '100%',
		height: 1,
		marginTop: '5%',
		opacity: 0.49,
		borderStyle: 'solid',
		borderWidth: 1,
		borderColor: '#dddddd'
	},
	settingContentViewStyle: {
		flexDirection: 'row',
		padding: '2%',
		height: hp('6%')
	},

	settingContentBtnStyle: {
		flexDirection: 'row',
		paddingLeft: '5%'
	},
	settingContentBtnTextStyle: {
		width: wp('70%'),
		height: hp('4%'),
		fontSize: hp('2%'),
		fontFamily: 'GothamRounded-Book',
		fontWeight: '500',
		fontStyle: 'normal',
		letterSpacing: 0.22,
		color: '#777777'
	},
	contractBtnStyle: {
		height: hp('7%'),
		width: '80%',
		borderRadius: 25,
		backgroundColor: '#384665',
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center',
		marginTop: '5%'
	},
	contractBtnTextStyle: {
		fontFamily: 'GothamRounded-Book',
		fontSize: hp('2.5%'),
		fontWeight: '500',
		fontStyle: 'normal',
		letterSpacing: 0.26,
		color: '#f0f0f0',
		elevation: 5
	},
	editProfileImageStyle: {
		width: 18,
		height: 18
	},
	previousProjectImageStyle: {
		width: 17,
		height: 15
	},
	paymentMethodImageStyle: {
		width: 14,
		height: 15
	},
	securityImageStyle: {
		width: 14,
		height: 16
	}
});

export default styles;
