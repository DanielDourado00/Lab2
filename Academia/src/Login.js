import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Alert } from 'react-native';
import { Button } from 'react-native-paper';

export default function Login({ navigation, onLogin }) {
    const [username, setUsername] = useState('');
    const [senha, setSenha] = useState('');
    const [showSenha, setShowSenha] = useState(false);

    const handleLogin = () => {
        navigation.navigate('TelaInicio', { username });
    }
    

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Tela de Login</Text>
            <TextInput
                style={styles.input}
                placeholder="Nome de Usuário"
                value={username}
                onChangeText={text => setUsername(text)}
            />
            <View style={styles.passwordContainer}>
                <TextInput
                    style={styles.passwordInput}
                    placeholder="Senha"
                    secureTextEntry={!showSenha}
                    value={senha}
                    onChangeText={text => setSenha(text)}
                />
                <Button
                    onPress={() => setShowSenha(!showSenha)}
                >
                    {showSenha ? 'Esconder' : 'Mostrar'}
                </Button>
            </View>
            <Button 
                mode="contained"
                onPress={handleLogin}
            >
                Login
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
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    passwordInput: {
        flex: 1,
        height: 40,
        marginBottom: 20,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
    },
});
