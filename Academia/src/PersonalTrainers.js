import React from 'react';
import { View, Text, FlatList, StyleSheet, ImageBackground, Dimensions } from 'react-native';

const personalTrainers = [
    { id: '1', name: 'Daniel Dourado' },
    { id: '2', name: 'Bruno Zarpelão' },
    { id: '3', name: 'Daniel Kaster' },
    { id: '4', name: 'Jandira' }
];

export default function PersonalTrainers() {
    const { width, height } = Dimensions.get('window');

    return (
        <ImageBackground
            source={require('./Imagens/backgroundgym.png')}
            style={[styles.background, { width: width, height: height }]}
        >
            <View style={styles.container}>
                <FlatList 
                    data={personalTrainers}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.listItem}>
                            <Text style={styles.text}>{item.name}</Text>
                        </View>
                    )}
                />
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
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    listItem: {
        backgroundColor: 'rgba(255, 255, 255, 0.69)', // Fundo branco com 69% de opacidade
        padding: 10,
        marginVertical: 5,
        borderRadius: 10,
        width: '90%',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        color: '#000', // Cor do texto preta
    },
});
