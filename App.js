import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      nome: ' '
    };
    this.pegaNome = this.pegaNome.bind(this);
  }

  pegaNome(texto){
    this.setState({nome: texto})
  }

  render(){
    return(
      <View>
        <TextInput style = {styles.input}
        placeholder="Digite seu nome"
        underlineColorAndroid='transparent'
        onChangeText={this.pegaNome}
        />
        <Text style= {styles.texto}>
            Bem vindo: {this.state.nome}
          </Text>

      </View>
    );
}
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  texto:{
    display: 'flex',
    textAlign: 'center',
    fontSize: 20,
  },
  input:{
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    marginTop: 56,
    fontSize: 20,
    padding: 10,
  },
});

export default App;