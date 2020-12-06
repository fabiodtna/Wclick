import React,  {useState, useEffect} from 'react'
import { 
    View, 
    Text, 
    Image, 
    ScrollView, 
    TouchableOpacity} from 'react-native'

import { cssA } from '../../css/cssA';
import MapView from 'react-native-maps';

export default function Anuncio({navigation}){
  
    return (
        <View style={cssA.containerPrincipal}>
            <ScrollView>
            <View style={cssA.container1}>
                <View style={{flexDirection:'row', marginTop:'5%'}}>
                    <Image style={cssA.fotoUser}
                    source={require('../../img/avatar/defalt.png')}/> 
                    <Text style={cssA.User}>{global.nameuser} </Text>
                </View>
            
                <View style={cssA.Mensag}>
                    <ScrollView>
                        <Text
                        style={cssA.textoD}>
                            {global.postdesc}</Text>
                         <Text>{global.postend}</Text>
                    </ScrollView>
                    
                    <View style={{flexDirection:'row',}}>
                        <Image style={cssA.imageC} source={require('../../img/logo/image.png')}/>
                        <Image style={cssA.imageC} source={require('../../img/logo/image.png')}/>
                        <Image style={cssA.imageC} source={require('../../img/logo/image.png')}/>
                    </View>
                </View>
                <TouchableOpacity style={cssA.butaoM}
                onPress={() => navigation.navigate('Chat')}>
                    <Text>Proposta</Text>
                </TouchableOpacity>
            </View>
                
                <View style={cssA.container2}>
                <Image style={cssA.maps} source={require('../../img/maps.jpg')}/>

                </View>

                <View style={cssA.containerbuton}>
                    <TouchableOpacity style={cssA.voltar}>
                        <Text style={cssA.Tvoltar}>voltar</Text>
                    </TouchableOpacity>
                </View>
                </ScrollView>
        </View>
    )
}