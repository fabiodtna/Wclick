import React, { useState, useEffect, Component } from "react";
import { AsyncStorage } from 'react-native';
import { 
    View, 
    Text, 
    Image, 
    TextInput, 
    ScrollView, 
    TouchableOpacity,
    Picker, 
    Alert
    } from 'react-native'
import MapView from 'react-native-maps';
import { cssCA } from '../../css/cssCA';
import { List } from 'react-native-paper';

import Geolocation from 'react-native-geolocation-service';

  
export default function CriarAnuncio({navigation}){

    const [name, setUser]= useState();
    const [iduser, setIduser] = useState();
    const [nmdesc, setNmdesc] = useState();
    const [Categoria, setCategorias] = useState();
    const [nmend, setEnd] = useState();

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

    async function sendPubl(){
        let response= await fetch('http:/10.0.0.108:3333/CreatePost',{
            method:'POST',
            headers:{
                Accept:'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id_usuario: iduser,
                nm_user: name,
                nm_categoria: Categoria,
                nm_descricao: nmdesc,
                nm_endereco: nmend,
         })
        });
        console.log(response);
    }
    async function verif(){
        if(iduser == null || nmdesc == null || nmend == null || Categoria == null ){
            alert('Preencha os campos');
        }else{
            sendPubl();
            navigation.navigate('Home');
        }
    }

    return (
        <View style={cssCA.containerPrincipal}>
            <ScrollView>
            <View style={cssCA.container1}>
                <View style={{flexDirection:'row', marginTop:'5%'}}>
                    <Image style={cssCA.fotoUser}
                    source={require('../../img/avatar/defalt.png')}/> 
                    <Text style={cssCA.User}>{name}</Text>
                </View>
            
                <View style={cssCA.Mensag}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <TextInput
                        style={cssCA.textoD}
                        underlineColorAndroid="transparent"
                        placeholder="Qual defeito ou problema?"
                        placeholderTextColor="grey"
                        multiline={true}
                        onChangeText={text=>setNmdesc(text)}
                        maxLength={250}/>

                    </ScrollView>
                    <View style={{flexDirection:'row', marginLeft:'3%'}}>
                    <Text style={{marginTop:"6%"}}>Categorias</Text>
                    <Picker
                        selectedValue={Categoria}
                        style={{width: 35, padding:1 }}
                        onValueChange={(itemValue, itemIndex) => setCategorias(itemValue)}>

                        <Picker.Item label="Select" value="1" />
                        <Picker.Item label="Celular" value="Celulares" />
                        <Picker.Item label="Computador" value="Desktop" />
                    </Picker>
                    

                        <Image style={cssCA.imageC} source={require('../../img/logo/image.png')}/>
                        <Image style={cssCA.imageC} source={require('../../img/logo/image.png')}/>
                        <Image style={cssCA.imageC} source={require('../../img/logo/image.png')}/>
                    </View>
                </View>
            </View>
                
                    <TextInput
                    style={cssCA.butaoM} placeholder={'Sua localização/Endereço'}
                        multiline={true}
                        onChangeText={text=>setEnd(text)}/>
                
                
                <View style={cssCA.container2}>
                    <Image style={cssCA.maps} source={require('../../img/maps.jpg')}/>
                </View>

                <View style={cssCA.containerbuton}>
                    <TouchableOpacity style={cssCA.local}
                        onPress={()=> verif()}
                    >
                        <Text style={cssCA.Tlocal}>Compartilhar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={cssCA.editar} >
                        <Text style={cssCA.Teditar}>Cancelar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}
