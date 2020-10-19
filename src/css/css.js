import {StyleSheet} from "react-native";

const css = StyleSheet.create({

    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    nome: {
      marginTop: 150,
      color: 'black',
      fontSize: 45,
      marginRight: 65,
      fontWeight: "bold",
    },
  
    sobnome: {
      color: 'black',
      fontSize: 45,
      marginLeft: 60,
      fontWeight: "bold",
      marginBottom: 50,
    },
    
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
    },


    // css pag sobre \|/
    containerSobre:{
        flex:1,
        backgroundColor:'#26A6A4',
        justifyContent:'center',
        alignItems:"center"
    },
    caixatextsobre:{
        height:"80%",
        width:'98%',
        backgroundColor:'#999999',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:27,
        marginTop:6,
        borderWidth:3,
    },
    textsobre:{
        fontSize:14,
        marginLeft:7,
        marginRight:7
    },
  });

  export {css};