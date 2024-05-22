import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ImageBackground } from 'react-native';
import { Button } from 'react-native-paper';

export default function Cadastro({ navigation, setUserData }) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [idade, setIdade] = useState('');

    const handleCadastro = () => {
        const newUserData = { username, email, idade };
        setUserData(prevUserData => [...prevUserData, newUserData]); // Adiciona os novos dados ao estado global
        navigation.navigate('Login'); // Redireciona para a tela de login
    };

    return (
        <ImageBackground
            source={require('./Imagens/backgroundgym.png')}
            style={styles.background}
            imageStyle={styles.backgroundImage}
        >
            <View style={styles.container}>
                <Text style={styles.title}>Cadastro de Usuário</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Nome de Usuário"
                    value={username}
                    onChangeText={text => setUsername(text)}
                    placeholderTextColor="rgba(0, 0, 0, 0.8)" // Opacidade 80%
                />
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={text => setEmail(text)}
                    placeholderTextColor="rgba(0, 0, 0, 0.8)" // Opacidade 80%
                />
                <TextInput
                    style={styles.input}
                    placeholder="Idade"
                    value={idade}
                    onChangeText={text => setIdade(text)}
                    keyboardType="numeric"
                    placeholderTextColor="rgba(0, 0, 0, 0.8)" // Opacidade 80%
                />
                <Button 
                    mode="contained"
                    onPress={handleCadastro}
                >
                    Cadastrar
                </Button>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        brightness: -0.9, // Brilho -90

    },
    backgroundImage: {
        resizeMode: 'cover',
        brightness: -0.9, // Brilho -90
        contrast: -0.35, // Contraste -35
        saturate: -0.55, // Destaque -55
        opacity: 0.8, // Opacidade 80%
        
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    title: {
        fontSize: 32,
        color: '#fff',
        marginBottom: 40,
    },
    input: {
        width: '100%',
        height: 40,
        marginBottom: 20,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 5,
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Opacidade 80%
        color: '#000', // Cor do texto preto
    },
});
