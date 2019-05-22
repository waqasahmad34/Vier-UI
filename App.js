import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist';
import ReactNative from 'react-native';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from './src/Reducers';
import AppContainer from './src/Containers/appContainer'

const {
  View,
  AsyncStorage
} = ReactNative

const config = {
  key: 'primary',
  storage: AsyncStorage
}

let reducers = persistCombineReducers(config, reducer)

// making sure logger only works in dev mode.
const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ });

const store = createStore(
  reducers,
  undefined,
  compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  )
)
const callback = () => { };

export default class App extends Component {
  //class App extends Component{
  constructor() {
    super()
    this.state = { rehydrated: false }
  }

  componentWillMount() {
    persistStore(
      store,
      null,
      (
        err, restoredState
      ) => {
        store.getState()
        this.setState({ rehydrated: true })
        // if you want to get restoredState
      }
    )
    // persistStore(store, {storage: AsyncStorage}, () => {
    //   this.setState({ rehydrated: true })
    // })
  }

  render() {
    if (!this.state.rehydrated) {
      return <View></View>
    }
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    )
  }

}