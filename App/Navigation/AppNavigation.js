import { StackNavigator } from 'react-navigation'
import PhraseList from '../Containers/PhraseList'
import PhraseList1 from '../Containers/PhraseList1'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  PhraseList: { screen: PhraseList },
  PhraseList1: { screen: PhraseList1 },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'PhraseList1',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
