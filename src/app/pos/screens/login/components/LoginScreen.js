import React, { Component } from 'react'
import {
  View,
  Text,
  Button
} from 'react-native'

export default class LoginScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text>Login screen</Text>
        <Button
          title={'Go go Register'}
          onPress={() => this.props.navigation.navigate('RegisterScreen')}
        />
      </View>
    )
  }
}
