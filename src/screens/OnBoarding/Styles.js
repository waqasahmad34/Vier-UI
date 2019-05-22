import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
	image: {
		width: '100%',
		resizeMode: 'contain'
	},
	dotStyle: {
		backgroundColor: '#d8d8d8'
	},
	activeDotStyle: {
		backgroundColor: '#384665'
	},
	buttonTextStyle: {
		fontWeight: 'bold',
		color: '#384665'
	},
	buttonStyle: {
		backgroundColor: 'transparent'
	}
});

export default styles;
