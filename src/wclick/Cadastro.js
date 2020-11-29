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
    Picker
    } from 'react-native'; 
    import { cssCD } from '../css/cssCD';  

export default function Cadastro() {

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
    //Enviar o Form
    
    async function sendForm(){
        let response= await fetch('http:/10.0.0.108:3333/Tb_usuario',{
            method:'POST',
            headers:{
                Accept:'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id_cidade: cidade,
                nm_nome: nome,
                nm_sobrenome: sobrenome,
                dt_nascimento: dateN,
                nm_email: email,
                nm_senha: senha,
                id_cl_tc: clit,
                
                nm_descricao: descricao, 
                nr_telefone: celular
         })
        });
     }
     const [shouldShow, setShouldShow] = useState(false);
    
    return (
        <View style={cssCD.container}>
            <ScrollView>
                <View style={cssCD.input}>
                    <View style={cssCD.Vnome}>
                        <Text style={cssCD.text}>Nome:{clit} </Text>
                        <View style={{flexDirection:"row", flex:1}}>
                            <View style={{flex:1}}> 
                                <TextInput style={cssCD.Inome}
                                onChangeText={text=>setNome(text)}
                                maxLength={20}
                                />
                            </View>
                            <Image style={cssCD.Userlogo} source={require('../img/avatar/defalt.png')}/>
                            <Image style={cssCD.seta} source={require('../img/logo/seta1.png')}
                            />
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
                            style={{ height: 40, width: 150}}
                            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue) && setCidade(itemValue)}
                            >
                            <Picker.Item label="Select city" />
                            <Picker.Item label="Itanhaém" value="1" />
                            <Picker.Item label="São Paulo" value="2" />
                            <Picker.Item label="Mongaguá" value="3"/>
                        </Picker>
                        <Text>{selectedValue}</Text>
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
                                maxLength={400}/>
                            </ScrollView>
                        </View>
                    </SafeAreaView>
                 ) : null}
                <View style={cssCD.Vsubmit}>
                <TouchableOpacity style={cssCD.submit}
                onPress={()=>sendForm()}
                >
                    <Text style={cssCD.text}>Cadastrar</Text>
                </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}
