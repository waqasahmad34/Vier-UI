import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
	sliderViewStyle: {
		height: hp('50%'),
		marginTop: '2%',
		width: width - 50,
		marginHorizontal: 10,
		borderRadius: 19,
		backgroundColor: '#fff'
	},
	sliderImageStyle: {
		resizeMode: 'cover',
		borderTopLeftRadius: 19,
		borderTopRightRadius: 19,
		backgroundColor: 'rgba(0,0,0,0.23)',
		width: '100%',
		height: '55%'
	},
	descriptionContentmainViewStyle: {
		margin: '8%',
		height: '30%'
	},

	dateViewStyle: {
		width: wp('12%'),
		height: hp('6.5%'),
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
		opacity: 0.73,
		fontFamily: 'GothamRounded-Book',
		fontSize: hp('2.2'),
		fontWeight: '500',
		fontStyle: 'normal',
		letterSpacing: 0.23,
		color: '#012e41'
	},
	remainingDayTextStyle: {
		
		fontFamily: 'GothamRounded-Book',
		fontSize: hp('1.8%'),
		fontWeight: '500',
		fontStyle: 'normal',
		letterSpacing: 0.16,
		color: '#c0c2c0'
	},

	dateTextStyle: {
		
		fontFamily: 'GothamRounded-Book',
		fontSize: hp('2.5%'),
		fontWeight: 'bold',
		fontStyle: 'normal',
		letterSpacing: 0.23,
		color: '#23c268'
	},
	monthTextStyle: {
		
		fontFamily: 'GothamRounded-Book',
		fontSize: hp('1.3%'),
		fontWeight: '500',
		fontStyle: 'normal',
		letterSpacing: 0.14,
		color: '#23c268'
	},

	circleAndRepairTextMainView: {
		width: wp('45%'),
		marginTop: '5%',
		flexDirection: 'row',
		height: 36,
		borderRadius: 18.5,
		backgroundColor: 'rgba(216,216,216,0.25)'
	},

	circleViewStyle: {
		width: wp('9%'),
		height: hp('5%'),
		borderRadius: 18.5,
		backgroundColor: 'rgba(195,195,195,1)',
		justifyContent: 'space-between'
	},
	repairTextViewStyle: {
		height: hp('3.5%'),
		alignSelf: 'center'
	},
	repairTextStyle: {
		textAlign: 'center',
		width: wp('30%'),
		height: hp('2.5%'),
		fontFamily: 'SFProText',
		fontSize: hp('1.6%'),
		fontWeight: 'normal',
		fontStyle: 'normal',
		letterSpacing: 0.19,
		color: '#8a8a8a'
	}
});

export default styles;
