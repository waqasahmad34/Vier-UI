import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
	mainViewStyle: {
		flex: 1,
		backgroundColor: '#fff'
	},
	headerViewStyle: {
		width: '100%',
		height: '80%',
		elevation: 5,
		borderBottomRightRadius: 24,
		borderBottomLeftRadius: 24,
		backgroundColor: '#384665',
		justifyContent: 'space-evenly',
		alignItems: 'center'
	},
	headerTitleAndDesViewStyle: {
		justifyContent: 'center',
		alignItems: 'center'
	},
	headerTitleText: {
		fontFamily: 'GothamRounded-Book',
		fontSize: hp('3%'),
		fontWeight: 'normal',
		fontStyle: 'normal',
		letterSpacing: 0.31,
		color: '#ffffff'
	},
	headerDesViewStyle: { marginTop: 30 },
	headerDesText: {
		opacity: 0.52,
		fontFamily: 'GothamRounded-Book',
		fontSize: hp('2%'),
		fontWeight: 'normal',
		fontStyle: 'normal',
		lineHeight: 18,
		alignSelf: 'center',
		letterSpacing: 0.73,
		textAlign: 'center',
		color: '#ffffff'
	},
	questionViewStyle: {
		width: wp('85%'),
		height: hp('20%'),
		borderRadius: 19,
		backgroundColor: '#ffffff',
		justifyContent: 'space-evenly',
		alignItems: 'center'
	},
	questionTextStyle: {
		fontFamily: 'GothamRounded-Book',
		fontSize: hp('2%'),
		fontWeight: '500',
		fontStyle: 'normal',
		letterSpacing: 1.18,
		color: '#012e41'
	},
	questionCounterViewStyle: {
		width: hp('22%'),
		height: hp('7.5%'),
		borderRadius: 10,
		backgroundColor: '#ffffff',
		borderStyle: 'solid',
		borderWidth: 1,
		borderColor: '#cccccc'
	},
	questionCounterInnerViewStyle: { flexDirection: 'row' },
	counterViewStyle: {
		flex: 1.4,
		justifyContent: 'center',
		alignItems: 'center'
	},
	counterTextStyle: {
		fontFamily: 'GothamRounded-Book',
		fontSize: hp('2.5%'),
		fontWeight: '500',
		fontStyle: 'normal',
		letterSpacing: 1.73,
		color: '#7a7a7a'
	},
	plusButtonStyle: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	minusButtonStyle: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	rightBorderLineStyle: {
		opacity: 0.11,
		borderStyle: 'solid',
		borderRightWidth: 1,
		borderColor: '#979797',
		height: hp('7.5%')
	},
	leftBorderLineStyle: {
		opacity: 0.11,
		borderStyle: 'solid',
		borderLeftWidth: 1,
		borderColor: '#979797',
		height: hp('7.5%')
	},
	continueButtonMainViewStyle: {
		width: wp('74%'),
		height: hp('7%'),
		borderRadius: 30,
		backgroundColor: '#3db232',
		justifyContent: 'center',
		alignItems: 'center'
	},
	continueButtonInnerViewStyle: {
		flexDirection: 'row'
	},
	continueButtonTextStyle: {
		fontFamily: 'GothamRounded-Book',
		fontSize: hp('2.4%'),
		fontWeight: '500',
		fontStyle: 'normal',
		letterSpacing: 0.26,
		textAlign: 'center',
		color: '#ffffff'
	},
	lineViewStyle: {
		width: wp('28%'),
		borderRadius: 5,
		opacity: 0.4,
		marginTop: 30,
		borderStyle: 'solid',
		borderWidth: 1.5,
		borderColor: '#ffffff',
		justifyContent: 'flex-end'
	}
});

export default styles;
