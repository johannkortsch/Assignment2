import React from 'react'
import { Button, View, SectionList, Text, TouchableOpacity, Alert, Clipboard, Share, Animated} from 'react-native'
import { connect } from 'react-redux'


import styles from './Styles/PhraseListStyle'
import index from 'axios';

class Phrases extends React.PureComponent {

    static navigationOptions = {
        title: 'Greetings',
      };

  state = {
    category: 'All',
  
  }

  renderItem ({section, item}) {
    return (
      <TouchableOpacity style={styles.row} 
      onPress={() => Alert.alert(
        item.finish,'',
    
        [
          {text: 'Copy', onPress: () => Clipboard.setString(item.finish)},
          {text: 'Share now', onPress: () => Share.share({"title": "Finish Phrase", "message": item.finish})},
          {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'destructive'},
        ],
        { cancelable: true }
      )}
      >
        <Text style={styles.boldLabel}>{item.english}</Text>
        <Text style={styles.label}>{item.finish}</Text>
      </TouchableOpacity>
    )
  }

  renderSectionHeader ({section}) {
        return <View style={styles.sectionHeader}><Text style={styles.boldLabel}>{section.key}</Text></View>
  
    }
  
    press = (x) => {
      this.setState({category: x})
      //Phrases.state.category=x;
      //this.forceUpdate();
      console.log(this.state.category)
    }

    categorySwitch = (category) => {
      switch(category){
        case 'All': return AllSections
        case 'Greeting': return greetingSection
        case 'Smalltalk': return smalltalkSection
        case 'Flirting': return flirtingSection
        case 'On the way': return otwSection
        case 'Dinner': return dinnerSection
        case 'Shopping': return shoppingSection
        default: return AllSections
      }
      //return smalltalkSection
    }


  // Render a header?
  renderHeader = () =>
    <Text style={[styles.label, styles.sectionHeader]}> - Full List Header - </Text>

  // Render a footer?
  renderFooter = () =>
    <Text style={[styles.label, styles.sectionHeader]}> - Full List Footer - </Text>

  // Does each section need a footer?
  renderSectionFooter = () =>
    <Text style={styles.label}> END SECTION!!!! </Text>

  // Show this when data is empty
  renderEmpty = () =>
    <Text style={styles.label}> - Nothing to See Here - </Text>

  renderSeparator = () =>
    <Text style={styles.label}> - ~~~~~ - </Text>

  renderSectionSeparator = () =>
    <Text style={styles.label}> \/\/\/\/\/\/\/\/ </Text>

  // The default function if no Key is provided is index
  // an identifiable key is important if you plan on
  // item reordering.  Otherwise index is fine
  keyExtractor = (item, index) => index

  // How many items should be kept im memory as we scroll?
  oneScreensWorth = 20


