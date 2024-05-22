import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, StyleSheet, ImageBackground, Dimensions } from 'react-native';
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
    const [showButton, setShowButton] = useState(true);
    const navigation = useNavigation();
    const { width, height } = Dimensions.get('window');

    useEffect(() => {
        if (showList) {
            setShowButton(false);
        }
    }, [showList]);

    const handleDayPress = (treino) => {
        navigation.navigate(treino);
        setShowList(true);
    };

    // Calcular o tamanho do texto com base na largura da tela
    const titleFontSize = Math.round(width * 0.04);
    const buttonFontSize = Math.round(width * 0.035);

    return (
        <ImageBackground
            source={require('./Imagens/backgroundgym.png')}
            style={[styles.background, { width, height }]}
            resizeMode="cover"
        >
            <View style={styles.container}>
                <Text style={[styles.title, { fontSize: titleFontSize }]}>Que dia é hoje?</Text>
                {showButton && (
                    <Button
                        title="Mostrar dias da semana"
                        onPress={() => setShowList(true)}
                        color="#4B0082"
                        style={[styles.button, { fontSize: buttonFontSize }]}
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
                                color="#4B0082"
                                style={[styles.button, { fontSize: buttonFontSize }]}
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
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 100,
        padding: 16,
    },
    title: {
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 20,
    },
    list: {
        marginTop: 20,
        maxHeight: '70%', // Defina a altura máxima da lista como 70% da altura da tela
    },
    button: {
        borderRadius: 100,
        overflow: 'hidden',
    },
});
