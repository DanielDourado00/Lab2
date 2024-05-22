import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

export default function TelaInicio({ navigation, username }) {
    const handleLogout = () => {
        navigation.navigate('Login'); // Redireciona para a tela de login
    };

    const handleVerAlunos = () => {
        navigation.navigate('ListaAlunos'); // Navega para a tela de listagem de alunos
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Olá {username}!</Text>
            <Button 
                mode="contained"
                onPress={() => navigation.navigate('Dia')}
                style={styles.button}
            >
                Iniciar Treino
            </Button>
            <Button 
                mode="outlined"
                onPress={handleVerAlunos} // Adiciona a função para navegar para a lista de alunos
                style={styles.button}
            >
                Ver Alunos
            </Button>
            <Button 
                mode="outlined"
                onPress={handleLogout}
                style={[styles.button, styles.logoutButton]} // Adiciona estilos específicos para o botão de logout
            >
                Logout
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    text: {
        fontSize: 24,
        marginBottom: 20,
    },
    button: {
        marginTop: 10,
        width: '100%',
    },
    logoutButton: {
        marginTop: 20,
    },
});
