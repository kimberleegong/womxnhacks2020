import {AppRegistry} from 'react-native';
import React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Image, TouchableHighlight, Alert } from 'react-native';
import Voice from 'react-native-voice';
import Tts from 'react-native-tts';
Tts.setDefaultLanguage('en-US');

class inputVoice extends Component {

    constructor(props) {
        super(props)
        this.state = {
           foo: 'cheese',
           recipeURL: '',
           results: [],
           instructions: ['Fake instructions','do some stuff', 'crack 3 eggs'],
           currentInstruction: 0,
       };

        Voice.onSpeechResults = this.onSpeechResults.bind(this);
    }

    onSpeechResults(e){

        this.setState({
        results: e.value})

               for(let i = 0; i < e.value.length; i++){
                      if(e.value[i] == 'back' || e.value[i] == 'go back' || e.value[i] == 'go back'){
                        Alert.alert('oh');
                      }
                      if(e.value[i] == 'next' || e.value[i] == 'skip'){
                                              Alert.alert('oh');
                      }
               }

    }

  onSpeechStart(e) {

//            for(let i = 0; i < this.state.instructions; i++){
//                Alert.alert('vaya')
//            }
            Voice.start('en-US');


  }

  onSpeechEnd() {
             Voice.stop();
    }

   onChangeText(e){
        this.setState({recipeURL: e.value});

   }

   readInstruction(i){
    Tts.speak(i)
   }



  render() {


     return(
       <View>
            <TextInput
                  style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                  onChangeText={(recipeURL) => this.setState({recipeURL})}
                  placeholder='Enter URL'
                  value={this.state.recipeURL}
                />
            <Button
                      title="Start"
                      onPress={this.onSpeechStart.bind()}
                    />
             <Button
                       title="Stop"
                       onPress={this.onSpeechEnd.bind()}
                                        />


              {this.state.results.map( (text, index) => {
              return(
                <Text key = {index}>{text}</Text>
              )

              })}

        </View>

        )

      }

}


AppRegistry.registerComponent('inputVoice', () => inputVoice);

export default inputVoice;