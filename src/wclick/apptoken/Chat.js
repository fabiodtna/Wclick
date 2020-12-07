import React,{useState, useEffect}  from 'react'
import { View, Text, FlatList,SafeAreaView, TouchableOpacity, ScrollView,  TextInput } from 'react-native'
import {cssChat} from '../../css/cssChat';

export default function Chat() {

    const chat = global.chat; 
   

    return (
        <View style={cssChat.container}>


                <FlatList
                data={chat}
                keyExtractor={item => item.id}
                renderItem={({ item }) => {
                    if( item.id_user == global.IDuser && global.id_tecID == item.id_usert ){
                        return (
                           <View 
                            inverted={true}
                            automaticallyAdjustContentInsets={true}>
                                <View style={cssChat.Vchat}>  
                                    <Text>
                                    {item.nm_user}
                                    </Text>
                                    <Text>
                                    {global.id_tecID}
                                    {item.nm_mensagem}
                                    </Text>
                                </View>
                                    
                            </View>
                            );
                        }} 
                    }/>
            <View style={cssChat.Vinput}>
                <TextInput placeholder=" mensagem" style={cssChat.inputmsg} 
                placeholderTextColor="black"
                />
                <TouchableOpacity style={cssChat.submitchat}>
                    <Text style={cssChat.textsubm}>enviar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

           