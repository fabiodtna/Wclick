import React  from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  KeyboardAvoidingView, 
  Image, 
  TextInput,
  TouchableOpacity,
  } from 'react-native';
import { color } from 'react-native-reanimated';

export default function Login({navigation}) {

  return (
  <View style={styles.backgroud}>
      <View style={styles.containerlogo}>
          <Text style={styles.nome}>W-click{'\n\n'}</Text>
  <Text style={styles.nome}>Service </Text>
          <Image style={styles.logo} source={require('../img/logo/logo.jpg')}/>
      </View>

        <KeyboardAvoidingView style={styles.container}
        behavior={Platform.OS == "ios" && "android" ? "padding" : "height"}
        enabled   keyboardVerticalOffset={200}
        >
            
            <TextInput
            style={styles.input}
            placeholder="Email:"
            autoCorrect={false}
            onChangeText={()=> {}}
            />

            <TextInput
            style={styles.input}
            placeholder="Senha:"
            autoCorrect={false}
            secureTextEntry={true}
            onChangeText={()=> {}}
            />

            <TouchableOpacity style={styles.submit}>
                <Text style={styles.subtext}>Entrar</Text>
            </TouchableOpacity>

              <View style={{
              flexDirection:"row",
              marginTop:15
              }}>
                      <Text style={styles.Criar}  onPress={() => {
                            alert('Redirecionar Criar Conta');
                          }}>
                            Criar Conta
                      </Text>

                      <Text style={styles.Sobre}
                          onPress={() => navigation.navigate('Sobre')}>
                        Sobre
                      </Text>

              </View>
        </KeyboardAvoidingView>
  </View>
  );
}

const styles = StyleSheet.create({

  // view de tudo
  backgroud:{
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor:'#26A6A4',
  },
  
  // view logo
  containerlogo:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    marginTop:24,

  },

  // nome do app
  nome:{
    fontSize:23,
    fontStyle:'italic',
    fontWeight:'bold',
  },

  // logo do app
  logo:{
    width: 110,
    height: 110,
    borderRadius:70,
    marginLeft:40,
    borderColor:'black',
    borderWidth:7
  },

  // view dos inputs
  container:{
    flex:1.2,
    backgroundColor:'#034443',
    alignItems:'center',
    justifyContent:'center',
    width:'93%',
    marginBottom:10,
    borderRadius:27,
    marginTop:6
  },

  // 2 inputs
  input:{
    backgroundColor:"white",
    width:'90%',
    marginBottom: 15,
    marginTop:5,
    color:'#222',
    fontSize: 17,
    borderRadius:10,
    padding:10,
   
  },

  // submit 
  submit:{
    backgroundColor:'#1E67AA',
    width:'40%',
    padding:5,
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 7,

  },

  // texto submit
  subtext:{
    color:'#fff',
    fontSize: 18,
    fontWeight:'bold'

  },

  //  text Criar conta
  Criar:{
    fontWeight:'bold',
    color:'#fff',
    marginRight:80,
    fontSize:15
  },

  // text Sobre
  Sobre:{
    fontWeight:'bold',
    color:'#fff',
    marginLeft:80,
    fontSize:15
  }

});
