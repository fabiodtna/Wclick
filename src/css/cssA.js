import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";

const cssA = StyleSheet.create({

    containerPrincipal: {
        flex: 1,
        backgroundColor: '#26A6A4',
    },
    seta: {
        width: 30,
        height: 30,
        marginLeft: '2%',
        marginTop: '5%',
    },

    container1: {
        backgroundColor: '#C4C4C4',
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
        marginBottom: '5%',
        borderRadius: 27,
        marginLeft: '10%',
        borderWidth: 3,
        borderColor: 'black',
        marginTop:'3%'
    },
    User: {
        margin:'2%',
        fontSize: 20,
        marginRight: '50%',
        marginTop: '5%',
        color: 'black'
    },

    fotoUser: {
        marginTop: '2%',
        width: 50,
        height: 50,
        borderRadius: 15
    },
    Mensag: {
        
        alignItems: 'center',
        width: '70%',
        marginBottom: '5%',
        marginTop: '2%',
        borderRadius: 26,
    },
    imageC: {
        width: 40,
        height: 40,
        marginTop: '5%',
        marginLeft: '5%'
    },
    textoD: {
        marginTop: '5%',
        marginBottom: '5%',
        fontSize: 17,
        color: 'black'
    },
    butaoM: {
        alignItems: 'center',
        backgroundColor: '#1E67AA',
        borderRadius: 5,
        marginLeft: '25%',
        marginRight: '25%',
        marginBottom: '5%',
        width:'30%',
        padding: 4,
    },
    Iproposta:{
        backgroundColor:'white',
        padding:2,
        borderWidth:1,
        borderRadius:4
    },
    Vbutonsproposta:{
        flexDirection:'row',
        justifyContent:'center',
        marginTop:'3%',
        marginBottom:'3%'
    },
    benviar: {
        alignItems: 'center',
        backgroundColor: '#1E67AA',
        borderRadius: 5,
        marginRight:'10%',
        width:'30%',
        padding: 4,
    },
    
    bcancel:{
        alignItems: 'center',
        backgroundColor: '#035250',
        borderRadius: 5,
        marginLeft:'10%',
        width:'30%',
        padding: 4,
    },

    container2: {
        justifyContent:'center',
        alignItems:'center',
        borderWidth: 5,
        borderColor: 'black',
        width: '80%',
        height: 200,
        marginLeft: '10%',
        borderRadius:7,
        backgroundColor:'black'
    },
    maps:{
        width:'100%', 
        height:'100%',
    },

    containerbuton: {
        marginTop: '3%',
        alignItems:'center',
        marginBottom:'5%'
    },
    voltar: {
        backgroundColor: '#C4C4C4',
        padding:4,
        alignItems:'center',
        width:'50%',
        borderRadius:7
    },
    Tvoltar:{
        fontSize:15,
        fontWeight:'bold',
    },
});

export { cssA };