import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
	imageBackgroundStyle: {
		flex: 1,
		width: null,
		height: null
	},
	progressBarViewStyle: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: '105%',
		paddingRight: '2%'
	},
	progressBarStyle: {
		height: 2,
		borderRadius: 8,
		width: '53%'
	}
});

export default styles;
