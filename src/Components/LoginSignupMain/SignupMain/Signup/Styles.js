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
		height: hp('77.5%'),
		backgroundColor: 'rgba(255,255,255,1)'
	},
	scrollViewStyle: {
		margin: '8%'
	},
	scrollViewMainViewStyle: {
		height: hp('75%')
	},
	sigingupViewStyle: {
		marginTop: '1%',
		justifyContent: 'center',
		alignItems: 'center'
	},
	sigingupTextStyle: {
		color: 'rgba(1,46,65,0.86)',
		fontSize: hp('2.4%')
	},
	imagesViewStyle: {
		marginTop: '4%',
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	homeOwnerBtnStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		height: hp('16%'),
		width: '45%',
		borderRadius: 20
	},
	homeOwnerImageStyle: {
		width: wp('13%'),
		alignSelf: 'center',
		height: hp('7%')
	},
	homeOwnerImageTextStyle: {
		marginTop: '10%',
		fontSize: hp('1.8%')
	},
	contractorBtnStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		height: hp('16%'),
		width: '45%',
		borderRadius: 20
	},
	contractorImageStyle: {
		width: wp('13%'),
		alignSelf: 'center',
		height: hp('7%')
	},
	contractorImageTextStyle: {
		marginTop: '9%',
		fontSize: hp('1.8%')
	},

	textInputMainViewStyle: {
		marginTop: '4%'
	},
	lableStyle: {
		fontSize: hp('2%'),
		color: 'rgba(110,135,146,1)'
	},
	inputStyle: {
		color: 'rgba(1,46,65,1)'
	},
	buttonMainViewStyle: {
		marginTop: '8%',
		borderRadius: 30,
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center',
		width: wp('72%'),
		height: hp('7%'),
		backgroundColor: 'rgba(61,178,50,1)'
	},
	buttonInnerViewStyle: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center'
	},
	textViewStyle: {
		height: 5,
		width: wp('25%'),
		alignSelf: 'center',
		alignItems: 'center'
	},
	buttonTextStyle: {
		color: '#fff',
		fontSize: hp('2.5%'),
		fontWeight: '500',
		alignSelf: 'center'
	}
});

export default styles;
