import React, {useState, useEffect}  from 'react'
import { View, 
    Text,
    TouchableOpacity, 
    ScrollView, 
    Image,
    FlatList,
    SafeAreaView } from 'react-native'
import {cssChat} from '../../css/cssChat';

export default function Chats({navigation}) {

    const [chat, setChat] = useState([]);

    const[idtecnico, setIdtecnico] = useState();

    const[iduserdopost, setIduserpost] = useState();

    const[idpost, setIdpost] = useState();

    global.id_cliID = iduserdopost;

    global.id_tecID = idtecnico;

    global.idpost = idpost;

    global.chat = chat;

    useEffect(()=>{
        async function loadchat(){

            let response = await fetch('http:/10.0.0.108:3333/Mchat',{
                method:'POST',
                headers:{
                    Accept:'application/json',
                    'Content-Type': 'application/json'
                }
            });

            let chats = await response.json();
            setChat(chats);
    }
    loadchat();
    },[]);

    return (
        <View style={cssChat.container}>
            <FlatList
                data={chat}
                keyExtractor={item => item.id}
                renderItem={({ item }) => {
                    if( item.id_user == global.IDuser &&  global.tipocli == 1 && item.nm_descpost != ''){
                        return (
                           
                                <View style={cssChat.Vchats}> 

                                    <View style={cssChat.Vnomeavatar}>
                                        <Image style={cssChat.avatarchats} source={require('../../img/avatar/3.png')}/>
                                        <Text style={cssChat.textchats}>{item.nm_user}</Text>
                                    </View>
                                    
                                    <View style={cssChat.VdescricaoP}>

                                        <Text numberOfLines={2}>
                                               {item.nm_descpost}
                                        </Text>

                                        <Text numberOfLines={3}>
                                            {item.nm_mensagem}
                                        </Text>
                                        
                                        <View style={cssChat.VbuttonPro} >

                                            <TouchableOpacity style={cssChat.Baceitar}
                                            onPress={()=> navigation.navigate('Chat') || setIdtecnico(item.id_usert) || setIdpost(item.id)}>
                                                <Text>Chat</Text>
                                            </TouchableOpacity>

                                            <TouchableOpacity style={cssChat.Brecusar}>
                                                <Text>Recusar</Text>
                                            </TouchableOpacity>

                                        </View>
                                    </View>
                                </View>
                            );
                        }
                    } 
                    }
            />
             <FlatList
                data={chat}
                keyExtractor={item => item.id}
                renderItem={({ item }) => {
                    if(item.id_usert == global.IDuser &&  global.tipocli == 2 && item.nm_descpost != ''){
                        return (
                           <TouchableOpacity
                           onPress={()=> navigation.navigate('Chat') ||setIduserpost(item.id_user) || setIdpost(item.id)}> 
                               <View style={cssChat.VTTchats}> 
                                        <Text style={cssChat.Ttextchats}>Propostas Feitas</Text>
                                        <Text numberOfLines={2}>
                                               {item.nm_descpost}
                                        </Text>
                                </View>
                            </TouchableOpacity>
                               
                            );
                        }} 
                    }
            />
        </View>
    )
}
