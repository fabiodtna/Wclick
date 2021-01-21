import React,  {useState, useEffect} from 'react'
import { AsyncStorage } from 'react-native';
import { 
    View, 
    Text, 
    Image, 
    ScrollView, 
    TouchableOpacity,
    SafeAreaView, 
    TextInput} from 'react-native'

import MapView from 'react-native-maps';
import { cssA } from '../../css/cssA';


export default function Anuncio({navigation}){

    const[latitude, setLatitude] = useState(-24.1689706);
    const[longitude, setLongitude] = useState(-46.7851603);


   
    const [shouldShow, setShouldShow] = useState(false);
    
    //user logado
    const [user, setUser]= useState();
    //ID do user logado
    const [iduser, setIduser]= useState();
    
    
    // user que fez o post
    const [idUserpost, setIdUserpost]= useState();
    // proposta
    const [msg, setMSG]= useState();
    // descrição post
    const [descri, setDescri]= useState();

    async function usert(){
       if( global.tipocli == 2){
        setShouldShow(true)
       }else{
           alert('Conta Cliente!');
       }
    }
     

    useEffect(()=>{
        async function getUser(){
            let name=await AsyncStorage.getItem('userData');
            let iduser=await AsyncStorage.getItem('userData');
            let json=JSON.parse(name);
            let id=JSON.parse(iduser);
            setIduser(id.id);
            setUser(json.nm_nome); 
        }
        getUser();
    },[]);

    useEffect(()=>{
        async function getdados(){
            setIdUserpost(global.idUpost);
            setDescri(global.postdesc);
        }
        getdados();
    },[]);
    
    

    async function sendProposta(){
            fetch('http:/10.0.0.108:3333/Ichat',{
            method:'POST',
            headers:{
                Accept:'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
             id_user: idUserpost,
             id_usert: iduser ,
             nm_user: user,
             nm_descpost: descri,
             nm_mensagem: msg
         })
        });
    }
    
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
                onPress={() => usert() }>
                    <Text>Proposta</Text>
                </TouchableOpacity>
                {shouldShow ? (
                    <SafeAreaView >
                    
                        <View>
                                <TextInput style={cssA.Iproposta}
                                underlineColorAndroid="transparent"
                                placeholder="Sua proposta"
                                placeholderTextColor="grey"
                                multiline={true}
                                onChangeText={()=>{}}
                                maxLength={50}
                                onChangeText={text=>setMSG(text)}/>
                            <View style={cssA.Vbutonsproposta}>

                                <TouchableOpacity style={cssA.benviar}
                                onPress={() => sendProposta()}>
                                    <Text>Enviar</Text>
                                </TouchableOpacity>
                                
                                <TouchableOpacity style={cssA.bcancel}
                                onPress={() => setShouldShow(false)}>
                                    <Text>Cancelar</Text>
                                </TouchableOpacity>
                                
                            </View>
                        </View>
                    </SafeAreaView>
                 ) : null}
            </View>
                
               <MapView style={cssA.Vmap}
                    initialRegion={{
                    latitude,
                    longitude,
                    latitudeDelta: 0.080,
                    longitudeDelta: 0.080, 
               }}
             >
                   <MapView.Marker
                    coordinate={{
                        latitude,
                        longitude
                    }}/>
              
             </MapView>
            
              

                <View style={cssA.containerbuton}>
                    <TouchableOpacity style={cssA.voltar}>
                        <Text style={cssA.Tvoltar}>voltar</Text>
                    </TouchableOpacity>
                </View>
                </ScrollView>
        </View>
    )
}