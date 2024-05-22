import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

export default function TelaInicio({ navigation, route }) {
    const { username } = route.params;
    const handleLogout = () => {
        navigation.navigate('Login'); // Redireciona para a tela de login
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Olá {username}!</Text>
            <Button 
                mode="contained"
                onPress={() => navigation.navigate('Dia')}
            >
                Iniciar Treino
            </Button>
            <Button 
                mode="outlined"
                onPress={handleLogout}
                style={styles.logoutButton}
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
    logoutButton: {
        marginTop: 20,
    },
});
