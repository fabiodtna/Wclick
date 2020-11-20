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
        flex: 1.3,
        backgroundColor: '#C4C4C4',
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
        marginBottom: '5%',
        borderRadius: 27,
        marginLeft: '10%',
        borderWidth: 3,
        borderColor: 'black'
    },
    User: {
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
        flex: 2,
        alignItems: 'center',
        width: '80%',
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

    container2: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        borderWidth: 5,
        borderColor: 'black',
        width: '80%',
        height: 250,
        marginLeft: '10%',
        borderRadius:7,
        backgroundColor:'black'
    },
    maps:{
        width:'100%', 
        height:'100%',
    },

    containerbuton: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: '5%',
        marginBottom: '2%',
    },
    voltar: {
        backgroundColor: '#C4C4C4',
        padding:4,
        marginRight:'30%',
        alignItems:'center',
        width:'30%',
        borderRadius:7
    },
    Tvoltar:{
        fontSize:15,
        fontWeight:'bold',
    },
    chat: {
        backgroundColor: '#1E67AA',
        padding:4,
        alignItems:'center',
        width:'20%',
        borderRadius:7
    },
    Tchat:{
        fontSize:15,
        fontWeight:'bold',
    },

});

export { cssA };