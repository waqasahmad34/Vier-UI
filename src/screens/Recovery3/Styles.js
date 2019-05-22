import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
	imageBackgroundStyle: {
		flex: 1,
		width: null,
		height: null
	},
	innerViewStyle: {
		marginHorizontal: '5%',
		flex: 1
	},
	textAndArrowMainViewStyle: {
		justifyContent: 'center',
		marginTop: '14%',
		flex: 0.1
	},
	textAndArrowInnerViewStyle: {
		flexDirection: 'row',
		marginTop: '6%'
	},
	textStyle: {
		color: 'rgba(61,178,50,1)',
		paddingLeft: '5%',
		fontSize: hp('3.3%'),
		fontWeight: '500'
	},
	cardMainViewStyle: {
		flex: 0.8,
		marginTop: '2%',
		borderRadius: 14,
		backgroundColor: '#fff',
		elevation: 4
	},
	cardInnerViewStyle: {
		margin: '10%',
		justifyContent: 'center',
		alignItems: 'center',
		flex: 0.35
	},
	cardHeaderViewStyle: {
		marginTop: '10%'
	},
	cardHeaderTextStyle: {
		width: wp('56%'),
		height: hp('6%'),
		fontFamily: 'AvenirNext',
		fontSize: hp('2.9%'),
		fontWeight: '600',
		fontStyle: 'normal',
		letterSpacing: 0.23,
		textAlign: 'center',
		color: '#002e41'
	},
	cardLineStyle: {
		width: wp('15%'),
		height: hp('0.2%'),
		borderStyle: 'solid',
		borderWidth: 1,
		borderColor: 'rgba(151, 151, 151, 0.37)'
	},
	cardDescriptionViewStyle: {
		marginTop: '4%'
	},
	cardDescriptionTextStyle: {
		width: wp('60'),
		height: hp('10%'),
		fontFamily: 'GothamRounded-Book',
		fontSize: hp('1.95'),
		fontWeight: 'normal',
		fontStyle: 'normal',
		letterSpacing: 0.2,
		textAlign: 'center',
		color: 'rgba(1, 46, 65, 0.41)'
	},
	btnInputMainViewStyle: {
		marginHorizontal: '10%',
		flex: 0.5
	},
	lableStyle: {
		fontSize: hp('2%'),
		color: 'rgba(110,135,146,1)'
	},
	inputStyle: {
		color: 'rgba(107,107,107,1)'
	},

	goToLoginButtonMainViewStyle: {

		width: wp('74%'),
		height: hp('7%'),
		borderRadius: 30,
		backgroundColor: '#3db232',
		justifyContent: 'center',
		alignItems: 'center'
	},
	goToLoginButtonInnerViewStyle: {
		flexDirection: 'row',
		
	},
	goToLoginButtonTextStyle: {
		fontFamily: 'GothamRounded-Book',
		fontSize: hp('2.4%'),
		fontWeight: '500',
		fontStyle: 'normal',
		letterSpacing: 0.26,
		textAlign: 'center',
		color: '#ffffff'
	}
});

export default styles;
