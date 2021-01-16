import React, { useState, useEffect, Component } from "react";
import { Checkbox } from 'react-native-paper';
import { 
    Text, 
    View,
    ScrollView,
    Image,
    SafeAreaView,
    Button, 
    TextInput,
    TouchableOpacity,
    Picker,
    Alert, 
    StyleSheet
    } from 'react-native'; 
     

    export default function Editar({navigation}) {

    //select cidades!
    const [selectedValue, setSelectedValue] = useState("1");

    //form 
    const [celular, setCelular] = useState();
    const [cidade, setCidade] = useState();
 
    const [descricao, setDescricao] = useState();   

     // select cliente tecnico!
     const [tecnico, setTecnico] = React.useState();
     const [cliente, setCliente] = React.useState();
     const [clit, setClit] = React.useState();

     const [avatar, setAvatar] = React.useState(require('../../img/avatar/defalt.png'));

     const[cont, SetCont] = React.useState(1);

        
     // Gambiarra do avatar
     
     function selectAvatar(){
         if(cont == 1){
             setAvatar(require('../../img/avatar/1.png'));
         }else if( cont == 2){
            setAvatar(require('../../img/avatar/2.png'));
         }else if( cont == 3){
            setAvatar(require('../../img/avatar/3.png'));
         }else if( cont == 4){
            setAvatar(require('../../img/avatar/4.png'));
         }else if( cont == 5){
            setAvatar(require('../../img/avatar/5.png'));
         }else if( cont == 6){
            setAvatar(require('../../img/avatar/6.png'));
         }else if( cont == 7){
            setAvatar(require('../../img/avatar/7.png'));
         }else if( cont == 8){
            setAvatar(require('../../img/avatar/defalt.png'));
         }else{
             SetCont(1);
         }
     }
    
    
     //Enviar o Form
    async function sendForm(){
        let response= await fetch('http://10.0.0.103/testephp/index.php?cadastro',{
            method:'POST',
           
            body: JSON.stringify({
                WC: "token",
                id_cidade: cidade,
                avatar: avatar,
                nome: nome,
                sobrenome: sobrenome,
                dtnascimento: "1999/02/02", 
                telefone: celular,
                email: email,
                senha: senha,
                TC_CL: clit,
                descricao: descricao,
         })
        });
        alert(console.log(response));
    }
    const usersenhaD = () =>
    Alert.alert(
        "Error",
        "As senhas não coincidem. Tente novamente.",
        [
          {
            text: "Cancel",
            onPress: () => navigation.navigate('Login'),
            style: "cancel"
          },
          { text: "OK", onPress: () =>{} }
        ],
        { cancelable: false }
      );

      const sucesso = () =>
      Alert.alert(
        "Parabéns",
        "Cadastro feito com sucesso",
        [
          {
            text: "Cancel",
            onPress: () => navigation.navigate('Cadastro'),
            style: "cancel"
          },
          { text: "Fazer login!", onPress: () => navigation.navigate('Login')}
        ],
        { cancelable: false }
      );
    
    async function verif(){
        if(email == null || senha == null || clit == null || nome == null || cidade == 1){
            alert('Preencha os campos');
        }
        else if (senha != confsenha ) {
            usersenhaD();
            
        }else{
            sendForm();
            sucesso();
        }
    }

     const [shouldShow, setShouldShow] = useState(false);
    
    return (
        <View style={styles.container}>
            <ScrollView style={{ marginTop:'5%'}}>
                <View style={styles.nomeavatar}>
                    <View style={styles.Vnome}>
                        <View style={{flexDirection:"row", flex:1, marginBottom:'5%'}}>

                         
                            <Image style={styles.Userlogo} source={avatar}/>
                            <TouchableOpacity onPress={()=>{ SetCont (cont + 1) || selectAvatar()}}
                            style={{marginTop:'3%'}}>
                                <Image style={styles.seta} source={require('../../img/logo/seta1.png')}/>
                            </TouchableOpacity>
                            
                        </View>
                         <Text style={styles.nome}>Nome</Text>
                    </View>
                   
                </View>
                <View style={styles.VCell}>
                    <Text style={styles.text}>Celular:</Text>
                    <TextInput
                    onChangeText={text=>setCelular(text)}
                    style={styles.Icell}
                    maxLength={17}
                    placeholder="+55(012)9910-0001"
                    keyboardType="numeric"
                    />
                </View>
                <View style={styles.CDview}>
                    <View style={styles.Icidades}>
                        <Text style={styles.text} >Cidade: </Text>
                        <Picker
                            selectedValue={selectedValue}
                            style={{ height: 40, width:150}}
                            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue) || setCidade(itemValue)}
                            >
                            <Picker.Item label="Select" value="1" />
                            <Picker.Item label="Itanhaém" value="2" />
                            <Picker.Item label="São Paulo" value="3" />
                            <Picker.Item label="Mongaguá" value="4"/>
                        </Picker>
                    </View>
                  
                </View>
               
                <View style={styles.clientetecnico}>
                    <View style={styles.chekcli}>
                        <Text style={styles.text}>Cliente</Text>
                        <Checkbox
                        status={cliente ? 'checked' : 'unchecked'}
                        onPress={()=>{
                            setCliente(!cliente);
                            setCliente(1),
                            setTecnico(null),
                            setClit(1),
                            setShouldShow(false)
                        }}
                        />
                    </View>
                    <View style={styles.chekcli}>
                        <Text style={styles.text}>Tecnico</Text>
                        <Checkbox
                            status={tecnico ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setTecnico(!tecnico),
                                setTecnico(2),
                                setCliente(null),
                                setClit(null),
                                setClit(2),
                                setShouldShow(true)
                             }}
                        />
                    </View>
                </View>
                {shouldShow ? (
                    <SafeAreaView style={styles.Vdescricao}>
                    
                        <View>
                        <ScrollView showsVerticalScrollIndicator={false} >
                                <TextInput 
                                style={styles.text}
                                underlineColorAndroid="transparent"
                                placeholder="Descrição tecnica {Formação/Experiencia}"
                                placeholderTextColor="grey"
                                multiline={true}
                                onChangeText={text=>setDescricao(text)}
                                maxLength={400}/>
                            </ScrollView>
                        </View>
                    </SafeAreaView>
                 ) : null}
                <View style={styles.Vsubmit}>
                <TouchableOpacity style={styles.submit}
                onPress={()=>verif()}>
                    <Text style={styles.text}>Editar</Text>
                </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    
    container:{
        flex:1,
        backgroundColor:'#26A6A4',
    },
    text:{
        fontSize:15,
        color:'black',
        fontWeight:'bold'
    },  
    nome:{
        fontSize:20,
        color:'black',
        fontWeight:'bold'
    },
    nomeavatar:{
        flexDirection:'row',
        flex:1,
        marginTop:'5%',
    },
    Vnome:{
        flex:1,
        width:'100%',
        alignItems:'center'
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
        marginLeft:'10%',
        marginRight:'2%',
        width: 100,
        height: 100,
        borderRadius:25,
    },
    seta:{
        marginTop:'100%',
        width: 25,
        height: 25,
    },
    VCell:{
        alignItems:'center',
        marginTop:'5%',
        marginBottom:'3%'
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
        marginLeft:'30%'
    },
    Icidades:{
        marginTop:"3%",
        width:'30%',
   },
   clientetecnico:{
    flex:1,
    alignItems:'center',
    marginLeft:'30%',
    flexDirection:'row'

  },
  chekcli:{
      marginRight:"15%"
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

})
