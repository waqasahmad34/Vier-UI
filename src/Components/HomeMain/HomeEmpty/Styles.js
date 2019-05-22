import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
	mainViewStyle: {
		flex: 1,
		backgroundColor: '#f7f7fb'
	},
	textViewStyle: {
		marginHorizontal: '10%',
		marginTop: '20%'
	},
	homeTextStyle: {
		width: wp('20%'),
		height: hp('4.1%'),
		fontFamily: 'GothamRounded',
		fontSize: hp('3%'),
		fontWeight: '500',
		fontStyle: 'normal',
		letterSpacing: 0.74,
		color: '#012e41'
	},
	innerViewStyle: {
		flex: 0.8,
		borderRadius: 19,
		marginHorizontal: '6%',
		backgroundColor: '#ffffff',
		marginTop: '5%',
		elevation: 4
	},
	contentMainViewStyle: {
		margin: '8%',
		height: '100%'
	},
	imageViewStyle: {
		height: '60%',
		justifyContent: 'center',
		alignItems: 'center'
	},
	imageStyle: {
		alignSelf: 'center',
		resizeMode: 'contain'
	},
	lineViewStyle: {
		width: '35%',
		height: '0.5%',
		marginTop: '8%',
		alignSelf: 'center',
		opacity: 0.6,
		borderRadius: 3,
		borderStyle: 'solid',
		borderWidth: 2,
		borderColor: '#3db232'
	},
	descriptionMainViewStyle: {
		height: '25%',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: '10%'
	},
	description1TextStyle: {
		width: wp('54%'),
		height: hp('5.5%'),
		fontFamily: 'GothamRounded',
		fontSize: hp('2%'),
		fontWeight: '500',
		fontStyle: 'normal',
		lineHeight: 29,
		letterSpacing: 0.36,
		textAlign: 'center',
		color: '#777777'
	},
	description2TextStyle: {
		width: wp('60%'),
		height: hp('5.5%'),
		fontFamily: 'GothamRounded',
		fontSize: hp('2%'),
		fontWeight: '500',
		fontStyle: 'normal',
		lineHeight: 29,
		letterSpacing: 0.36,
		color: '#777777'
	}
});

export default styles;
