import { StackNavigator } from 'react-navigation'
import Phrases from '../Containers/Phrases'
import PhraseList from '../Containers/PhraseList'
import PhraseList1 from '../Containers/PhraseList1'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  Phrases: { screen: Phrases },
  Dinner: {screen: Dinner},
  Greetings: {screen: Greetings},
  Flirting: {screen: Flirting},
  Greetings: {screen: Greetings},
  OTW: {screen: OTW},
  Shopping: {screen: Shopping},
  Smalltalk: {screen: Smalltalk},
  PhraseList: { screen: PhraseList },
  PhraseList1: { screen: PhraseList1 },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'Greetings',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
