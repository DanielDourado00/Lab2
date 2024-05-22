import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import { Button } from 'react-native-paper';

export default function TelaInicio({ navigation, username }) {
    const { width, height } = Dimensions.get('window');

    const handleLogout = () => {
        navigation.navigate('Login');
    };

    return (
        <ImageBackground
            source={require('./Imagens/backgroundgym.png')}
            style={[styles.background, { width, height }]}
        >
            <View style={styles.container}>
                <Text style={styles.text}>Olá {username}!</Text>
                <View style={styles.buttonContainer}>
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
                        style={[styles.button, styles.logoutButton]}
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
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        marginBottom: 20,
        color: '#fff',
    },
    buttonContainer: {
        marginTop: 20,
        width: '80%',
    },
    button: {
        marginBottom: 10,
    },
    logoutButton: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
    },
});
