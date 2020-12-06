import React, { useState, useEffect, Component } from 'react';
import { AsyncStorage } from 'react-native';
import { 
  Text, 
  View, 
  KeyboardAvoidingView, 
  Image, 
  TextInput,
  TouchableOpacity,
  Alert

  } from 'react-native';  
  import { color } from 'react-native-reanimated'; // animação dps
  import { css2 } from '../css/css2';

export default function Login({navigation}) {

  const[user, setUser] =  useState(null);
  const[password, setPassword] =  useState(null);
  const[login,setLogin] = useState();
  

  const usersenha = () =>
  Alert.alert(
    "Falhou",
    "Usuario e senha incorreto!",
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "OK", onPress: () => {} }
    ],
    { cancelable: false }
  );    


  async function sendForm(){

    let response=await fetch('http:/10.0.0.108:3333/login',{

      method: 'POST',
      headers:{
        accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: user,
        senha: password
      })
    });

    let json =await response.json();
    if(json === 'error'){
      usersenha();
      await AsyncStorage.clear();
    }else{
     let userData = await AsyncStorage.setItem('userData', JSON.stringify(json));
     navigation.navigate('Home');
    }
  }

  return (
  <View style={css2.backgroud}>
      <View style={css2.containerlogo}>
          <Text style={css2.nome}>W-click{'\n\n'}</Text>
  <Text style={css2.nome}>Service  </Text>
          <Image style={css2.logo} source={require('../img/logo/logo.jpg')}/>
      </View>

        <KeyboardAvoidingView style={css2.container}
        behavior={Platform.OS == "ios" && "android" ? "padding" : "height"}
        enabled   keyboardVerticalOffset={200}
        >
            
            <TextInput
            style={css2.input}
            placeholder="Email:"
            autoCorrect={false}
            placeholderTextColor="black"
            onChangeText={text=>setUser(text)}
            />

            <TextInput
            style={css2.input}
            placeholder="Senha:"
            autoCorrect={false}
            placeholderTextColor="black"
            secureTextEntry={true}
            onChangeText={text=>setPassword(text)}
            />

            <TouchableOpacity style={css2.submit} onPress={() => sendForm()}>
                <Text style={css2.subtext}>Entrar</Text>
            </TouchableOpacity>

              <View style={{
              flexDirection:"row",
              marginTop:15
              }}>
                      <Text style={css2.Criar}
                          onPress={() => navigation.navigate('Cadastro') }>
                            Criar Conta
                      </Text>

                      <Text style={css2.Sobre}
                          onPress={() => navigation.navigate('Sobre')}>
                        Sobre
                      </Text>

              </View>
        </KeyboardAvoidingView>
  </View>
  );
}