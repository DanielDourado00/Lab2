import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const dias = [
    { nome: 'Segunda-feira', treino: 'Peito' },
    { nome: 'Terça-feira', treino: 'Perna' },
    { nome: 'Quarta-feira', treino: 'Costa' },
    { nome: 'Quinta-feira', treino: 'Braco' },
    { nome: 'Sexta-feira', treino: 'Perna' },
    { nome: 'Sábado', treino: 'Cardio' },
    { nome: 'Domingo', treino: 'Cardio' },
];

export default function TelaInicio() {
    const [showList, setShowList] = useState(false);
    const [showButton, setShowButton] = useState(true); // Mostrar o botão inicialmente
    const navigation = useNavigation();

    useEffect(() => {
        // Alterar o estado para esconder o botão após o primeiro clique
        if (showList) {
            setShowButton(false);
        }
    }, [showList]);

    const handleDayPress = (treino) => {
        // Navegar para a tela correspondente com base no treino selecionado
        navigation.navigate(treino);
        // Alterar o estado para mostrar a lista de dias da semana
        setShowList(true);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Que dia é hoje?</Text>
            {showButton && (
                <Button
                    title="Mostrar dias da semana"
                    onPress={() => handleDayPress("")} // Passar uma string vazia para não navegar para outra tela
                />
            )}
            {showList && (
                <FlatList                   // Usar FlatList para exibir a lista de dias
                    style={styles.list}     
                    data={dias}             // Passar os dias da semana como dados
                    renderItem={({ item }) => ( // Renderizar cada item da lista
                        <Button
                            title={item.nome}
                            onPress={() => handleDayPress(item.treino)} // Passar o treino correspondente ao dia
                        />
                    )}
                    keyExtractor={(item, index) => index.toString()}
                />
            )}
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
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    list: {
        marginTop: 20,
    },
});
