import React, { Component } from 'react'
import { View, StatusBar, Text } from 'react-native'
import ReduxNavigation from '../navigation/ReduxNavigation'
import { connect } from 'react-redux'
import ReduxPersist from '../configs/ReduxPersist'
import LoginScreen from './pos/screens/login/components/LoginScreen'

export default class RootContainer extends Component {
  render () {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle='light-content' />
        <ReduxNavigation />
      </View>
    )
  }
}

