import React from 'react';
import { Image, Text, View, Button } from 'react-native';
import {css} from '../css/css';

export default function Sobre() 
{
    
    return(
        <View style={css.containerSobre}>
            <View style={css.caixatextsobre}>
                <Text style={css.textsobre}>
                    Você já deve ter parado para se perguntar quem criou certas coisas, quem teve a ideia e como foi feita. Como por exemplo: Benjamin Franklin, teve a ideia de criar o primeiro condutor de eletrecidade empinando uma pipa em um dia de tempestade.
                    
                </Text>
                <Text style={css.textsobre}>
                <Text style={{
                
                }}> Porém </Text> em nosso site criado por alunos querendo completar o T.C.C. (Trabalho de Conclusão de Curso) até que tivemos a "brilhante" ideia de criar este site por meio de nossos conhecimentos recém adquiridos em sala de aula.
                </Text>
                <Text style={css.textsobre}>
                {'\n\n'}Como tivemos essa ideia  ?{'\n\n'}
                </Text>
                <Text style={css.textsobre}>
                Conforme os avanços dos estudos em  nosso dia à dia, começamos a pensar em algo que facilite a vida moderna e possa satisfazer quem estiver o seu uso.
                </Text><Text style={css.textsobre}>
                {'\n\n'}A partir desse momento foi apenas o começo de nosso objetivo. E aqui está o resultado.
                </Text>
            </View>
        </View>
    );   

}