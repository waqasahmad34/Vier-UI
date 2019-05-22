import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
	mainViewStyle: {
		flex: 1,
		backgroundColor: '#f7f7fb'
	},
	projectProposalMainViewStyle: { flex: 0.15, justifyContent: 'center' },
	projectProposalTextViewStyle: { marginLeft: '10%' },
	projectProposalTextStyle: {
		fontFamily: 'GothamRounded',
		fontSize: hp('2%'),
		fontWeight: '500',
		fontStyle: 'normal',
		letterSpacing: 0.48,
		color: '#012e41'
	},
	cardMainViewStyle: {
		flex: 1.5,
		borderRadius: 19,
		backgroundColor: '#ffffff',
		marginHorizontal: '5%'
	},
	cardHeadingDateMainViewStyle: {
		flex: 0.5,
		justifyContent: 'center',
		alignItems: 'center'
	},
	cardHeadingDateInnerViewStyle: { flexDirection: 'row', flex: 1 },
	cardDateViewStyle: { justifyContent: 'center', alignItems: 'center', flex: 0.3 },
	cardDateViewInnerStyle: {
		width: wp('11%'),
		height: hp('6%'),
		borderRadius: 8,
		backgroundColor: 'rgba(45, 202, 112, 0.14)',
		justifyContent: 'center',
		alignItems: 'center'
	},
	cardDateTextStyle1: {
		fontFamily: 'GothamRounded',
		fontSize: hp('1.2%'),
		fontWeight: 'bold',
		fontStyle: 'normal',
		letterSpacing: 0.23,
		color: '#23c268'
	},
	cardDateTextStyle2: {
		fontFamily: 'GothamRounded',
		fontSize: hp('1%'),
		fontWeight: '500',
		fontStyle: 'normal',
		letterSpacing: 0.14,
		color: '#23c268'
	},
	cardHeadingViewStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 0.65
	},
	cardHeadingTextStyle: {
		fontFamily: 'GothamRounded',
		fontSize: hp('2%'),
		fontWeight: '500',
		fontStyle: 'normal',
		lineHeight: 19,
		letterSpacing: 0.43,
		color: '#4b4b4b'
	},
	cardImageStuffViewStyle: {
		backgroundColor: '#rgba(216,216,216,0.11)',
		flex: 0.4
	},
	cardImageStuffInnerViewStyle: { flexDirection: 'row', flex: 1, marginHorizontal: '5%' },
	cardImageViewStyle: { flex: 0.7, justifyContent: 'center' },

	cardImageStuffTitleViewStyle: { flex: 1, justifyContent: 'center' },

	cardImageStuffTitleTextStyle: {
		fontFamily: 'GothamRounded',
		fontSize: hp('1.5%'),
		fontWeight: '500',
		fontStyle: 'normal',
		letterSpacing: 0.33,
		color: '#4b4b4b'
	},

	cardImageStuffTitleTextStyle2: {
		fontFamily: 'GothamRounded',
		fontSize: hp('1.2%'),
		fontWeight: 'normal',
		fontStyle: 'normal',
		letterSpacing: 0.2,
		color: '#898989'
	},

	cardImageStuffButtonViewStyle: { flex: 1, justifyContent: 'center' },
	cardImageStuffButtonStyle: {
		borderRadius: 20,
		backgroundColor: '#3db232',
		height: hp('3.5%'),
		justifyContent: 'center',
		alignItems: 'center'
	},
	cardImageStuffButtonTextStyle: {
		fontFamily: 'GothamRounded',
		fontSize: hp('1.2%'),
		fontWeight: '500',
		fontStyle: 'normal',
		letterSpacing: 0.3,
		color: '#ffffff'
	},
	cardDesMainViewStyle: { flex: 0.8, marginHorizontal: '5%' },
	cardDesTitleViewStyle: { marginTop: '10%' },
	cardDesTitleTextStyle: {
		fontFamily: 'GothamRounded',
		fontSize: hp('1.5%'),
		fontWeight: '500',
		fontStyle: 'normal',
		letterSpacing: 0.33,
		color: '#3db232'
	},
	cardDesViewStyle: { marginTop: 5 },
	cardDesTextStyle: {
		fontFamily: 'GothamRounded',
		fontSize: hp('1.4%'),
		fontWeight: 'normal',
		fontStyle: 'normal',
		lineHeight: 18,
		letterSpacing: 0.3,
		color: '#858585'
	},
	cardQAndAMainViewStyle: { flex: 1, marginHorizontal: '5%' },
	cardQAndATitleViewStyle: { marginTop: '8%' },
	cardQAndATitleTextStyle: {
		fontFamily: 'GothamRounded',
		fontSize: hp('1.5%'),
		fontWeight: '500',
		fontStyle: 'normal',
		letterSpacing: 0.33,
		color: '#3db232'
	},
	cardQ1AndA1ViewStyle: { marginTop: '5%' },
	cardQAndATextStyle1: {
		fontFamily: 'GothamRounded',
		fontSize: hp('1.5%'),
		fontWeight: '500',
		fontStyle: 'normal',
		letterSpacing: 0.33,
		color: '#4b4b4b'
	},
	cardQAndATextStyle2: {
		fontFamily: 'GothamRounded',
		fontSize: hp('1.4%'),
		fontWeight: 'normal',
		fontStyle: 'normal',
		lineHeight: 18,
		letterSpacing: 0.3,
		color: '#858585'
	},
	cardQ2AndA2ViewStyle: { marginTop: 5 },

	approveDeclineBtnMainViewStyle: {
		flex: 0.3,
		marginTop: 10,
		backgroundColor: '#ffffff',
		justifyContent: 'center',
		alignItems: 'center'
	},
	approveDeclineBtnInnerViewStyle: {
		flexDirection: 'row'
	},
	approveBtnStyle: {
		borderRadius: 22.5,
		backgroundColor: '#3db232',
		flex: 0.45,
		height: hp('5%'),
		justifyContent: 'center',
		alignItems: 'center',
		marginRight: 5
	},
	approveBtnTextStyle: {
		fontFamily: 'GothamRounded',
		fontSize: hp('1.8%'),
		fontWeight: '500',
		fontStyle: 'normal',
		letterSpacing: 0.48,
		color: '#ffffff'
	},
	declineBtnStyle: {
		borderRadius: 22.5,
		backgroundColor: '#e8e5e5',
		flex: 0.45,
		height: hp('5%'),
		justifyContent: 'center',
		alignItems: 'center'
	},
	declineBtnTextStyle: {
		fontFamily: 'GothamRounded',
		fontSize: hp('1.8%'),
		fontWeight: '500',
		fontStyle: 'normal',
		letterSpacing: 0.48,
		color: '#8b8b8b'
	}
});

export default styles;
