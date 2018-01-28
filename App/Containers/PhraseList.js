import React, { Component } from 'react'
import { View, ListView, Text, TouchableOpacity, Clipboard, TextInput, Picker, PickerItem, Alert, Share, OpenSelectDialogOptions } from 'react-native'
import { connect } from 'react-redux'

// For empty lists
// import AlertMessage from '../Components/AlertMessage'

// Styles
import styles from './Styles/PhraseListStyle'

class PhraseList extends Component {
  constructor (props) {
    super(props)

    /* ***********************************************************
    * STEP 1
    * This is an array of objects with the properties you desire
    * Usually this should come from Redux mapStateToProps
    *************************************************************/
    const dataObjects = require ('../Fixtures/phrases.json')

    /* ***********************************************************
    * STEP 2
    * Teach datasource how to detect if rows are different
    * Make this function fast!  Perhaps something like:
    *   (r1, r2) => r1.id !== r2.id}
    *   The same goes for sectionHeaderHasChanged
    *************************************************************/
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

  /* ***********************************************************
  * STEP 3
  * `renderRow` function -How each cell/row should be rendered
  * It's our best practice to place a single component here:
  *
  * e.g.
    return <MyCustomCell title={rowData.title} description={rowData.description} />
  *************************************************************/
  
  
  renderRow (rowData, sectionID) {
    // You can condition on sectionID (key as string), for different cells
    // in different sections

    // to do: Möglichkeit finden, um rowData.language Wert aus state language1/2 zu nutzen, je nach Picker Auswahl
    // später ggf. componentWillReceiveProps für List Update

      return (
      <TouchableOpacity style={styles.row} 
      onPress={() => Clipboard.setString(rowData.finish)}
      onPress={() => Alert.alert(
        'Copied to Clipboard!',
        'Just insert your phrase whereever you want. Or share it directly.',
        [
          {text: 'Ok', onPress: () => console.log('OK Pressed')},
          {text: 'Share now', onPress: () => Share.share({"title": "Finish Phrase", "message": "{rowData.finish}"})}
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
          enableEmptySections
        />
        <TextInput style = {{backgroundColor: 'white', height: 50, flexGrow: 1, textAlign: 'center'}}/>
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
