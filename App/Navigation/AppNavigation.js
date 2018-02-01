import { StackNavigator } from 'react-navigation'
import Phrases from '../Containers/Phrases'
import PhraseList from '../Containers/PhraseList'
import LaunchScreen from '../Containers/LaunchScreen'
import Dinner from '../Containers/Dinner'
import Flirting from '../Containers/Flirting'
import Greetings from '../Containers/Greetings'
import OTW from '../Containers/OTW'
import Shopping from '../Containers/Shopping'
import Smalltalk from '../Containers/Smalltalk'


import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  Phrases: { screen: Phrases },
  Dinner: {screen: Dinner},
  Greetings: {screen: Greetings},
  Flirting: {screen: Flirting},
  OTW: {screen: OTW},
  Shopping: {screen: Shopping},
  Smalltalk: {screen: Smalltalk},
  PhraseList: { screen: PhraseList },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'Phrases',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
