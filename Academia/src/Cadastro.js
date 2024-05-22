import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
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
        <View style={styles.container}>
            <Text style={styles.text}>Cadastro de Usuário</Text>
            <TextInput
                style={styles.input}
                placeholder="Nome de Usuário"
                value={username}
                onChangeText={text => setUsername(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={text => setEmail(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Idade"
                value={idade}
                onChangeText={text => setIdade(text)}
                keyboardType="numeric"
            />
            <Button 
                mode="contained"
                onPress={handleCadastro}
            >
                Cadastrar
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
    input: {
        width: '100%',
        height: 40,
        marginBottom: 20,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
});
