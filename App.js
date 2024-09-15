import React, { Component } from "react";
import { View, Text, Button } from "react-native";


class App extends Component{
  
  constructor(props){
    super(props);
    this.state = {
      nome: ''
    };
    // Deixar a função acessivel para todas as propriedades
    this.entrar = this.entrar.bind(this);
  }

  entrar(nome){
    this.setState({
      nome: nome
    })
  }
  
  render(){
    return(
      <View style = {{marginTop: 150}}>
        {/* Pode se criar uma função anonima ou pode acessar
            uma função externa, primeiro se cria no construtor
            para pode ter acesso;
         */}
        <Button title="Entrar" onPress={() => this.entrar('Algum texto')}/>

        <Text style = {{fontSize: 45, color: 'red', textAlign: 'center', justifyContent: 'center'}}>
            {this.state.nome}
        </Text>

      </View>
    );
}
}

export default App;