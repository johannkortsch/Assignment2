import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
    container: {
    flex: 1,
    backgroundColor: Colors.background
  },
  row: {
    width: Metrics.screenWidth - Metrics.doubleBaseMargin,
    // width: Metrics.screenWidth / 2 - Metrics.doubleBaseMargin,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    margin: Metrics.baseMargin,
    backgroundColor: Colors.phrase,
    borderRadius: Metrics.smallMargin,
  },
  sectionHeader: {
    paddingTop: Metrics.doubleBaseMargin,
    width: Metrics.screenWidth,
    alignSelf: 'center',
    margin: Metrics.baseMargin,
    backgroundColor: Colors.background,
  },
  boldLabel: {
    fontWeight: 'bold',
    alignSelf: 'center',
    color: Colors.text,
    textAlign: 'center',
    marginTop: Metrics.smallMargin,
    marginBottom: Metrics.smallMargin,
    fontSize: 16,
  },
  AppTitle: {
    fontWeight: 'bold',
    alignSelf: 'center',
    color: Colors.text,
    textAlign: 'center',
    marginTop: Metrics.baseMargin,
    marginBottom: Metrics.baseMargin,
    fontSize: 20,
  },
  label: {
    alignSelf: 'center',
    color: Colors.text,
    textAlign: 'center'
  },
  listContent: {
    justifyContent: 'space-around',
    //flexDirection: 'row',
    flexWrap: 'wrap'
  },
  //bearbeiten: evtl  mit: <Item label="blue" color="blue" value="blue" />
  picker: {
    backgroundColor: Colors.frost,
  }
})
