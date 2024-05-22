import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const personalTrainers = [
    { id: '1', name: 'Daniel Dourado' },
    { id: '2', name: 'Bruno Zarpelão' },
    { id: '3', name: 'Daniel Kaster' },
    { id: '4', name: 'Jandira' }
];

export default function PersonalTrainers() {
    return (
        <View style={styles.container}>
            <FlatList 
                data={personalTrainers}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <Text style={styles.text}>{item.name}</Text>}
            />
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
        fontSize: 18,
        marginBottom: 10,
    },
});
