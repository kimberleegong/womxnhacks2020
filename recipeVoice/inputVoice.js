import {AppRegistry} from 'react-native';
import React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Image, TouchableHighlight, Alert } from 'react-native';
import Voice from 'react-native-voice';

class inputVoice extends Component {

    constructor(props) {
        super(props)
        this.state = {
           speech: 'say this super well oof',
           recipeURL: '',
           results: [],
       };

        Voice.onSpeechResults = this.onSpeechResults.bind(this);
    }

    onSpeechResults(e){
        this.setState({
        results: e.value})
    }

  onSpeechStart(e) {
            Voice.start('en-US');
  }

  onSpeechEnd() {
             Voice.stop();
    }

   onChangeText(e){
        this.setState({recipeURL: e.value});
        Alert.alert(e.value);
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