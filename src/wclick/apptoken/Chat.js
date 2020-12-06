import React from 'react'
import { View, Text, FlatList,SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import {cssChat} from '../../css/cssChat';

export default function Chat() {
    return (
        <View style={cssChat.container}>
            <ScrollView 
            inverted={true}
                automaticallyAdjustContentInsets={true}>
                <View style={cssChat.Vchat}>  
                    <Text>
                        nome: user
                    </Text>
                    <Text>
                        mensage
                    </Text>
                </View>
                      
            </ScrollView>
            <View style={cssChat.Vinput}> 
                <TextInput placeholder=" mensagem" style={cssChat.inputmsg} 
                placeholderTextColor="black"/>
                <TouchableOpacity style={cssChat.submitchat}>
                    <Text style={cssChat.textsubm}>enviar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
