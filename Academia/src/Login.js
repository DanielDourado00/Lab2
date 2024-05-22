import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image, ImageBackground, Dimensions } from 'react-native'; // Importe Dimensions
import { Button } from 'react-native-paper';

export default function Login({ navigation, setUserData }) {
    const [username, setUsername] = useState('');
    const [senha, setSenha] = useState('');
    const [showSenha, setShowSenha] = useState(false);

    const handleLogin = () => {
        navigation.navigate('Main', { username }); // Navega para MainTabs com o parâmetro username
    };

    const { width, height } = Dimensions.get('window'); // Obtenha as dimensões da tela

    return (
        <ImageBackground
            source={require('./Imagens/backgroundgym.png')}
            style={[styles.background, { width, height }]} // Ajuste o estilo da imagem de fundo para ocupar toda a tela
            imageStyle={styles.backgroundImage}
        >
            <View style={styles.container}>
                <Text style={styles.title}>Tela de Login</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Nome de Usuário"
                    value={username}
                    onChangeText={text => setUsername(text)}
                    placeholderTextColor="rgba(0, 0, 0, 0.7)" // Opacidade 70%
                />
                <View style={styles.passwordContainer}>
                    <TextInput
                        style={styles.passwordInput}
                        placeholder="Senha"
                        secureTextEntry={!showSenha}
                        value={senha}
                        onChangeText={text => setSenha(text)}
                        placeholderTextColor="rgba(0, 0, 0, 0.7)" // Opacidade 70%
                    />
                    <Button onPress={() => setShowSenha(!showSenha)} style={styles.eyeButton}>
                        <Image
                            source={showSenha ? require('./Imagens/ocultar.png') : require('./Imagens/ver.png')}
                            style={styles.eyeIcon}
                        />
                    </Button>
                </View>
                <Button mode="contained" onPress={handleLogin}>
                    Login
                </Button>
                <Button
                    mode="outlined"
                    onPress={() => navigation.navigate('Cadastro')}
                    style={styles.cadastroButton}
                >
                    Cadastrar
                </Button>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        justifyContent: 'center',
        alignItems: 'center',
        brightness: -0.7, // Brilho -70
        contrast: -0.35, // Contraste -35
        saturate: -0.55, // Destaque -55
    },
    backgroundImage: {
        resizeMode: 'cover',
        opacity: 0.8, // Opacidade 80%
    },
    container: {
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
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        position: 'relative',
    },
    passwordInput: {
        flex: 1,
        height: 40,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#000',
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
    },
    eyeButton: {
        borderWidth: 0, // Remove a borda do botão
    },
    eyeIcon: {
        width: 24,
        height: 24,
    },
    cadastroButton: {
        marginTop: 10,
        flexDirection: 'row',
        backgroundColor : 'rgba(255, 255, 255, 0.7)',
    },
});
