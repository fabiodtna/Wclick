import React  from 'react';
import { 
  Text, 
  View, 
  KeyboardAvoidingView, 
  Image, 
  TextInput,
  TouchableOpacity,
  } from 'react-native';  
  import { color } from 'react-native-reanimated'; // animação dps
  import { css2 } from '../css/css2';

export default function Login({navigation}) {

  return (
  <View style={css2.backgroud}>
      <View style={css2.containerlogo}>
          <Text style={css2.nome}>W-click{'\n\n'}</Text>
  <Text style={css2.nome}>Service </Text>
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
            onChangeText={()=> {}}
            />

            <TextInput
            style={css2.input}
            placeholder="Senha:"
            autoCorrect={false}
            placeholderTextColor="black"
            secureTextEntry={true}
            onChangeText={()=> {}}
            />

            <TouchableOpacity style={css2.submit} onPress={() => navigation.navigate('Home')}>
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