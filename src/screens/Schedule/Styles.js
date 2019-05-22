import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
	mainViewStyle: {
		flex: 1,
		backgroundColor: '#f7f7fb'
	},
	headerViewStyle: {
		width: '100%',
		height: '57%',
		borderBottomRightRadius: 24,
		borderBottomLeftRadius: 24,
		backgroundColor: '#384665'
	},
	descriptionContentmainViewStyle: {
		margin: '4%',
		height: '27%'
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
		paddingLeft: '5%',
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
		marginTop: 8,
		flexDirection: 'row',
		height: 36,
		borderRadius: 18.5,
		backgroundColor: 'rgba(216,216,216,0.25)'
	},

	repairTextViewStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		paddingLeft: 5
	},
	repairTextStyle: {
		fontFamily: 'SFProText',
		fontSize: hp('1.6%'),
		fontWeight: 'normal',
		fontStyle: 'normal',
		letterSpacing: 0.19,
		color: '#8a8a8a'
	}
});

export default styles;
