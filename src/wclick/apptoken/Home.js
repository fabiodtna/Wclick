    import React, {useState, useEffect} from 'react';
    import { AsyncStorage } from 'react-native';
    import { View, 
        Text,
        KeyboardAvoidingView, 
        TextInput, 
        TouchableOpacity, 
        Image,
        ScrollView} from 'react-native'
        import { cssH } from '../../css/cssH';

    export default function Home({navigation}) {

    const [user, setUser]= useState();
    const [iduser, setIduser]= useState();

    useEffect(()=>{
        async function getUser(){
            let name=await AsyncStorage.getItem('userData');
            let iduser=await AsyncStorage.getItem('userData');
            let json=JSON.parse(name);
            let id=JSON.parse(iduser);
            setIduser(id.id);
            setUser(json.nm_nome);
        }
        getUser();
    },[]);

    return (
        <KeyboardAvoidingView style={cssH.container}>
            <View style={cssH.view1}>
                <Image style={cssH.Userlogo} source={require('../../img/avatar/defalt.png')}/> 
                <Text style={cssH.textname}>{user}-{iduser}</Text>
                <Text style={cssH.editar}>Editar</Text> 
                <Text style={cssH.sair}>Sair</Text>
            </View>
            <View style={cssH.view2}>
                <TextInput placeholder={' Pesquisar '} style={cssH.pesquisa}placeholderTextColor="black"  /> 
                <TouchableOpacity style={cssH.Peslogo}>
                    <Image style={{
                         width: 30,
                         height: 30,
                    }} 
                    source={require('../../img/logo/pesq.png')}/> 
                </TouchableOpacity>
            </View>
            
            <View style={cssH.view3}>
                <TouchableOpacity style={cssH.Adefeito}> 
                    <Text style={{fontSize:13}}
                            onPress={() => navigation.navigate('CriarAnuncio')}>
                            Aparelho com defeito?
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={cssH.rank}> 
                    <Text style={{fontSize:13}}>Rank</Text>
                </TouchableOpacity>
            </View>
            <View style={cssH.view4}>
                    <View style={cssH.categoria}>
                        <Text style={cssH.Tcategoria}>Celular</Text>
                        <Text style={cssH.Tcategoria}>Desktop</Text>
                        <Text style={cssH.Tcategoria}>Notebook</Text>
                        <Text style={cssH.Tcategoria}>Geladeira</Text>
                        <Text style={cssH.Tcategoria}>Console</Text>
                        <Text style={cssH.Tcategoria}>Microondas</Text>
                        <Text style={cssH.Tcategoria}>M.d.lavar</Text>
                        <Text style={cssH.Tcategoria}>A.Som</Text>
                        <Text style={cssH.Tcategoria}>TV</Text>   
                        
                            <Image style={cssH.Tlogo} source={require('../../img/logo/logo.jpg')}/> 
                        
                    </View> 


                <ScrollView showsVerticalScrollIndicator={false}
                style={cssH.anuncios}>
                    <View style={cssH.poste}>
                        <TouchableOpacity onPress={() => navigation.navigate('Anuncio')}>
                          <View style={cssH.Postcon}>
                                <View style={cssH.VPavatarnome}>
                                <Image style={cssH.Auserlogo} source={require('../../img/avatar/2.png')}/> 
                                <Text style={cssH.Ausernome}>Carla</Text>
                                </View>
                                <Text style={cssH.Postext}>

                                Touch do motorola motoE4 não funciona
                                
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={cssH.poste}>
                    <TouchableOpacity onPress={() => navigation.navigate('Anuncio')}>
                          <View style={cssH.Postcon}>
                                <View style={cssH.VPavatarnome}>
                                <Image style={cssH.Auserlogo} source={require('../../img/avatar/1.png')}/> 
                                <Text style={cssH.Ausernome}>Joana</Text>
                                </View>
                                <Text style={cssH.Postext}>

                                Arcondicionado parou de funcionar
                                marca 'seila'

                                
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={cssH.poste}>
                    <TouchableOpacity onPress={() => navigation.navigate('Anuncio')}>
                          <View style={cssH.Postcon}>
                                <View style={cssH.VPavatarnome}>
                                <Image style={cssH.Auserlogo} source={require('../../img/avatar/4.png')}/> 
                                <Text style={cssH.Ausernome}>João</Text>
                                </View>
                                <Text style={cssH.Postext}>

                                Meu Notebook Positivo está com problemas no teclado!

                                
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={cssH.poste}>
                    <TouchableOpacity onPress={() => navigation.navigate('Anuncio')}>
                          <View style={cssH.Postcon}>
                                <View style={cssH.VPavatarnome}>
                                <Image style={cssH.Auserlogo} source={require('../../img/avatar/5.png')}/> 
                                <Text style={cssH.Ausernome}>Carlos</Text>
                                </View>
                                <Text style={cssH.Postext}>

                                Preciso de uma tecnico minha TV esta com defeito
                                
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={cssH.poste}>
                        <Text>
                            sad
                        </Text>
                        <Text>
                            sad
                        </Text>
                        <Text>
                            sad
                        </Text>
                        <Text>
                            sad
                        </Text>
                        <Text>
                            sad
                        </Text>
                    </View>
                    <View style={cssH.poste}>
                        <Text>
                            sad
                        </Text>
                        <Text>
                            sad
                        </Text>
                        <Text>
                            sad
                        </Text>
                        <Text>
                            sad
                        </Text>
                        <Text>
                            sad
                        </Text>
                    </View>
                    <View style={cssH.Uposte}>
                  <Text>The End!</Text>
                    </View>

                </ScrollView>
            </View>

        </KeyboardAvoidingView>
    )
}
