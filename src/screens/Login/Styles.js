import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
	mainViewStyle: {
		flex: 1
	},
	innerViewStyle: {
		marginHorizontal: '5%',
		elevation: 4,
		marginTop: '6%',
		borderRadius: 14,
		height: '92%',
		backgroundColor: 'rgba(255,255,255,1)'
	},
	keyboardAvoidingViewStyle: {
		margin: '10%'
	},
	keyboardAvoidingViewMainViewStyle: {
		height: hp('26%')
	},
	textInputMainViewStyle: {
		marginTop: '1%'
	},
	lableStyle: {
		fontSize: hp('2%'),
		color: 'rgba(110,135,146,1)'
	},
	inputStyle: {
		color: 'rgba(1,46,65,1)'
	},
	forgotPasswordViewStyle: {
		marginTop: '6%',
		justifyContent: 'center',
		alignItems: 'center'
	},
	forgotPasswordTextStyle: {
		color: 'rgba(61,178,50,1)',
		fontSize: hp('2.1%')
	},
	buttonsMainViewStyle: {
		height: hp('50%')
	},
	signinbuttonViewStyle: {
		borderRadius: 30,
		elevation: 4,
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center',
		width: wp('72%'),
		height: hp('7%'),
		backgroundColor: 'rgba(61,178,50,1)',
		marginTop: '6%'
	},
	signinbuttonTextStyle: {
		color: '#fff',
		alignSelf: 'center',
		fontWeight: '500',
		fontSize: hp('2.5%')
	},
	signinWithViewStyle: {
		marginTop: '6%',
		justifyContent: 'center',
		alignItems: 'center'
	},
	signinWithTextStyle: {
		color: 'rgba(157,157,157,1)',
		fontSize: hp('2.1%')
	},
	signinWithFacebookMainViewStyle: {
		marginTop: '8%',
		borderRadius: 30,
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center',
		width: wp('72%'),
		height: hp('7%'),
		backgroundColor: 'rgba(59,89,152,1)'
	},
	signinWithFacebookInnerViewStyle: {
		flexDirection: 'row',
		justifyContent: 'center'
	},
	signinWithFacebookIconViewStyle: {
		marginRight: '6%'
	},
	signinWithFacebookTextStyle: {
		color: '#fff',
		fontSize: hp('2.5%'),
		alignSelf: 'center'
	},
	signinWithGoogleMainViewStyle: {
		borderColor: 'rgba(151,151,151,1)',
		borderWidth: 1,
		marginTop: '5%',
		borderRadius: 30,
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center',
		width: wp('72%'),
		height: hp('7%'),
		backgroundColor: 'white'
	},
	signinWithGoogleInnerViewStyle: {
		flexDirection: 'row',
		justifyContent: 'center'
	},
	signinWithGoogleIconViewStyle: {
		marginRight: '6%'
	},
	signinWithGoogleTextStyle: {
		color: 'rgba(151,151,151,1)',
		fontSize: hp('2.5%'),
		alignSelf: 'center'
	}
});

export default styles;
