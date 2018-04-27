import React, { Component } from 'react'
import { View, StatusBar, Text } from 'react-native'
import ReduxNavigation from '../navigation/ReduxNavigation'
import { connect } from 'react-redux'
// import StartupActions from '../Redux/StartupRedux'
import ReduxPersist from '../configs/ReduxPersist'
import LoginScreen from './pos/screens/login/components/LoginScreen'

// Styles
// import styles from './Styles/RootContainerStyles'

export default class RootContainer extends Component {
  // componentDidMount () {
  //   // if redux persist is not active fire startup action
  //   if (!ReduxPersist.active) {
  //     this.props.startup()
  //   }
  // }

  render () {
    return (
      <View>
        <StatusBar barStyle='light-content' />
        <ReduxNavigation />
      </View>
    )
  }
}

// wraps dispatch to create nicer functions to call within our component
// const mapDispatchToProps = (dispatch) => ({
//   startup: () => dispatch(StartupActions.startup())
// })

// export default connect(null, mapDispatchToProps)(RootContainer)
