import {StyleSheet} from "react-native";

const cssChat = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor:'#26A6A4',
        alignItems:'center'
    },
    Vchat:{
      alignItems:'center',
      backgroundColor:'white',
    },


    Vinput:{
        flexDirection:'row',
    },
    inputmsg:{
        backgroundColor:'#C4C4C4',
        width:'75%',
        marginBottom: '5%',
        marginTop:'1%',
        color:'#222',
        fontSize: 17,
        borderRadius:10,
        padding:5,
        marginRight:'3%'
    },
    submitchat:{
        backgroundColor:'#1E67AA',
        alignItems:'center',
        width:'15%',
        marginBottom: '5%',
        marginTop:'1%',
        color:'#222',
        borderRadius:10,
        padding:5,
    },
    textsubm:{
        fontSize:15,
        fontWeight:'bold'
    },






    //chats

    Vchats:{
        alignItems:'center',
        flexDirection:'row',
        marginTop:'5%',
        backgroundColor:'#C4C4C4',
        width:320,
        height:150,
        borderRadius:5,
        borderWidth:2
    },
    Vnomeavatar:{
        position:'absolute',
        marginLeft:'5%',
        marginTop:'5%'
    },
    textchats:{
        fontSize:14

    },
    avatarchats:{
        width:30,
        height:30,
    },
    VdescricaoP:{
        alignItems:'center',
        width:'60%',
        marginLeft: '25%',
    },
    VbuttonPro:{
        flexDirection:'row',
        marginTop:'5%'
    },
    Baceitar:{
        alignItems:'center',
        marginLeft:'2%',
        marginRight:'15%',
        backgroundColor:'#1E67AA',
        padding:3,
        width:80,
        borderWidth:2,
        borderRadius:7
    },
    Brecusar:{
        alignItems:'center',
        marginLeft:'15%',
        backgroundColor: '#999999',
        padding:3,
        width:80,
        borderWidth:2,
        borderRadius:7

    },
    
    //chat tecnico
    VTTchats:{
        alignItems:'center',
        marginTop:'5%',
        backgroundColor:'#C4C4C4',
        width:320,
        height:100,
        borderRadius:5,
        borderWidth:2

    },
    Ttextchats:{
        padding:2,
        marginTop:'3%',
        marginBottom:'2%'
    }
});

export {cssChat};