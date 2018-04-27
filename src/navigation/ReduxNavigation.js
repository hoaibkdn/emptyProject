import React, { Component } from 'react'
import { addNavigationHelpers } from 'react-navigation'
import { connect } from 'react-redux'
import AppNavigation from './AppNavigation'
import LoginScreen from './../app/pos/screens/login/components/LoginScreen'
// import { addListener } from './../store/ConfigStore'
import {
	createReduxBoundAddListener,
} from 'react-navigation-redux-helpers'


// const addListener = createReduxBoundAddListener("root")
class ReduxNavigation extends Component {
  render() {
    const addListener = createReduxBoundAddListener('root')
    const { dispatch, nav } = this.props
    const navigation = addNavigationHelpers({
      dispatch,
      state: nav,
      addListener
    })

    console.log('navigation ', navigation)
    return <AppNavigation navigation={navigation}/>
  }
}

const mapStateToProps = state => ({ nav: state.nav })
export default connect(mapStateToProps)(ReduxNavigation)
