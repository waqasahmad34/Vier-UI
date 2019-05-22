import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
	mainViewStyle: {
		flex: 1,
		backgroundColor: '#f7f7fb'
	},
	headerViewStyle: {
		height: '25%',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		borderBottomRightRadius: 24,
		borderBottomLeftRadius: 24,
		backgroundColor: '#384665'
	},
	imLookingFortextViewStyle: {
		width: '35%'
	},
	imlookingForTextStyle: {
		height: hp('4%'),
		fontFamily: 'GothamRounded',
		fontSize: hp('2.5%'),
		fontWeight: 'normal',
		fontStyle: 'normal',
		letterSpacing: 0.31,
		color: '#ffffff'
	},

	textInputViewStyle: {
		flexDirection: 'row',
		borderRadius: 29,
		width: '80%',
		height: '28%',
		backgroundColor: '#ffffff'
	},
	textInputStyle: {
		flex: 0.93,
		marginLeft: '8%',
		height: hp('7%'),
		opacity: 0.52,
		fontFamily: 'Avenir',
		fontSize: hp('2%'),
		fontWeight: 'normal',
		fontStyle: 'normal',
		letterSpacing: 0.23,
		color: '#012e41'
	},
	roundOuterViewStyle: {
		width: wp('9.5%'),
		alignSelf: 'center',
		borderRadius: 29,
		justifyContent: 'center',
		height: hp('5%'),
		backgroundColor: 'rgba(61,178,50,0.17)'
	},
	roundInnerViewStyle: {
		width: wp('5.5%'),
		height: hp('3%'),
		alignSelf: 'center',
		borderRadius: 29,
		backgroundColor: 'rgba(61,178,50,1)'
	},

	sliderMainViewStyle: {
		marginTop: '3%',
		height: '75%'
	},

	currentJobsTextViewStyle: {
		justifyContent: 'center',
		alignItems: 'center'
	},
	currentJobsTextStyle: {
		width: wp('30%'),
		height: hp('3%'),
		textAlign: 'center',
		opacity: 0.69,
		fontFamily: 'GothamRounded',
		fontSize: hp('2%'),
		fontWeight: '500',
		fontStyle: 'normal',
		letterSpacing: 0.1,
		color: '#012e41'
	},

	sliderViewStyle: {
		height: '75%',
		marginTop: '3%',
		elevation: 4,
		marginHorizontal: '8%',
		borderRadius: 19,
		backgroundColor: '#fff'
	},
	sliderImageStyle: {
		resizeMode: 'cover',
		borderTopLeftRadius: 19,
		borderTopRightRadius: 19,
		width: '100%',
		height: '60%'
	},
	descriptionContentmainViewStyle: {
		margin: '8%',
		height: '30%'
	},

	dateViewStyle: {
		width: wp('13.5%'),
		height: hp('7.5%'),
		borderRadius: 8,
		backgroundColor: 'rgba(45, 202, 112, 0.14)',
		justifyContent: 'center',
		alignItems: 'center'
	},

	nameAndRemainingDayViewStyle: {
		paddingLeft: '6%',
		flex: 1,
		paddingTop: '2%'
	},
	nameTextStyle: {
		width: wp('50%'),
		height: hp('3%'),
		opacity: 0.73,
		fontFamily: 'GothamRounded',
		fontSize: hp('2.2'),
		fontWeight: '500',
		fontStyle: 'normal',
		letterSpacing: 0.23,
		color: '#012e41'
	},
	remainingDayTextStyle: {
		width: wp('50%'),
		height: hp('2.5%'),
		fontFamily: 'GothamRounded',
		fontSize: hp('1.8%'),
		fontWeight: '500',
		fontStyle: 'normal',
		letterSpacing: 0.16,
		color: '#c0c2c0'
	},

	dateTextStyle: {
		width: wp('6%'),
		height: hp('3%'),
		fontFamily: 'GothamRounded',
		fontSize: hp('2.5%'),
		fontWeight: 'bold',
		fontStyle: 'normal',
		letterSpacing: 0.23,
		color: '#23c268'
	},
	monthTextStyle: {
		width: wp('7%'),
		height: hp('2%'),
		fontFamily: 'GothamRounded',
		fontSize: hp('1.3%'),
		fontWeight: '500',
		fontStyle: 'normal',
		letterSpacing: 0.14,
		color: '#23c268'
	}
});

export default styles;
