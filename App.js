/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider } from "react-redux"
import configStore from "./src/store/index"
import { PersistGate } from 'redux-persist/integration/react'
// import "@configs"
import RootContainer from "./src/app"

GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest
  ? GLOBAL.originalXMLHttpRequest
  : GLOBAL.XMLHttpRequest

export default class App extends Component {
  render() {
    return (
      <Provider store={configStore.store}>
        <PersistGate persistor={configStore.persistor}>
          <RootContainer />
        </PersistGate>
      </Provider>
    );
  }
}
