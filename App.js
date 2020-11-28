import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



import Login from './src/wclick/login';
import Sobre from './src/wclick/sobre';
import Home from './src/wclick/apptoken/Home';
import CriarAnuncio from './src/wclick/apptoken/CriarAnuncio';
import Anuncio from './src/wclick/apptoken/Anuncio';
import Chat from './src/wclick/apptoken/Chat'
import Cadastro from './src/wclick/Cadastro';


export default function App() {

    const Stack = createStackNavigator();


  return (
          <NavigationContainer>
              <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} options={{headerShown:false,}}/>
                <Stack.Screen name="Cadastro" component={Cadastro} options={{
                  title: 'Cadastre-se',
                  headerStyle: {
                    backgroundColor: '#034443',
                  },
                  headerTitleAlign:'center',
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
                }}/>
                
                <Stack.Screen name="Sobre" component={Sobre}options={{
                  title: 'Sobre',
                  headerStyle: {
                    backgroundColor: '#034443',
                  },
                  headerTitleAlign:'center',
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
                }}/>

                <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
                <Stack.Screen name="CriarAnuncio" component={CriarAnuncio} options={{headerShown:false}}/>
                <Stack.Screen name="Anuncio" component={Anuncio} options={{headerShown:false}}/>
                <Stack.Screen name="Chat" component={Chat} options={{headerShown:false}}/>
              </Stack.Navigator>
          </NavigationContainer>
  );
}

