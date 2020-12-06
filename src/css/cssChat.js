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
    }


});

export {cssChat};