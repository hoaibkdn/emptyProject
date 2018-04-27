import { StackNavigator } from 'react-navigation'
import LoginScreen from './../app/pos/screens/login/components/LoginScreen'
import RegisterScreen from './../app/pos/screens/login/components/RegisterScreen'
import { Easing, Animated } from 'react-native'
// import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const AppNavigation = StackNavigator({
  LoginScreen: { screen: LoginScreen },
  RegisterScreen: { screen: RegisterScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LoginScreen'
})

export default AppNavigation
