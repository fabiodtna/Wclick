import React from 'react'
import { StyleSheet, Text, Image, View, ScrollView } from 'react-native'


export default function perfil() {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.Vavatar_nome}>
                <Image style={styles.image} source={require('../../img/avatar/defalt.png')}/>
                <Text style={styles.text}> Nome Sobre nome</Text>
            </View>

            <View style={styles.Vinputs}>
                 <View style={styles.caixaTxt}>
                     <Text style={styles.Txt}> Descrição </Text>
                 </View>
                 <View style={styles.caixaTxt}>
                     <Text style={styles.Txt}> data de nascimento </Text>
                 </View>
                 <View style={styles.caixaTxt}>
                     <Text style={styles.Txt}> Cidade estado </Text>
                 </View>
                 <View style={styles.caixaTxt}>
                     <Text style={styles.Txt}> telefone </Text>
                 </View>
            </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    
    container:{
        flex:1,
        backgroundColor:'#26A6A4'
    },

    Vavatar_nome:{
        marginTop:'10%',
        alignItems:'center',
        marginBottom:'10%'
    },

    image:{
        width:100,
        height:100,
        borderRadius:40
    },

    text:{
        fontWeight:'bold',
        marginTop:"5%",
        fontSize:20
    },

    Vinputs:{
        alignItems:'center'
    },

    caixaTxt:{
        alignItems:'center',
        backgroundColor:'grey',
        width:'75%',
        padding:10,
        marginTop:'5%',
        borderRadius:10,
        borderWidth:2
    },

    Txt:{
        fontSize:17
    }
})
