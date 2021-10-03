import * as React from 'react';
import {Text , View , Button, TouchableOpacity } from 'react-native'
import {Audio} from "expo-av"

class SoundBUTTON extends React.Component {
  hear=async()=>{
    await Audio.Sound.createAsync(
    {
      uri:"http://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3"
    }
    ,
    {
      shouldPlay: true
    }
    )
  }
  render(){
    return(
      <TouchableOpacity onPress={this.hear} style={{marginTop:50, width:200, height:200, borderWidth:20 ,borderRadius:100, backgroundColor:"lightblue", justifyContent:"center" }}>
        <Text style={{textAlign:"center", fontSize:30}}>
        Beep!!!!
        </Text>
        </TouchableOpacity>
    )
  }
}


export default class App extends React.Component {
  render(){
    return(
      <View >
        <SoundBUTTON/>
        
      </View>
    )
  }
 }