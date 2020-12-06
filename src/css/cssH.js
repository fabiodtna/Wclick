import {StyleSheet} from "react-native";

const cssH = StyleSheet.create({

    // css pag sobre \|/
    container:{
        flex:1,
        backgroundColor:'#26A6A4',
        alignItems:'center'
    },
    
    view1:{
        padding:10,
        flexDirection: 'row',
        marginTop:'7%',
    },
    Userlogo:{
        marginLeft:'2%',
        marginRight:'3%',
        width: 50,
        height: 50,
        borderRadius:25,
        marginRight:'50%'
    },
    textname:{
        position:'absolute',
        marginLeft:'23%',
        marginTop:'6%',
        fontSize:16
    },
    editar:{   
        fontSize:15,
        marginTop:'3%'
    },
    sair:{
        fontSize:15,
        marginLeft:'5%',
        marginTop:'3%',
        marginRight:'3%'
    },

    view2:{
        flexDirection: 'row',
        marginTop:'1%'
    },
    pesquisa:{
        backgroundColor:'#C4C4C4',
        width:'50%',
        fontSize: 17,
        borderRadius:7,
        padding:4,
        marginRight:'2%'
    },
    Peslogo:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#C4C4C4',
        borderRadius:7,
        width:'10%'
    },
    view3:{
        flexDirection: 'row',
        marginTop:'3%',
    },
    Adefeito:{
        backgroundColor:'#4E6DDB',
        width:'40%',
        padding:'1%',
        borderRadius:7,
        borderColor:'black',
        borderWidth:1,
        alignItems:'center',
        marginLeft:'30%',

    },
    rank:{
        marginLeft:'15%',
        marginRight:'5%',
        width:'15%',
        backgroundColor:'#C4C4C4',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
    },
    view4:{
        flexDirection: 'row',
        marginTop:'2%',
    },
    categoria:{
        position:'relative',
        flexDirection:'column',
        backgroundColor:'#035250',
        alignItems:'center',
        justifyContent:'center',
        width:'27%',
        height: 330,
        borderRadius:10,
        marginTop:'2%',
        marginLeft:'2%',
        borderWidth:1,
        borderColor:'#EE8B8B'
    },
    Tcategoria:{
        flex:1,
        fontSize:17,
        fontWeight:'bold',
        marginTop:'1%'

    },
    Tlogo:{
        width: 70,
        height: 70,
        borderRadius:70,
        borderColor:'black',
        borderWidth:4,
        marginTop:'20%'
    },
    anuncios:{
        flex:1,
        height:'82%',
        marginTop:'3%'
    },
    poste:{
        flex: 1,
        flexGrow: 1,
        backgroundColor:'#035250',
        alignItems:'center',
        width:'90%',
        height:150,
        borderRadius:10,
        marginTop:'3%',
        marginLeft:'2%',
        borderWidth:1,
        borderColor:'#fff',
    },
    Postcon:{
        marginLeft:'5%'
    },
    VPavatarnome:{
        flexDirection:'row',
        marginTop:'7%'
    },
    Auserlogo:{
        width: 35,
        height: 35,
        borderRadius:20,
        marginRight:'3%'
    },
    Ausernome:{
        fontSize:16,
        marginTop:'3%',
        marginRight:'65%',
        fontWeight:'bold'
    },
    Postext:{
        fontSize:15,
        marginLeft:'5%',
        marginTop:'3%'
    },
  
});

  export {cssH};