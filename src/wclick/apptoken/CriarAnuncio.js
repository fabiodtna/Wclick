import React from 'react'
import { View, Text, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import { State } from 'react-native-gesture-handler';
import MapView from 'react-native-maps';
import { cssCA } from '../../css/cssCA';

  
export default function CriarAnuncio({navigation}){
    
    
    
    return (
        
        
        <View style={cssCA.containerPrincipal}>
            <ScrollView>
            <TouchableOpacity  onPress={() => navigation.navigate('Home')}>
                <Image style={cssCA.seta}
                source={require('../../img/logo/seta.png')}/>
            </TouchableOpacity>
            <View style={cssCA.container1}>
                <View style={{flexDirection:'row', marginTop:'5%'}}>
                    <Image style={cssCA.fotoUser}
                    source={require('../../img/logo/User.jpg')}/> 
                    <Text style={cssCA.User}> User </Text>
                </View>
            
                <View style={cssCA.Mensag}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <TextInput
                        style={cssCA.textoD}
                        underlineColorAndroid="transparent"
                        placeholder="Qual defeito ou problema?"
                        placeholderTextColor="grey"
                        multiline={true}
                        maxLength={400}/>
                    </ScrollView>
                    
                    <View style={{flexDirection:'row', marginLeft:'40%'}}>
                        <Image style={cssCA.imageC} source={require('../../img/logo/image.png')}/>
                        <Image style={cssCA.imageC} source={require('../../img/logo/image.png')}/>
                        <Image style={cssCA.imageC} source={require('../../img/logo/image.png')}/>
                    </View>
                </View>
            </View>
                <TouchableOpacity style={cssCA.butaoM}>
                    <Text>Sua localização</Text>
                </TouchableOpacity>
                
                <View style={cssCA.container2}>
                    <MapView
                        initialRegion={{
                            latitude:-24.1689806 ,
                            longitude: -46.7851557,
                            latitudeDelta:0.0042,
                            longitudeDelta:0.0031,
                        }}
                        style={cssCA.maps}
                    >
                        <MapView.Marker
                        coordinate={{
                            latitude:-24.1689810 ,
                            longitude: -46.7851557,
                        }}
                        />
                    </MapView>
                </View>

                <View style={cssCA.containerbuton}>
                    <TouchableOpacity style={cssCA.local}>
                        <Text style={cssCA.Tlocal}>Compartilhar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={cssCA.editar} >
                        <Text style={cssCA.Teditar}>Editar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}
