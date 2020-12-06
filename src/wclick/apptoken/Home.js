    import React, {useState, useEffect} from 'react';
    import { AsyncStorage } from 'react-native';
    import { View, 
        Text,
        KeyboardAvoidingView, 
        TextInput, 
        TouchableOpacity, 
        Image,
        ScrollView,
        FlatList,
        SafeAreaView} from 'react-native'
    
        import { cssH } from '../../css/cssH';

    export default function Home({navigation}) {

    const [feed, setFeed] = useState([]);
    //user logado
    const [user, setUser]= useState();
    
   
    //ID post
    const [idpost, setIpost]= useState();
    //ID do user
    const [iduser, setIduser]= useState();
    //nome userpost
    const [userpost, setUserpost]= useState();
    //categoria post
    const [cat, setCat]= useState();
    //descrção post
    const [descri, setDescri]= useState();
    //enderço do post
    const [ende, setEnde]= useState();

    global.IDpost = idpost;
    global.IDuser = iduser;
    global.nameuser = userpost;
    global.postcat = cat;
    global.postdesc = descri;
    global.postend = ende;
    

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

    
    useEffect(()=>{
        async function loadfeed(){

            let response= await fetch('http:/10.0.0.108:3333/Posts');

            const Feeddata = await response.json();
            setFeed(Feeddata);
    }
    loadfeed();
    },[]);

    

    return (
        <KeyboardAvoidingView style={cssH.container}>
            <View style={cssH.view1}>
                <Image style={cssH.Userlogo}source={require('../../img/avatar/defalt.png')}/> 
                <Text style={cssH.textname}>{user}</Text>
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

                    <SafeAreaView style={cssH.anuncios}>
                        <FlatList
                        data={feed}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity onPress={() => navigation.navigate('Anuncio') ||
                                 setIpost(item.id)||
                                 setUserpost(item.nm_user)||
                                 setCat(item.nm_categoria)||
                                 setDescri(item.nm_descricao)|| 
                                 setEnde(item.nm_endereco)}>
                                <View style={cssH.poste}>
                                  <View style={cssH.Postcon}>
                                        <View style={cssH.VPavatarnome}>
                                        <Image style={cssH.Auserlogo} source={require('../../img/avatar/3.png')}/> 
                                        <Text style={cssH.Ausernome}>{item.nm_user}</Text>
                                        </View>
                                        <Text style={cssH.Postext}>
                                        {item.nm_descricao} 
                                        </Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            
                            );
                        }}
                        />

                    </SafeAreaView>
           </View>

        </KeyboardAvoidingView>
    )
}
