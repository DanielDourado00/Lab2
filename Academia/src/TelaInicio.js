import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { Button } from 'react-native-paper';

export default function TelaInicio({ navigation, username }) {
    const handleLogout = () => {
        navigation.navigate('Login'); // Redireciona para a tela de login
    };

    return (
        <ImageBackground
            source={require('./Imagens/backgroundgym.png')}
            style={styles.background}
        >
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.text}>Olá {username}!</Text>
                </View>
                <View style={styles.buttonsContainer}>
                    <Button 
                        mode="contained"
                        onPress={() => navigation.navigate('Dia')}
                        style={styles.button}
                    >
                        Iniciar Treino
                    </Button>
                    <Button 
                        mode="outlined"
                        onPress={handleLogout}
                        style={[styles.button, styles.logoutButton]} // Adiciona estilos específicos para o botão de logout
                    >
                        Logout
                    </Button>
                </View>
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
        width: '100%',
        padding: 16,
        justifyContent: 'space-between',
    },
    header: {
        marginTop: 40, // Ajuste conforme necessário
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        marginBottom: 20,
        color: '#fff', // Cor do texto branco para melhor visibilidade
    },
    buttonsContainer: {
        alignItems: 'center',
    },
    button: {
        marginTop: 10,
        width: '80%', // Ajusta a largura do botão
    },
    logoutButton: {
        marginTop: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Fundo branco com 80% de opacidade
    },
});
