import {StyleSheet} from "react-native";
import { color } from "react-native-reanimated";

const cssCD = StyleSheet.create({
    
    container:{
        flex:1,
        backgroundColor: '#26A6A4',
    },
    text:{
        fontSize:15,
        color:'black',
        fontWeight:'bold'
    },  
    input:{
        flex:1,
        marginTop:'5%',
        marginLeft:'10%'
    },
    Vnome:{
        flex:1,
        width:'60%'

    },
    Inome:{
        marginTop:'1%',
        borderColor:"black",
        borderWidth: 1,
        borderRadius:7,
        width:'80%',
        padding:2,
        backgroundColor:'white',
        fontWeight:'bold',
        color:"black"
    },
    VSnome:{
        flex:1,
        width:"80%",
        marginTop:'8%'

    },
    Isobrenome:{
        marginTop:'1%',
        borderColor:"black",
        borderWidth: 1,
        borderRadius:7,
        width:"80%",
        padding:2,
        backgroundColor:'white',
        fontWeight:'bold',
        color:"black"
    },
    VCell:{
        marginTop:'5%',
        marginLeft:'10%'
    },
    Icell:{
        marginTop:'1%',
        backgroundColor:'white',
        width:'50%',
        fontWeight:'bold',
        color:"black",
        borderColor:"black",
        borderWidth: 1,
        borderRadius:7,
        padding:2
    },
    CDview:{
        flex:1,
        flexDirection:'row',
        marginLeft:'10%'
    },
    Icidades:{
        marginTop:"3%"
    },
    Vdata:{
        marginTop:"3%",
        marginLeft:'5%'
    },
    data:{
        marginTop:'1%',
        borderColor:"black",
        borderWidth: 1,
        borderRadius:7,
        width:'80%',
        padding:2,
        backgroundColor:'white',
        fontWeight:'bold',
        color:"black"
    },

    Vlogin:{
        flex:1,
        marginLeft:'10%',
        marginTop:'3%'
    },
    loginsenha:{
        backgroundColor:"white",
        width:'80%',
        marginBottom: 15,
        marginTop:"1%",
        color:'#222',
        fontSize: 17,
        borderColor:"black",
        borderWidth: 1,
        borderRadius:7,
        padding:4,
       
      },
      clientetecnico:{
        flex:1,
        marginLeft:'10%',
        flexDirection:'row'

      },
      chekcli:{
          marginRight:"10%"
      },
      Vsubmit:{
        marginBottom:'5%',
        alignItems:"center",
        marginTop:"3%"
    },
      submit:{
          alignItems:"center",
          justifyContent:"center",
          backgroundColor:'#1E67AA',
          width:"80%",
          padding:10,
          borderColor:"white",
          borderWidth: 1,
          borderRadius:7,
      }

});

  export {cssCD};