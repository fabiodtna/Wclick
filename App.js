import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Image, StyleSheet} from 'react-native';

import Home from './logo';
import Login from './src/wclick/login';
import Sobre from './src/wclick/sobre';

export default function App() {

    const Stack = createStackNavigator();


  return (
          <NavigationContainer>
              <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
                <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
                <Stack.Screen name="Sobre" component={Sobre} options={<Image source={require('./src/img/logo/logo.jpg')} style={{
                  width:40,
                  height:40,
                }} />}/>
              </Stack.Navigator>
          </NavigationContainer>
  );
}

