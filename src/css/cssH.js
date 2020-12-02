import {StyleSheet} from "react-native";

const cssH = StyleSheet.create({

    // css pag sobre \|/
    container:{
        flex:1,
        backgroundColor:'#26A6A4',
        alignItems:"center"
    },
    
    view1:{
        flex:1,
        padding:25,
        flexDirection: 'row',
        marginTop:'8%',
        alignItems:'center'
    },
    Userlogo:{
        marginLeft:'5%',
        marginRight:'2%',
        width: 50,
        height: 50,
        borderRadius:25,
    },
    textname:{
        fontSize:20,
        marginRight:'30%'
    },
    editar:{   
        fontSize:15,
    },
    sair:{
        fontSize:15,
        marginLeft:'2%'
    },

    view2:{
        flexDirection: 'row',
        marginTop:'3%'
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
        marginTop:'3%'
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
        flexDirection:'column',
        backgroundColor:'#035250',
        alignItems:'center',
        justifyContent:'center',
        width:'27%',
        height: '60%',
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
        marginBottom:150,
        flex:1
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
        marginTop:'5%'
    },
    Auserlogo:{
        width: 30,
        height: 30,
        borderRadius:20,
        marginRight:'3%'
    },
    Ausernome:{
        marginTop:'3%',
        marginRight:'45%'
    },
    Postext:{
        marginTop:'3%'
    },
    Uposte:{
        marginTop:25,
        marginBottom:40,
        alignItems:'center'
        
    }
});

  export {cssH};