import React, { useState } from "react";
import { Checkbox } from 'react-native-paper';
import { 
    Text, 
    View,
    ScrollView,
    Image, 
    TextInput,
    TouchableOpacity,
    Picker
    } from 'react-native'; 
    import { cssCD } from '../css/cssCD';  

export default function Cadastro() {

    //select cidades!
    const [selectedValue, setSelectedValue] = useState("1");

    // select cliente tecnico!
    const [cliente, setCliente] = React.useState(false);
    const [tecnico, setTecnico] = React.useState(false);
    
    return (
        <View style={cssCD.container}>
            <ScrollView>
                <View style={cssCD.input}>
                    <View style={cssCD.Vnome}>
                        <Text style={cssCD.text}>Nome:</Text>
                        <View style={{flexDirection:"row"}}>
                            <TextInput style={cssCD.Inome}
                            maxLength={20}
                            />
                            <Text>  avatar</Text>
                            <Image/>
                        </View>
                    </View>
                    <View style={cssCD.VSnome}> 
                            <Text style={cssCD.text}>Sobrenome: </Text>
                            <TextInput style={cssCD.Isobrenome} 
                            maxLength={30}/>
                    </View>
                </View>
                <View style={cssCD.VCell}>
                    <Text style={cssCD.text}>Celular:</Text>
                    <TextInput
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
                            style={{ height: 40, width: 150 }}
                            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                                    
                            <Picker.Item label="Itanhaém" value="1" />
                            <Picker.Item label="São Paulo" value="2" />
                            <Picker.Item label="Mongaguá" value="3"/>
                        </Picker>
                        <Text>{selectedValue}</Text>
                    </View>
                    <View style={cssCD.Vdata}>
                        <Text style={cssCD.text} >data nascimento: </Text>
                        <TextInput style={cssCD.data}
                            placeholder=' 2001/07/23'
                            maxLength={10}
                        />
                    </View>
                </View>
                <View style={cssCD.Vlogin}>
                    <Text style={cssCD.text}>Email: </Text>
                        <TextInput
                            style={cssCD.loginsenha}
                            autoCorrect={false}
                            onChangeText={()=> {}}
                            />

                    <Text style={cssCD.text}>Senha: </Text>
                        <TextInput
                        style={cssCD.loginsenha}
                        autoCorrect={false}
                        secureTextEntry={true}
                        onChangeText={()=> {}}
                        />

                    <Text style={cssCD.text}>Confirmar Senha: </Text>
                        <TextInput
                        style={cssCD.loginsenha}
                        autoCorrect={false}
                        secureTextEntry={true}
                        onChangeText={()=> {}}
                        />     
                </View>
                <View style={cssCD.clientetecnico}>
                    <View style={cssCD.chekcli}>
                        <Text style={cssCD.text}>Cliente</Text>
                        <Checkbox
                            status={cliente ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setCliente(!cliente);
                            }}
                        />
                    </View>
                    <View style={cssCD.chekcli}>
                        <Text style={cssCD.text}>Tecnico</Text>
                        <Checkbox
                            status={tecnico ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setTecnico(!tecnico);
                            }}
                        />
                    </View>
                </View>
                <View style={cssCD.Vsubmit}>
                <TouchableOpacity style={cssCD.submit}>
                    <Text style={cssCD.text}>Cadastrar</Text>
                </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}
