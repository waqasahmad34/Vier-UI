import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
	imageBackgroundStyle: {
		flex: 1,
		width: null,
		height: null
	},
	innerViewStyle: {
		flexDirection: 'row',
		marginTop: '15%',
		marginLeft: '10%'
	},
	loginViewStyle: {
		marginLeft: '8%',
		alignSelf: 'flex-start'
	},
	loginTextStyle: {
		color: 'rgba(255,255,255,1)',
		fontWeight: '500',
		fontSize: hp('3%')
	},

	signupViewStyle: {
		marginLeft: '8%',
		alignSelf: 'flex-start'
	},
	signupTextStyle: {
		color: 'rgba(255,255,255,1)',
		fontWeight: '500',
		fontSize: hp('3%')
	},
	borderBottomViewStyle: {
		marginTop: '4%'
	}
});

export default styles;
