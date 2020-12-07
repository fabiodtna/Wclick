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
    //ID do user logado
    const [iduser, setIduser]= useState();
    // cliente ou tecnico
    const [idcttc, setIdcttc]= useState();
   
    //sobre post
    //ID post
    const [idpost, setIpost]= useState();
    // Id de quem postou
    const [iduserpost, setIiduserpost]= useState();
    //nome userpost
    const [userpost, setUserpost]= useState();
    //categoria post
    const [cat, setCat]= useState();
    //descrção post
    const [descri, setDescri]= useState();
    //enderço do post
    const [ende, setEnde]= useState();
    
    //id user logado
    global.IDuser = iduser;
    //nome user logado
    global.userlog = user;
    //user cliente == 1 user tecnico == 2
    global.tipocli = idcttc;

    // telacionado ao post

    //id post
    global.IDpost = idpost;
    // id de quem postou;
    global.idUpost = iduserpost;
    //nome de quem postou
    global.nameuser = userpost;
    //categoria do post
    global.postcat = cat;
    // descriçao post
    global.postdesc = descri;
    // endereço fisico do user do post
    global.postend = ende;
    

    useEffect(()=>{
        async function getUser(){
            let name=await AsyncStorage.getItem('userData');
            let iduser=await AsyncStorage.getItem('userData');
            let idCLiTEC=await AsyncStorage.getItem('userData');
            let json=JSON.parse(name);
            let idCT=JSON.parse(idCLiTEC);
            let id=JSON.parse(iduser);
            setIdcttc(idCT.id_cl_tc);
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
    <Text style={cssH.textname}>{user}-{idcttc}</Text>
                <TouchableOpacity>
                    <Text style={cssH.editar}>Editar</Text> 
                </TouchableOpacity>
               <TouchableOpacity onPress={()=> navigation.navigate('Login')  || AsyncStorage.clear('userdata')}>
                   <Text style={cssH.sair}>Sair</Text>
                </TouchableOpacity>
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

                    <View style={cssH.teste}>
                        <TouchableOpacity onPress={()=> navigation.navigate('Chats')}>
                            <Image style={cssH.iconchat} source={require('../../img/logo/chat.png')}/>
                        </TouchableOpacity>  
                    </View>

                    <SafeAreaView style={cssH.anuncios}>
                        <FlatList
                        data={feed}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity onPress={() => navigation.navigate('Anuncio') ||
                                 setIpost(item.id)||
                                 setIiduserpost(item.id_usuario)||
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
                                        <View style={cssH.Vpostxt}>
                                            <Text 
                                            numberOfLines={3} 
                                            style={cssH.Postext}>
                                                {item.nm_descricao}{'\n'}
                                            </Text>
                                        </View>
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
