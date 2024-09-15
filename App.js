import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";


class App extends Component{
  render(){
    return(
      <View style = {{flex: 1, flexDirection: 'collum', 
                
                //  justificando a coluna
                      alignItems: 'stretch',
                      
                      backgroundColor: 'white'}}>
        
        <View style= {{height: 50, backgroundColor: 'green'}}></View>
        <View style= {{height: 50, backgroundColor: 'red'}}></View>
        <View style= {{height: 50, backgroundColor: 'yellow'}}></View>
        <View style= {{height: 50, backgroundColor: 'green'}}></View>



      </View>
    );
}
}


export default App;