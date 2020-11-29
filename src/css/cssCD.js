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
        width:'100%',
    },
    Inome:{
        marginTop:'1%',
        borderColor:"black",
        borderWidth: 1,
        borderRadius:7,
        width:'70%',
        padding:2,
        backgroundColor:'white',
        fontWeight:'bold',
        color:"black"
    },
    Userlogo:{
        marginRight:'2%',
        width: 60,
        height: 60,
        borderRadius:25,
    },
    seta:{
        marginTop:'3%',
        marginRight:'10%',
        width: 35,
        height: 35,
    },
    VSnome:{
        flex:1,
        width:"80%",
        marginTop:'5%'

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
        marginTop:"3%",
        width:'30%',
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
      },
      Vdescricao:{
        flex:1,
        marginLeft:'10%',
        marginTop:'3%',
      },
      Vdescricao:{
        marginLeft:'13%',
        marginRight:'13%',
        backgroundColor:'white',
        padding:20,
        borderColor:"black",
        borderWidth: 1,
        borderRadius:7,
      }

});

  export {cssCD};