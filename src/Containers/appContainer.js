import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ActionCreators } from '../Actions';
import { bindActionCreators } from 'redux';
import ReactNative from 'react-native'
import { AsyncStorage } from 'react-native';
import { createRootNavigator } from "../Routes";
const USER_KEY = 'accessToken';

const {
  View,
  StyleSheet
} = ReactNative

const isSignedIn = () => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(USER_KEY)
      .then((res) => {
        console.log('here is result :', res);
        if (res !== null) {
          resolve(true);
        } else {
          resolve(false);
        }
      })
      .catch((err) => reject(err));
  });
};

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signedIn: false,
    };
  }

  componentDidMount() {
    // console.log(this.props.userTrips())
    //let keys = [['accessToken'], ['userDetail'] ];
//     AsyncStorage.removeItem('accessToken', (err) => {
//         if (err) {
// console.log(err)
//         } else {

//         }
//     });
    isSignedIn()
      .then(res => {
        console.log('checkStatus:', res)
        this.setState({ signedIn: res })
      })
      .catch(err => alert("An error occurred here"));
  }

  render() {
    const Layout = createRootNavigator(this.state.signedIn);
    return (<Layout />);
  }
}


var styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
    flex: 1,
    flexDirection: 'column'
  }
});

function mapStateToProps(state) {

  return {

  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
