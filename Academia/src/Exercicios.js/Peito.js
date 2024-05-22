import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button, ImageBackground } from 'react-native';

const initialExercises = [
    'Supino Reto - 4 séries de 8-12 repetições',
    'Supino Inclinado - 3 séries de 10-12 repetições',
    'Crucifixo com Halteres - 3 séries de 12-15 repetições',
    'Flexões - 3 séries até a falha',
    'Pullover com Halteres - 3 séries de 12 repetições',
];

export default function TelaInicio() {
    const [activeExercises, setActiveExercises] = useState(
        initialExercises.map((name, index) => ({ name, index }))
    );
    const [completedExercises, setCompletedExercises] = useState([]);
    const [showCompleted, setShowCompleted] = useState(false);
    const [showCongratulations, setShowCongratulations] = useState(false);

    useEffect(() => {
        if (activeExercises.length === 0 && completedExercises.length === initialExercises.length) {
            setShowCongratulations(true);
        } else {
            setShowCongratulations(false);
        }
    }, [activeExercises, completedExercises]);

    const toggleExercise = (index) => {
        const newActiveExercises = [...activeExercises];
        const completedExercise = newActiveExercises.splice(index, 1)[0];
        setActiveExercises(newActiveExercises);
        setCompletedExercises([...completedExercises, completedExercise]);
    };

    const unmarkExercise = (index) => {
        const newCompletedExercises = [...completedExercises];
        const activeExercise = newCompletedExercises.splice(index, 1)[0];
        const newActiveExercises = [...activeExercises, activeExercise];

        newActiveExercises.sort((a, b) => a.index - b.index);
        setActiveExercises(newActiveExercises);
        setCompletedExercises(newCompletedExercises);
    };

    const toggleCompletedVisibility = () => {
        setShowCompleted(!showCompleted);
    };

    return (
        <ImageBackground
            source={require("../Imagens/backgroundgym.png")}
            style={styles.backgroundImage}
            imageStyle={{ opacity: 0.8 }}
        >
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.title}>Treino de Peito</Text>
                    {activeExercises.map((exercise, index) => (
                        <TouchableOpacity
                            key={exercise.index}
                            onPress={() => toggleExercise(index)}
                            style={styles.exerciseContainer}
                        >
                            <View style={styles.checkbox} />
                            <Text style={styles.exerciseText}>{exercise.name}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
                <View style={styles.footer}>
                    <Button
                        title={showCompleted ? "Ocultar Concluídos" : "Conferir Concluídos"}
                        onPress={toggleCompletedVisibility}
                    />
                    {showCompleted && (
                        <View style={styles.completedContainer}>
                            {completedExercises.length > 0 ? (
                                completedExercises.map((exercise, index) => (
                                    <TouchableOpacity
                                        key={exercise.index}
                                        onPress={() => unmarkExercise(index)}
                                        style={styles.exerciseContainer}
                                    >
                                        <View style={[styles.checkbox, styles.checkboxChecked]} />
                                        <Text style={styles.exerciseText}>{exercise.name}</Text>
                                    </TouchableOpacity>
                                ))
                            ) : (
                                <Text style={styles.noCompletedText}>Não há exercícios concluídos</Text>
                            )}
                        </View>
                    )}
                </View>
                {showCongratulations && (
                    <View style={styles.congratulationsContainer}>
                        <Text style={styles.congratulationsText}>Parabéns! O de hoje tá pago!</Text>
                    </View>
                )}
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        width: '100%',
    },
    content: {
        flex: 1,
        padding: 16,
    },
    footer: {
        paddingHorizontal: 16,
        paddingBottom: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#000',
    },
    exerciseContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 3,
    },
    checkbox: {
        width: 24,
        height: 24,
        borderWidth: 2,
        borderColor: '#000',
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkboxChecked: {
        backgroundColor: '#000',
    },
    exerciseText: {
        fontSize: 16,
        color: '#000',
    },
    completedContainer: {
        marginTop: 20,
    },
    noCompletedText: {
        fontSize: 16,
        textAlign: 'center',
        marginTop: 20,
        color: 'gray',
    },
    congratulationsContainer: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 255, 0, 0.7)',
    },
    congratulationsText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
    },
});
