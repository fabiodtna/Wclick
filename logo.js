
import React from 'react';
import { Image, ImageBackground , Text, View, Button } from 'react-native';
import {css} from './src/css/css';

export default function Home({navigation}) 
{
    
    return(

    <ImageBackground source={require('./src/img/inicial.png')} style={{
        flex: 1,
        width: null,
        height: null,
      }}>
          <View style={css.container}>
            <Image source={require('./src/img/logo/logo.jpg')} style={{
            width: 130,
            height: 130,
            borderRadius:100,
            borderColor:'black',
            borderWidth:7,
            }}/>
            <Text style={css.nome}>W-click</Text>
            <Text style={css.sobnome}>Service</Text>

            <Button title='Bem-Vindo' onPress={() => navigation.navigate('Login')}/>
    
      </View>
      </ImageBackground>
    );    

}