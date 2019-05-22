import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
	mainViewStyle: {
		flex: 1
	},
	innerViewStyle: {
		flexDirection: 'row',
		padding: '4%'
	},
	imageViewStyle: {
		position: 'absolute',
		left: 45,
		top: 5,
		zIndex: 1,
		width: 8,
		height: 8,
		borderRadius: 20,
		backgroundColor: '#68aeff'
	},
	nameTextViewStyle: {
		padding: '2.5%',
		flex: 1
	},

	nameTextStyle: {
		width: '100%',
		fontSize: hp('1.9%'),
		fontFamily: 'AvenirNext',
		fontWeight: '600',
		fontStyle: 'normal',
		letterSpacing: 0.23,
		color: '#414141'
	},
	messageTextStyle: {
		width: '100%',
		fontSize: hp('1.6%'),
		marginTop: 0.5,
		fontFamily: 'AvenirNext',
		fontWeight: 'normal',
		fontStyle: 'normal',
		letterSpacing: 0.23,
		color: '#c9c4c4'
	},
	dateMainViewStyle: {
		padding: '2.5%'
	},
	dateTextStyle: {
		fontSize: hp('1.6%'),
		textAlign: 'right',
		fontFamily: 'AvenirNext',
		fontWeight: '500',
		fontStyle: 'normal',
		letterSpacing: 0.16,
		color: '#c9c4c4'
	},
	messageCountTextStyle: {
		fontSize: hp('1.6%'),
		alignSelf: 'center',
		fontFamily: 'AvenirNext',
		fontWeight: 'normal',
		fontStyle: 'normal',
		letterSpacing: 0.19,
		color: '#ffffff'
	}
});

export default styles;
