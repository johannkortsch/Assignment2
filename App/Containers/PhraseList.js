import React, { Component } from 'react'
import { View, ScrollView, ListView, Text, TouchableOpacity, Clipboard, TextInput, Picker, PickerItem, Alert, Share, OpenSelectDialogOptions } from 'react-native'
import { connect } from 'react-redux'

import styles from './Styles/PhraseListStyle'

class PhraseList extends Component {
  constructor (props) {
    super(props)

    const dataObjects = require ('../Fixtures/phrases.json')

    const rowHasChanged = (r1, r2) => r1 !== r2
    const sectionHeaderHasChanged = (s1, s2) => s1 !== s2

    // DataSource configured
    const ds = new ListView.DataSource({rowHasChanged, sectionHeaderHasChanged})

    // Datasource is always in state
    this.state = {
      dataSource: ds.cloneWithRowsAndSections(dataObjects),
      language1: "english",
      language2: "finish"
    }
  }
 
  
  renderRow (rowData, sectionID) {

      return (
      <TouchableOpacity style={styles.row} 
      //onPress={() => Clipboard.setString(rowData.finish)}
      onPress={() => Alert.alert(
        'Copy or Share?!',
        'Just copy & paste your QuickPhrase. Or share it directly.',
        [
          {text: 'Copy', onPress: () => Clipboard.setString(rowData.finish)},
          {text: 'Share now', onPress: () => Share.share({"title": "Finish Phrase", "message": rowData.finish})}
        ],
        { cancelable: false }
      )}
      >
        <Text style={styles.boldLabel}>{rowData.english}</Text>
        <Text style={styles.label}>{rowData.finish}</Text>
      </TouchableOpacity>
    )
  }


  /* ***********************************************************
  * STEP 4
  * If your datasource is driven by Redux, you'll need to
  * reset it when new data arrives.
  * DO NOT! place `cloneWithRowsAndSections` inside of render, since render
  * is called very often, and should remain fast!  Just replace
  * state's datasource on newProps.
  *
  * e.g.
    componentWillReceiveProps (newProps) {
      if (newProps.someData) {
        this.setState(prevState => ({
          dataSource: prevState.dataSource.cloneWithRowsAndSections(newProps.someData)
        }))
      }
    }
  *************************************************************/

  // Used for friendly AlertMessage
  // returns true if the dataSource is empty
  noRowData () {
    return this.state.dataSource.getRowCount() === 0
  }

  renderHeader (data, sectionID) {
        return <View style={styles.sectionHeader}><Text style={styles.boldLabel}>{sectionID}</Text></View>
  }

  render () {
    return (
          
      /*  <View style={styles.container}>
        <Picker
          style = {styles.picker}
          selectedValue={this.state.language1}
          onValueChange={(itemValue, itemIndex) => this.setState({language1: itemValue})}>
          <Picker.Item label="English" value="english" />
          <Picker.Item label="Finnish" value="finish" />
          <Picker.Item label="German" value="german" />
        </Picker>
        <Picker
          style = {styles.picker}
          selectedValue={this.state.language2}
          onValueChange={(itemValue, itemIndex) => this.setState({language2: itemValue})}>
          <Picker.Item label="English" value="english" />
          <Picker.Item label="Finnish" value="finish" />
          <Picker.Item label="German" value="german" />
        </Picker>
        */

        <View style={styles.container}>
        <ListView
          renderSectionHeader={this.renderHeader}
          contentContainerStyle={styles.listContent}
          dataSource={this.state.dataSource}
          onLayout={this.onLayout}
          renderRow={this.renderRow}
          //enableEmptySections
          stickySectionHeadersEnabled={true}
          //stickyHeaderIndices={[1]}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // ...redux state to props here
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PhraseList)
