import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const dias = [
    { nome: 'Segunda-feira', treino: 'Peito' },
    { nome: 'Terça-feira', treino: 'Perna' },
    { nome: 'Quarta-feira', treino: 'Costa' },
    { nome: 'Quinta-feira', treino: 'Braco' },
    { nome: 'Sexta-feira', treino: 'Perna' },
    { nome: 'Sábado', treino: 'Cardio' },
    { nome: 'Domingo', treino: 'Cardio' },
];

export default function TelaInicio() {
    const [showList, setShowList] = useState(false);
    const [showButton, setShowButton] = useState(true); // Mostrar o botão inicialmente
    const navigation = useNavigation();

    useEffect(() => {
        // Alterar o estado para esconder o botão após o primeiro clique
        if (showList) {
            setShowButton(false);
        }
    }, [showList]);

    const handleDayPress = (treino) => {
        // Navegar para a tela correspondente com base no treino selecionado
        navigation.navigate(treino);
        // Alterar o estado para mostrar a lista de dias da semana
        setShowList(true);
    };

    return (
        <ImageBackground
            source={require('./Imagens/backgroundgym.png')}
            style={styles.background}
        >
            <View style={styles.container}>
                <Text style={styles.title}>Que dia é hoje?</Text>
                {showButton && (
                    <Button
                        title="Mostrar dias da semana"
                        onPress={() => setShowList(true)} // Mostrar a lista de dias
                        color="#4B0082" // Cor roxa
                        style={styles.button} // Estilo para botão
                    />
                )}
                {showList && (
                    <FlatList
                        style={styles.list}
                        data={dias}
                        renderItem={({ item }) => (
                            <Button
                                title={item.nome}
                                onPress={() => handleDayPress(item.treino)}
                                color="#4B0082" // Cor roxa
                                style={styles.button} // Estilo para botão
                            />
                        )}
                        keyExtractor={(item, index) => index.toString()}
                    />
                )}
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.8, // Opacidade de 80%
    },
    container: {
        flex: 1,
        justifyContent: 'flex-start', // Alinhar o conteúdo no topo
        alignItems: 'center',
        paddingTop: 100, // Distância do topo aumentada para 100
        padding: 16,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold', 
        color: '#fff', // Cor do texto branco
        marginBottom: 20,   
    },
    list: {
        marginTop: 20,  // Distância do topo aumentada para 20
    },
    button: {
        borderRadius: 100, // Torna o botão redondo definindo o borderRadius para metade da altura
        overflow: 'hidden', // Garante que o conteúdo do botão permaneça dentro da borda arredondada
    },
});
