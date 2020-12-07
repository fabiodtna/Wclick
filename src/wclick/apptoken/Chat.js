import React,{useState, useEffect}  from 'react'
import { View, Text, FlatList,SafeAreaView, TouchableOpacity, ScrollView,  TextInput } from 'react-native'
import {cssChat} from '../../css/cssChat';

export default function Chat() {

    const [chat, setChat] = useState([]);

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

    useEffect(()=>{
        async function getPROP(){
            if(global.tipocli == 1){
            setShouldShow(true)
            }
        }
        getPROP();
    },[]);

    async function loadmsg(){

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

    

async function Tec_Cli(){
  if( global.tipocli == 2){
    fetch('http:/10.0.0.108:3333/Ichat',{
        method:'POST',
        headers:{
            Accept:'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
         id_user: global.id_cliID,
         id_usert: global.IDuser ,
         nm_user: global.userlog ,
         nm_mensagem: msg
     })
    });
 
    }else{

        fetch('http:/10.0.0.108:3333/Ichat',{
            method:'POST',
            headers:{
                Accept:'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
             id_user: global.IDuser,
             id_usert: global.id_tecID ,
             nm_user:  global.userlog,
             nm_mensagem: msg
         })
        });

  }
}
    
    global.id_cliID

    global.id_tecID

    const[msg, setMSG] = useState();

    const [shouldShow, setShouldShow] = useState(false);

    return (


        <View style={cssChat.container}>
                <FlatList
                inverted
                data={chat}
                keyExtractor={item => item.id}
                renderItem={({ item }) => {
                    if( item.id_user == global.IDuser && global.id_tecID == item.id_usert ){
                        return (
                            
                            // chat do cliente V
                           <View 
                            automaticallyAdjustContentInsets={true}>
                                <View style={cssChat.Vchat}>  
                                    <Text style={cssChat.Tnomechat}>
                                    {item.nm_user}
                                    </Text>
                                    <Text style={cssChat.Tmsgchat}>
                                    {item.nm_mensagem}
                                    </Text>
                                </View>
                                    
                            </View>
                            );
                        }} 
                    }/>


                    <FlatList
                    inverted
                    data={chat}
                    keyExtractor={item => item.id_userT}
                    renderItem={({ item }) => {
                        if( global.IDuser == item.id_usert &&  item.id_user == global.id_cliID){
                            return (
                                // chat do tecnico V
                            <View 
                            inverted
                            automaticallyAdjustContentInsets={true}>
                                <View style={cssChat.Vchat}>  
                                    <Text style={cssChat.Tnomechat}>
                                    {item.nm_user}
                                    </Text>
                                    <Text style={cssChat.Tmsgchat}>
                                    {global.id_tecID}
                                    {item.nm_mensagem}
                                    </Text>
                                </View>
                                    
                            </View>
                            );
                        }} 
                    }/>

                    <View>
                    {shouldShow ? (
                    <SafeAreaView>
                    
                        <View style={cssChat.AcepRecus}>

                                <TouchableOpacity 
                                style={cssChat.Baceitar}
                                onPress={() => {}}>
                                    <Text>Enviar</Text>
                                </TouchableOpacity>
                                
                                <TouchableOpacity 
                                 style={cssChat.Brecusar}
                                onPress={() => setShouldShow(false)}>
                                    <Text>Cancelar</Text>
                                </TouchableOpacity>
                                
                          </View>
                       
                    </SafeAreaView>
                 ) : null}

                    </View>
            <View style={cssChat.Vinput}>
                <TextInput placeholder=" mensagem" style={cssChat.inputmsg} 
                placeholderTextColor="black"
                onChangeText={(text)=> setMSG(text)}
                />
                <TouchableOpacity style={cssChat.submitchat}>
                    <Text style={cssChat.textsubm}
                    onPress={()=>Tec_Cli() && loadmsg()}>enviar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

           