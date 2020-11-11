    import React from 'react'
    import { View, 
        Text,
        KeyboardAvoidingView, 
        TextInput, 
        TouchableOpacity, 
        Image,
        ScrollView} from 'react-native'
import { cssA } from '../../css/cssA';
    import { cssH } from '../../css/cssH';

export default function Home({navigation}) {
    return (
        <KeyboardAvoidingView style={cssH.container}>
            <View style={cssH.view1}>
                <Image style={cssH.Userlogo} source={require('../../img/logo/User.jpg')}/> 
                <Text style={cssH.textname}>NomeUser</Text>
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
                        <Text style={cssH.Tcategoria}>Microndas</Text>
                        <Text style={cssH.Tcategoria}>M.d.lavar</Text>
                        <Text style={cssH.Tcategoria}>A.Som</Text>
                        <Text style={cssH.Tcategoria}>TV</Text>   
                        
                            <Image style={cssH.Tlogo} source={require('../../img/logo/logo.jpg')}/> 
                        
                    </View> 


                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={cssH.poste}>
                        <TouchableOpacity onPress={() => navigation.navigate('Anuncio')}>
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
                </ScrollView>

            </View>

        </KeyboardAvoidingView>
    )
}
