import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";


class App extends Component{
  render(){
    return(
      <View style = {{flex: 1, backgroundColor: '#222'}}>
        
        <View style= {{flex: 1, backgroundColor: 'red'}}></View>
        <View style= {{flex: 1, backgroundColor: 'green'}}>
          <Text>Meu primeiro texto aqui</Text>
        </View>
        <View style= {{flex: 1, backgroundColor: 'yellow'}}>
          <Text>Meu primeiro texto aqui</Text>
        </View>
        <View style= {{flex: 1, backgroundColor: 'blue'}}></View>

      </View>
    );
}
}


export default App;