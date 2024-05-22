import React from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground, Dimensions } from 'react-native';

const ListaAlunos = ({ userData }) => {
    const { width, height } = Dimensions.get('window');

    if (!userData || userData.length === 0) {
        return (
            <ImageBackground
                source={require('./Imagens/backgroundgym.png')}
                style={[styles.background, { width: width, height: height }]}
                imageStyle={styles.imageStyle} // Diminuir a opacidade da imagem de fundo
            >
                <View style={styles.container}>
                    <Text style={styles.title}>Nenhum aluno encontrado.</Text>
                </View>
            </ImageBackground>
        );
    }

    return (
        <ImageBackground
            source={require('./Imagens/backgroundgym.png')}
            style={[styles.background, { width: width, height: height }]}
            imageStyle={styles.imageStyle} // Diminuir a opacidade da imagem de fundo
        >
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.overlay}>
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
                </View>
            </ScrollView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageStyle: {
        opacity: 0.3, // Diminuir a opacidade da imagem de fundo
    },
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Fundo preto semi-transparente
        padding: 16,
        borderRadius: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#fff', // Cor do texto branco para melhor visibilidade
        textAlign: 'center', // Centralizar o título
    },
    table: {
        width: '100%',
    },
    tableHeader: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#fff',
        paddingBottom: 5,
        marginBottom: 10,
    },
    tableHeaderText: {
        flex: 1,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff', // Cor do texto branco para melhor visibilidade
    },
    tableRow: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    tableCell: {
        flex: 1,
        textAlign: 'center',
        color: '#fff', // Cor do texto branco para melhor visibilidade
    },
});

export default ListaAlunos;
