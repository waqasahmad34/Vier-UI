import React from 'react';
import ChevronIcon from 'react-native-vector-icons/Entypo';
import { View, Text } from 'react-native';
import { Thumbnail } from 'native-base';
import ProfileImage from '../../../assets/profile.jpg';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import styles from './Styles';
const MessageListView = (props) => {
	return (
		<View style={styles.mainViewStyle}>
			<View style={styles.innerViewStyle}>
				<View style={{}}>
					<View style={[ props.count ? styles.imageViewStyle : null ]} />
					<Thumbnail source={ProfileImage} />
				</View>
				<View style={styles.nameTextViewStyle}>
					<Text style={styles.nameTextStyle}>{props.name}</Text>
					<Text style={styles.messageTextStyle}>{props.message}</Text>
				</View>
				<View style={styles.dateMainViewStyle}>
					<View style={{}}>
						<Text style={styles.dateTextStyle}>{props.time}</Text>
					</View>

					<View
						style={[
							props.count ? { backgroundColor: '#68aeff' } : { backgroundColor: '#fff' },
							{ alignSelf: 'flex-end' },
							{ marginRight: '1%' },
							{ width: wp('5%') },
							{ height: hp('2.5%') },
							{ borderRadius: 10.5 }
						]}
					>
						<Text style={styles.messageCountTextStyle}>{props.count ? props.count : null}</Text>
					</View>
				</View>
			</View>
		</View>
	);
};

export default MessageListView;
