import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './Styles';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Ripple from 'react-native-material-ripple';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

class ContractorSchedule extends Component {
	render() {
		return (
			<View style={styles.mainViewStyle}>
				<View style={styles.headerViewStyle}>
					<Calendar
						style={{
							alignSelf: 'center',
							marginTop: '5%',
							backgroundColor: 'transparent',
							height: '50%',
							width: '90%'
						}}
						// Date marking style [simple/period/multi-dot/single]. Default = 'simple'
						markingType={'custom'}
						markedDates={{
							'2018-05-16': {
								customStyles: {
									container: {
										width: 26.7,
										height: 26.8,
										borderRadius: 2,
										backgroundColor: '#3db232'
									},
									text: {
										fontFamily: 'SFProText',
										fontSize: hp('1.5%'),
										fontWeight: '600',
										fontStyle: 'normal',
										lineHeight: 16,
										letterSpacing: 0,
										textAlign: 'center',
										color: '#ffffff'
									}
								}
							}
						}}
						// Specify theme properties to override specific styles for calendar parts. Default = {}
						theme={{
							backgroundColor: '#384665',
							calendarBackground: '#384665',
							textSectionTitleColor: '#ffffff',
							selectedDayBackgroundColor: '#3db232',
							selectedDayTextColor: '#ffffff',
							todayTextColor: '#ffffff',
							dayTextColor: '#ffffff',
							textDisabledColor: '#ffffff',
							dotColor: '#00adf5',
							selectedDotColor: 'blue',
							arrowColor: '#c9c9c9',
							monthTextColor: '#bbe8ff',
							indicatorColor: '#ffffff',
							textDayFontFamily: 'SFProText',
							textMonthFontFamily: 'GothamRounded',
							textDayHeaderFontFamily: 'SFProText',
							textMonthFontWeight: 'bold',
							textDayFontSize: hp('1.5%'),
							textMonthFontSize: hp('1.8%'),
							textDayHeaderFontSize: hp('1.5%')
						}}
						// Initially visible month. Default = Date()
						current={'2018-05-01'}
						// Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
						minDate={'2012-05-10'}
						// Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
						maxDate={'2012-05-30'}
						// Handler which gets executed on day press. Default = undefined
						onDayPress={(day) => {
							console.log('selected day', day);
						}}
						// Handler which gets executed on day long press. Default = undefined
						onDayLongPress={(day) => {
							console.log('selected day', day);
						}}
						// Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
						monthFormat={'MMM yyyy'}
						// Handler which gets executed when visible month changes in calendar. Default = undefined
						onMonthChange={(month) => {
							console.log('month changed', month);
						}}
						// Hide month navigation arrows. Default = false
						hideArrows={false}
						// Replace default arrows with custom ones (direction can be 'left' or 'right')
						//renderArrow={(direction) => <Arrow />}
						// Do not show days of other months in month page. Default = false
						hideExtraDays={true}
						// If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
						// day from another month that is visible in calendar page. Default = false
						disableMonthChange={true}
						// If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
						//firstDay={1}
						// Hide day names. Default = false
						//hideDayNames={true}
						// Show week numbers to the left. Default = false
						//showWeekNumbers={true}
						// Handler which gets executed when press arrow icon left. It receive a callback can go back month
						onPressArrowLeft={(substractMonth) => substractMonth()}
						// Handler which gets executed when press arrow icon left. It receive a callback can go next month
						onPressArrowRight={(addMonth) => addMonth()}
					/>
				</View>
				<View style={{ marginTop: 5, justifyContent: 'center', alignItems: 'center' }}>
					<Text
						style={{
							opacity: 0.74,
							fontFamily: 'GothamRounded-Book',
							fontSize: hp('1.8%'),
							fontWeight: '500',
							fontStyle: 'normal',
							letterSpacing: 0.1,
							color: '#012e41'
						}}
					>
						May 16th, 2018
					</Text>
				</View>
				<View
					style={{
						height: hp('12%'),
						marginTop: 5,
						marginHorizontal: '2.5%',
						backgroundColor: '#ffffff',
						borderRadius: 19
					}}
				>
					<View style={styles.descriptionContentmainViewStyle}>
						<View style={{ flexDirection: 'row' }}>
							<View style={styles.dateViewStyle}>
								<Text style={styles.dateTextStyle}>23</Text>
								<Text style={styles.monthTextStyle}>JUNE</Text>
							</View>

							<View style={styles.nameAndRemainingDayViewStyle}>
								<Text style={styles.nameTextStyle}>Backyard Deck Polish</Text>
								<Text style={styles.remainingDayTextStyle}>0:31 Seconds Remaining</Text>
							</View>

							<TouchableOpacity
								style={{
									width: wp('25%'),
									height: hp('6%'),
									borderRadius: 3,
									backgroundColor: '#3db232',
									justifyContent: 'center',
									alignItems: 'center'
								}}
							>
								<Text
									style={{
										fontFamily: 'GothamRounded-Book',
										fontSize: hp('1.8%'),
										fontWeight: '500',
										fontStyle: 'normal',
										lineHeight: 15,
										letterSpacing: 0.19,
										color: '#ffffff'
									}}
								>
									START
								</Text>
								<Text
									style={{
										fontFamily: 'GothamRounded-Book',
										fontSize: hp('1.8%'),
										fontWeight: '500',
										fontStyle: 'normal',
										lineHeight: 15,
										letterSpacing: 0.19,
										color: '#ffffff'
									}}
								>
									WORK
								</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>

				<View
					style={{
						height: hp('12%'),
						marginTop: 10,
						marginHorizontal: '2.5%',
						backgroundColor: '#ffffff',
						borderRadius: 19
					}}
				>
					<View style={styles.descriptionContentmainViewStyle}>
						<View style={{ flexDirection: 'row' }}>
							<View style={styles.dateViewStyle}>
								<Text style={styles.dateTextStyle}>23</Text>
								<Text style={styles.monthTextStyle}>JUNE</Text>
							</View>

							<View style={styles.nameAndRemainingDayViewStyle}>
								<Text style={styles.nameTextStyle}>Backyard Deck Polish</Text>
								<Text style={styles.remainingDayTextStyle}>0:31 Seconds Remaining</Text>
							</View>

							<TouchableOpacity
								style={{
									width: wp('25%'),
									height: hp('6%'),
									borderRadius: 3,
									backgroundColor: '#3db232',
									justifyContent: 'center',
									alignItems: 'center'
								}}
							>
								<Text
									style={{
										fontFamily: 'GothamRounded-Book',
										fontSize: hp('1.8%'),
										fontWeight: '500',
										fontStyle: 'normal',
										lineHeight: 15,
										letterSpacing: 0.19,
										color: '#ffffff'
									}}
								>
									START
								</Text>
								<Text
									style={{
										fontFamily: 'GothamRounded-Book',
										fontSize: hp('1.8%'),
										fontWeight: '500',
										fontStyle: 'normal',
										lineHeight: 15,
										letterSpacing: 0.19,
										color: '#ffffff'
									}}
								>
									WORK
								</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</View>
		);
	}
}

export default ContractorSchedule;
