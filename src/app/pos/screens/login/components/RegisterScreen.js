import React, { Component } from 'react'
import {
  View,
  Text,
  Button
} from 'react-native'

export default class RegisterScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text>Register screen</Text>
        <Button
          title={'Go back Login'}
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    )
  }
}
