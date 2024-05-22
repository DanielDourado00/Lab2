import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const ListaAlunos = ({ userData }) => {
    if (!userData || userData.length === 0) {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Nenhum aluno encontrado.</Text>
            </View>
        );
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Alunos Cadastrados:</Text>
            <View style={styles.table}>
                <View style={styles.tableHeader}>
                    <Text style={styles.tableHeaderText}>#</Text>
                    <Text style={styles.tableHeaderText}>Nome</Text>
                    <Text style={styles.tableHeaderText}>Email</Text>
                    <Text style={styles.tableHeaderText}>Idade</Text>
                </View>
                {userData.map((user, index) => (
                    <View key={index} style={styles.tableRow}>
                        <Text style={styles.tableCell}>{index + 1}</Text>
                        <Text style={styles.tableCell}>{user.username}</Text>
                        <Text style={styles.tableCell}>{user.email}</Text>
                        <Text style={styles.tableCell}>{user.idade}</Text>
                    </View>
                ))}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    table: {
        width: '100%',
    },
    tableHeader: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        paddingBottom: 5,
        marginBottom: 10,
    },
    tableHeaderText: {
        flex: 1,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    tableRow: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    tableCell: {
        flex: 1,
        textAlign: 'center',
    },
});

export default ListaAlunos;
