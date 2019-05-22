import React, { Component } from 'react';
import { Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import MessageListView from '../../components/MessageListView/MessageListView';
import styles from './Styles';
import MessageIcon from '../../assets/message.png';
import PersonIcon from '../../assets/person_icon.png';
import MoreIcon from '../../assets/more_icon.png';

class Message extends Component {
	render() {
		return (
			<View style={styles.mainViewStyle}>
				<View style={styles.headerViewStyle}>
					<View style={styles.headerInnerViewStyle}>
						<TouchableOpacity>
							<Image source={MessageIcon} style={styles.headerInnerImage1} />
						</TouchableOpacity>
						<TouchableOpacity>
							<Image source={PersonIcon} style={styles.headerInnerImages} />
						</TouchableOpacity>
						<TouchableOpacity>
							<Image source={MoreIcon} style={styles.headerInnerImages} />
						</TouchableOpacity>
					</View>
				</View>

				<ScrollView style={styles.scrollViewStyle}>
					<TouchableOpacity>
						<MessageListView
							name="Joe’s Painting"
							message="Hi, I’ve sent you the info…"
							time="06/12"
							count="2"
						/>
					</TouchableOpacity>
					<MessageListView name="Home Depot" message="Lorem Ipsum dolor set" time="06/12" />
					<MessageListView name="Kebah Jurrasic" message="Can you please drop it." time="2019-01-01" />
					<MessageListView
						name="Joe’s Painting"
						message="Hi, I’ve sent you the info…"
						time="1:54 PM"
						count="2"
					/>
					<MessageListView name="Ronald Pump" message="Excellent Condition." time="Thursday" />
					<MessageListView name="Kebah Jurrasic" message="Can you please drop it." time="2019-01-01" />

					<MessageListView
						name="Major Nelson"
						message="Enjoy the car, let me know…"
						time="1:54 PM"
						count="2"
					/>
					<MessageListView name="Ronald Pump" message="Excellent Condition." time="Thursday" />
					<MessageListView name="Kebah Jurrasic" message="Can you please drop it." time="2019-01-01" />

					<MessageListView
						name="Major Nelson"
						message="Enjoy the car, let me know…"
						time="1:54 PM"
						count="2"
					/>
					<MessageListView name="Ronald Pump" message="Excellent Condition." time="Thursday" />
					<MessageListView name="Kebah Jurrasic" message="Can you please drop it." time="2019-01-01" />
					<MessageListView
						name="Major Nelson"
						message="Enjoy the car, let me know…"
						time="1:54 PM"
						count="2"
					/>
					<MessageListView name="Ronald Pump" message="Excellent Condition." time="Thursday" />
					<MessageListView name="Kebah Jurrasic" message="Can you please drop it." time="2019-01-01" />
				</ScrollView>
			</View>
		);
	}
}

export default Message;
