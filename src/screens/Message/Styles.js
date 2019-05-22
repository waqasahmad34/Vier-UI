import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
	mainViewStyle: {
		flex: 1,
		backgroundColor: '#ffffff'
	},
	headerViewStyle: {
		width: '100%',
		height: '25%',
		borderBottomRightRadius: 24,
		borderBottomLeftRadius: 24,
		backgroundColor: '#384665',
		justifyContent: 'space-evenly'
	},
	headerInnerViewStyle: { flexDirection: 'row', marginTop: 80, justifyContent: 'space-evenly' },
	headerInnerImage1: {},
	headerInnerImage2: {},
	headerInnerImage3: {},

	scrollViewStyle: {
		backgroundColor: '#ffffff'
	}
});

export default styles;
