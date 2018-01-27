import { StackNavigator } from 'react-navigation'
import PhraseList from '../Containers/PhraseList'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  PhraseList: { screen: PhraseList },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'PhraseList',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
