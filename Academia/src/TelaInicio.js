import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

export default function TelaInicio({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Olá Usuario!</Text>
            <Button 
                mode="contained"
                onPress={() => navigation.navigate('Dia')}
            >
                Iniciar Treino
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
});
