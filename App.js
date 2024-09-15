import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";


class App extends Component{
  render(){
    return(
      <View style = {{flex: 1, backgroundColor: '#222'}}>
        
        <View style= {{height: 65, backgroundColor: '#222'}}></View>
        <View style= {{flex: 1, backgroundColor: 'white'}}></View>
        <View style= {{height: 65, backgroundColor: '#222'}}>
        </View>

      </View>
    );
}
}


export default App;