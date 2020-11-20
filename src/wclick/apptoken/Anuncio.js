import React from 'react'
import { 
    View, 
    Text, 
    Image, 
    ScrollView, 
    TouchableOpacity} from 'react-native'

import { cssA } from '../../css/cssA';
import MapView from 'react-native-maps';

export default function CriarAnuncio({navigation}){
    return (
        <View style={cssA.containerPrincipal}>
            <TouchableOpacity  onPress={() => navigation.navigate('Home')}>
                <Image style={cssA.seta}
                source={require('../../img/logo/seta.png')}/>
            </TouchableOpacity>
            <ScrollView>
            <View style={cssA.container1}>
                <View style={{flexDirection:'row', marginTop:'5%'}}>
                    <Image style={cssA.fotoUser}
                    source={require('../../img/logo/User.jpg')}/> 
                    <Text style={cssA.User}> User </Text>
                </View>
            
                <View style={cssA.Mensag}>
                    <ScrollView>
                        <Text
                        style={cssA.textoD}
                        underlineColorAndroid="transparent"
                        multiline={true}
                        maxLength={400}>Touch do motorola motoE4 não funciona</Text>
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
                    <TouchableOpacity style={cssA.chat} >
                        <Text style={cssA.Tchat}>Chat</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}