  render () {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <SectionList
          //ref={(ref) => { this.phraseListRef = ref; }}
          renderSectionHeader={this.renderSectionHeader}
  
          sections={
            this.state.category === 'All' ? AllSections : smalltalkSection
            
            /*
            switch(category){
              case 'All': return AllSections
              case 'Greeting': return greetingSection
              case 'Smalltalk': return smalltalkSection
              case 'Flirting': return flirtingSection
              case 'On the way': return otwSection
              case 'Dinner': return dinnerSection
              case 'Shopping': return shoppingSection
              default: return AllSections
            }
            */
            //this.categorySwitch(this.state.category)
          }
          contentContainerStyle={styles.listContent}
          data={this.state.dataObjects}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
          initialNumToRender={this.oneScreensWorth}
          //ListHeaderComponent={this.renderHeader}
          //SectionSeparatorComponent={this.renderSectionSeparator} 
          //ListFooterComponent={this.renderFooter}
          ListEmptyComponent={this.renderEmpty}
          //ItemSeparatorComponent={this.renderSeparator}
          //renderSectionFooter={this.renderSectionFooter}
        />
        <View style={styles.menu}>

       <Button style={styles.Button}
         onPress={this.press.bind('All')}
         title="S"
         color="#000000"
         accessibilityLabel="All"
       />
       <Button style={styles.Button}
        onPress={this.press.bind('Greeting')}
        //onPress={console.log('Cancel Pressed')}
         title = "G"
         color="#000000"
         accessibilityLabel="Greeting"
       />
       <Button style={styles.Button}
         onPress={this.press.bind('Smalltalk')}
         title="S"
         color="#000000"
         accessibilityLabel="Smalltalk"
       />
       <Button style={styles.Button}
         onPress={this.press.bind('Flirting')}
         title="F"
         color="#000000"
         accessibilityLabel="Flirting"
       />
       <Button style={styles.Button}
         onPress={this.press.bind('On the way')}
         title="O"
         color="#000000"
         accessibilityLabel="On the way"
       />
       <Button style={styles.Button}
         onPress={this.press.bind('Dinner')}
         title="D"
         color="#000000"
         accessibilityLabel="Dinner"
       />
       <Button style={styles.Button}
         onPress={this.press.bind('Shopping')}
         title="S"
         color="#000000"
         accessibilityLabel="Shopping"
       />
       
       </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(Phrases)

const greetingSection = [
  {
    key: "Greetings / Goodbyes",
    data: [
      {
        english: "Hello!",
        finish:"Hei!"
    },
    {
        english:"Hello!",
        finish:"Terve!"
    },
    {
        english:"Hi!",
        finish:"Moi!",
    },
    {
        english:"Welcome!",
        finish:"Tervetuloa!"
    },
    {
        english:"Morning!",
        finish:"Huomenta!"
    },
    {
        english:"Good morning!",
        finish:"Hyvää huomenta!"
    },
    {
        english:"Good afternoon!",
        finish:"Hyvää päivää!"
    },
    {
        english:"Good evening!",
        finish:"Hyvää iltaa!"
    },
    {
        english:"Good night!",
        finish:"Hyvää yötä!"
    },
    {
        english:"Goodbye!",
        finish:"Näkemiin!"
    },
    {
        english:"See you tomorrow!",
        finish:"Nähdään huomenna!"
    }
    ]
  }
]
const smalltalkSection = [
  {
    key: "Smalltalk",
    data: [
      {
        english:"Excuse me!",
        finish:"Anteeksi!"
    },
    {
        english:"How are you?",
        finish:"Kuka sinä olet?"
    },
    {
        english:"I'm fine, thank you.",
        finish:"Minulle kuuluu hyvää, kiitos.",
        "german":"Mir geht es gut, danke!"
    },
    {
        english:"How about you?",
        finish:"Entä sinulle?",
        "german":"Und dir?"
    },
    {
        english:"Quite alright, thank you.",
        finish:"Ihan hyvää, kiitos.",
        "german":"Ganz gut, danke."
    },
    {
        english:"How old are you?",
        finish:"Kuinka vanha sinä olet?",
        "german":"Wie alt bist du?"
    },
    {
        english:"I'm...years old.",
        finish:"Olen...vuotta vanha.",
        "german":"Ich bin...Jahre alt."
    },
    {
        english:"What is your name?",
        finish:"Mikä sinun nimi on?",
        "german":"Wie ist dein Name?"
    },
    {
        english:"My name is...",
        finish:"Minun nimi on...",
        "german":"Mein Name ist..."
    }
    ]
  }
]
const flirtingSection = [
  {
    key: "Flirting",
    data: [
      {
        english:"May I give you a drink?",
        finish:"Voinko tarjota jotain juotavaa?"
    },
    {
        english:"What are your plans for tonight?",
        finish:"Onko sinulla suunnitelmia täksi illaksi?"
    },
    {
        english:"Would you like to go out for lunch/dinner with me?",
        finish:"Haluaisitko lounastaa/lähteä illalliselle kanssani joskus?"
    },
    {
        english:"You look gorgeous!",
        finish:"Näytät upealta!"
    },
    {
        english:"You are funny!",
        finish:"Olet hauska!"
    },
    {
        english:"You have beautiful eyes!",
        finish:"Sinulla on kauniit silmät!"
    },
    {
        english:"Do you wanna dance?",
        finish:"Haluatko tanssia?"
    },
    {
        english:"Would you like to watch a movie with me?",
        finish:"Haluaisitko katsoa elokuvan luonani?"
    },
    {
        english:"To me or to you?",
        finish:"Meille vai teille?"
    },
    {
        english:"Do you have plans for tonight?",
        finish:"Onko sinulla suunnitelmia täksi illaksi?"
    },
    {
        english:"Would you like to come in for a coffee?",
        finish:"Haluaisitko tulla vielä kahville?"
    },
    {
        english:"Thank you for the nice evening, good night!",
        finish:"Kiitos ihanasta illasta! Hauskaa loppuiltaa!"
    },
    {
        english:"It was nice talking to you!",
        finish:"Oli todella mukavaa jutella kanssasi!"
    }
    ]
  }
]
const otwSection = [
  {
    key: "On the Way",
    data: [
      {
        english:"I'm lost.",
        finish:"Olen eksyksissä."
    },
    {
        english:"Can you show me on the card where to go?",
        finish:"Voisitko näyttää kartalta missä sen on?"
    },
    {
        english:"Where can I find a toilet?",
        finish:"Mistä täällä on WC?"
    },
    {
        english:"Where can I find a bank/exchange office?",
        finish:"Mistä täällä on pankki / rahanvaihtopiste?"
    },
    {
        english:"Could you recommend a good restaurant?",
        finish:"Onko lähistöllä jokin hyvää ravintola?"
    },
     {
         english:"Where can I buy a train ticket?",
         finish:"Mistä voin ostaa bussi-/junalipun?"
     }
    ]
  }
]
const dinnerSection = [
  {
    key: "Going out for Dinner",
    data: [
      {
        english:"I would like to reserve a table for [amount] people around [time].",
        finish:"Haluaisin varata pöydän _[ihmisten määrä]_ henkilölle."
    },
    {
        english:"A table for[amount] persons, please.",
        finish:"Pöytä _[ihmisten määrä]_, kiitos."
    },
    {
        english:"Can I pay by credit card?",
        finish:"Hyväksyttekö luottokortin?"
    },
    {
        english:"Do you also have vegetarian food on offer?",
        finish:"Onko teillä kasvisruokaa?"
    },
    {
        english:"Can I have the menu, please?",
        finish:"Voisinko nähdä ruokalistan?"
    },
    {
        english:"Excuse me, we would like to order, please.",
        finish:"Anteeksi, haluaisimme tilata."
    },
    {
        english:"What can you recommend from the menu?",
        finish:"Mitä suosittelet ruokalistalta?" 
    },
    {
        english:"We would like to pay, please.",
        finish:"Saisimmeko laskun, kiitos?"
    },
    {
        english:"The food was very delicious!",
        finish:"Ruoka oli herkullista!"
    }
    ]
  }
]
const shoppingSection = [
  {
    key: "Going Shopping",
    data: [
      {
        english:"I am just looking around.",
        finish:"Katselen vain."
    },
    {
        english:"How much is it?",
        finish:"Paljonko tämä maksaa?"
    },
    {
        english:"When do you open/close?",
        finish:"Mihin aikaan avaatte / suljette?"
    },
    {
        english:"I will buy it.",
        finish:"Ostan sen."
    },
    {
        english:"Can I pay by credit card?",
        finish:"Hyväksyttekö luottokortin?"
    },
    {
        english:"Can I have the receipt, please?",
        finish:"Saisinko kuitin, kiitos?"
    },
    {
        english:"Can I have a bag please?",
        finish:"Saisinko kassin, kiitos?"
    },
    {
        english:"I would like to return this.",
        finish:"Haluaisin palauttaa tämän."
    },
    {
        english:"Can I try it once?",
        finish:"Voisinko sovittaa tätä?"
    },
    {
        english:"Where are the changing rooms?",
        finish:"Mistä löydän sovituskopit?"
    },
    {
        english:"It is too small.",
        finish:"Se on liian pieni."
    },
    {
        english:"It is too big.",
        finish:"Se on liian iso."
    },
    {
        english:"Does it look well on me?",
        finish:"Näyttääkö tämä hyvältä päälläni?"
    }
    ]
  }
]
const AllSections = [
  {
    key: "Greetings / Goodbyes",
    data: [
      {
        english: "Hello!",
        finish:"Hei!"
    },
    {
        english:"Hello!",
        finish:"Terve!"
    },
    {
        english:"Hi!",
        finish:"Moi!",
    },
    {
        english:"Welcome!",
        finish:"Tervetuloa!"
    },
    {
        english:"Morning!",
        finish:"Huomenta!"
    },
    {
        english:"Good morning!",
        finish:"Hyvää huomenta!"
    },
    {
        english:"Good afternoon!",
        finish:"Hyvää päivää!"
    },
    {
        english:"Good evening!",
        finish:"Hyvää iltaa!"
    },
    {
        english:"Good night!",
        finish:"Hyvää yötä!"
    },
    {
        english:"Goodbye!",
        finish:"Näkemiin!"
    },
    {
        english:"See you tomorrow!",
        finish:"Nähdään huomenna!"
    }
    ]
  },
  {
    key: "Smalltalk",
    data: [
      {
        english:"Excuse me!",
        finish:"Anteeksi!"
    },
    {
        english:"How are you?",
        finish:"Kuka sinä olet?"
    },
    {
        english:"I'm fine, thank you.",
        finish:"Minulle kuuluu hyvää, kiitos.",
        "german":"Mir geht es gut, danke!"
    },
    {
        english:"How about you?",
        finish:"Entä sinulle?",
        "german":"Und dir?"
    },
    {
        english:"Quite alright, thank you.",
        finish:"Ihan hyvää, kiitos.",
        "german":"Ganz gut, danke."
    },
    {
        english:"How old are you?",
        finish:"Kuinka vanha sinä olet?",
        "german":"Wie alt bist du?"
    },
    {
        english:"I'm...years old.",
        finish:"Olen...vuotta vanha.",
        "german":"Ich bin...Jahre alt."
    },
    {
        english:"What is your name?",
        finish:"Mikä sinun nimi on?",
        "german":"Wie ist dein Name?"
    },
    {
        english:"My name is...",
        finish:"Minun nimi on...",
        "german":"Mein Name ist..."
    }
    ]
  },
  {
    key: "Flirting",
    data: [
      {
        english:"May I give you a drink?",
        finish:"Voinko tarjota jotain juotavaa?"
    },
    {
        english:"What are your plans for tonight?",
        finish:"Onko sinulla suunnitelmia täksi illaksi?"
    },
    {
        english:"Would you like to go out for lunch/dinner with me?",
        finish:"Haluaisitko lounastaa/lähteä illalliselle kanssani joskus?"
    },
    {
        english:"You look gorgeous!",
        finish:"Näytät upealta!"
    },
    {
        english:"You are funny!",
        finish:"Olet hauska!"
    },
    {
        english:"You have beautiful eyes!",
        finish:"Sinulla on kauniit silmät!"
    },
    {
        english:"Do you wanna dance?",
        finish:"Haluatko tanssia?"
    },
    {
        english:"Would you like to watch a movie with me?",
        finish:"Haluaisitko katsoa elokuvan luonani?"
    },
    {
        english:"To me or to you?",
        finish:"Meille vai teille?"
    },
    {
        english:"Do you have plans for tonight?",
        finish:"Onko sinulla suunnitelmia täksi illaksi?"
    },
    {
        english:"Would you like to come in for a coffee?",
        finish:"Haluaisitko tulla vielä kahville?"
    },
    {
        english:"Thank you for the nice evening, good night!",
        finish:"Kiitos ihanasta illasta! Hauskaa loppuiltaa!"
    },
    {
        english:"It was nice talking to you!",
        finish:"Oli todella mukavaa jutella kanssasi!"
    }
    ]
  },
  {
    key: "On the Way",
    data: [
      {
        english:"I'm lost.",
        finish:"Olen eksyksissä."
    },
    {
        english:"Can you show me on the card where to go?",
        finish:"Voisitko näyttää kartalta missä sen on?"
    },
    {
        english:"Where can I find a toilet?",
        finish:"Mistä täällä on WC?"
    },
    {
        english:"Where can I find a bank/exchange office?",
        finish:"Mistä täällä on pankki / rahanvaihtopiste?"
    },
    {
        english:"Could you recommend a good restaurant?",
        finish:"Onko lähistöllä jokin hyvää ravintola?"
    },
     {
         english:"Where can I buy a train ticket?",
         finish:"Mistä voin ostaa bussi-/junalipun?"
     }
    ]
  },
  {
    key: "Going out for Dinner",
    data: [
      {
        english:"I would like to reserve a table for [amount] people around [time].",
        finish:"Haluaisin varata pöydän _[ihmisten määrä]_ henkilölle."
    },
    {
        english:"A table for[amount] persons, please.",
        finish:"Pöytä _[ihmisten määrä]_, kiitos."
    },
    {
        english:"Can I pay by credit card?",
        finish:"Hyväksyttekö luottokortin?"
    },
    {
        english:"Do you also have vegetarian food on offer?",
        finish:"Onko teillä kasvisruokaa?"
    },
    {
        english:"Can I have the menu, please?",
        finish:"Voisinko nähdä ruokalistan?"
    },
    {
        english:"Excuse me, we would like to order, please.",
        finish:"Anteeksi, haluaisimme tilata."
    },
    {
        english:"What can you recommend from the menu?",
        finish:"Mitä suosittelet ruokalistalta?" 
    },
    {
        english:"We would like to pay, please.",
        finish:"Saisimmeko laskun, kiitos?"
    },
    {
        english:"The food was very delicious!",
        finish:"Ruoka oli herkullista!"
    }
    ]
  },
  {
    key: "Going Shopping",
    data: [
      {
        english:"I am just looking around.",
        finish:"Katselen vain."
    },
    {
        english:"How much is it?",
        finish:"Paljonko tämä maksaa?"
    },
    {
        english:"When do you open/close?",
        finish:"Mihin aikaan avaatte / suljette?"
    },
    {
        english:"I will buy it.",
        finish:"Ostan sen."
    },
    {
        english:"Can I pay by credit card?",
        finish:"Hyväksyttekö luottokortin?"
    },
    {
        english:"Can I have the receipt, please?",
        finish:"Saisinko kuitin, kiitos?"
    },
    {
        english:"Can I have a bag please?",
        finish:"Saisinko kassin, kiitos?"
    },
    {
        english:"I would like to return this.",
        finish:"Haluaisin palauttaa tämän."
    },
    {
        english:"Can I try it once?",
        finish:"Voisinko sovittaa tätä?"
    },
    {
        english:"Where are the changing rooms?",
        finish:"Mistä löydän sovituskopit?"
    },
    {
        english:"It is too small.",
        finish:"Se on liian pieni."
    },
    {
        english:"It is too big.",
        finish:"Se on liian iso."
    },
    {
        english:"Does it look well on me?",
        finish:"Näyttääkö tämä hyvältä päälläni?"
    }
    ]
  }
]
