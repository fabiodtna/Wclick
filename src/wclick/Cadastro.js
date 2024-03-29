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
    Alert
    } from 'react-native'; 
    import { cssCD } from '../css/cssCD';  

    export default function Cadastro({navigation}) {

    //select cidades!
    const [selectedValue, setSelectedValue] = useState("1");

    //form 
    const [nome, setNome] = useState();
    const [sobrenome, setSobrenome] = useState();
    const [celular, setCelular] = useState();
    const [cidade, setCidade] = useState();
    const [dateN, setDateN] = useState();
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [confsenha, setConfsenha] = useState(); 
    const [descricao, setDescricao] = useState();   

     // select cliente tecnico!
     const [tecnico, setTecnico] = React.useState();
     const [cliente, setCliente] = React.useState();
     const [clit, setClit] = React.useState();

     const [avatar, setAvatar] = React.useState(require('../img/avatar/defalt.png'));

     const[cont, SetCont] = React.useState(1);

        
     // Gambiarra do avatar
     
     function selectAvatar(){
         if(cont == 1){
             setAvatar(require('../img/avatar/1.png'));
         }else if( cont == 2){
            setAvatar(require('../img/avatar/2.png'));
         }else if( cont == 3){
            setAvatar(require('../img/avatar/3.png'));
         }else if( cont == 4){
            setAvatar(require('../img/avatar/4.png'));
         }else if( cont == 5){
            setAvatar(require('../img/avatar/5.png'));
         }else if( cont == 6){
            setAvatar(require('../img/avatar/6.png'));
         }else if( cont == 7){
            setAvatar(require('../img/avatar/7.png'));
         }else if( cont == 8){
            setAvatar(require('../img/avatar/defalt.png'));
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
        <View style={cssCD.container}>
            <ScrollView>
                <View style={cssCD.input}>
                    <View style={cssCD.Vnome}>
                        <Text style={cssCD.text}>Nome:</Text>
                        <View style={{flexDirection:"row", flex:1}}>
                            <View style={{flex:1}}> 
                                <TextInput style={cssCD.Inome}
                                onChangeText={text=>setNome(text)}
                                maxLength={10}
                                />
                            </View>
                            <Image style={cssCD.Userlogo} source={avatar}/>
                            <TouchableOpacity onPress={()=>{ SetCont (cont + 1) || selectAvatar()}}
                            style={{marginTop:'3%'}}>
                                <Image style={cssCD.seta} source={require('../img/logo/seta1.png')}/>
                            </TouchableOpacity>
                            
                        </View>
                    </View>
                    <View style={cssCD.VSnome}> 
                            <Text style={cssCD.text}>Sobrenome: </Text>
                            <TextInput style={cssCD.Isobrenome}
                             onChangeText={text=>setSobrenome(text)}
                            maxLength={30}/>
                    </View>
                </View>
                <View style={cssCD.VCell}>
                    <Text style={cssCD.text}>Celular:</Text>
                    <TextInput
                    onChangeText={text=>setCelular(text)}
                    style={cssCD.Icell}
                    maxLength={17}
                    placeholder="+55(012)9910-0001"
                    keyboardType="numeric"
                    />
                </View>
                <View style={cssCD.CDview}>
                    <View style={cssCD.Icidades}>
                        <Text style={cssCD.text} >Cidade: </Text>
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
                    <View style={cssCD.Vdata}>
                        <Text style={cssCD.text} >data nascimento: </Text>
                        <TextInput style={cssCD.data}
                            onChangeText={text=>setDateN(text)}
                            keyboardType="numeric"
                            placeholder=' 23-07-2002'
                            maxLength={10}
                        />
                    </View>
                </View>
                <View style={cssCD.Vlogin}>
                    <Text style={cssCD.text}>Email: </Text>
                        <TextInput
                            style={cssCD.loginsenha}
                            autoCorrect={false}
                            onChangeText={text=>setEmail(text)}
                            />

                    <Text style={cssCD.text}>Senha: </Text>
                        <TextInput
                        style={cssCD.loginsenha}
                        autoCorrect={false}
                        secureTextEntry={true}
                        onChangeText={text=>setSenha(text)}
                        />

                    <Text style={cssCD.text}>Confirmar Senha: </Text>
                        <TextInput
                        style={cssCD.loginsenha}
                        autoCorrect={false}
                        secureTextEntry={true}
                        onChangeText={text=>setConfsenha(text)}
                        />     
                </View>
                <View style={cssCD.clientetecnico}>
                    <View style={cssCD.chekcli}>
                        <Text style={cssCD.text}>Cliente</Text>
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
                    <View style={cssCD.chekcli}>
                        <Text style={cssCD.text}>Tecnico</Text>
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
                    <SafeAreaView style={cssCD.Vdescricao}>
                    
                        <View>
                        <ScrollView showsVerticalScrollIndicator={false} 
                        style={cssCD.Caixadesc}>
                                <TextInput 
                                style={cssCD.text}
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
                <View style={cssCD.Vsubmit}>
                <TouchableOpacity style={cssCD.submit}
                onPress={()=>verif()}>
                    <Text style={cssCD.text}>Cadastrar</Text>
                </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}
