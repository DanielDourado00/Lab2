import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button, Alert } from 'react-native';

const initialArmExercises = [
    'Rosca Direta com Barra - 4 séries de 10-12 repetições',
    'Rosca Alternada com Halteres - 3 séries de 12 repetições (cada braço)',
    'Rosca Concentrada - 3 séries de 12 repetições (cada braço)',
    'Tríceps Pulley - 4 séries de 10-12 repetições',
    'Tríceps Testa - 3 séries de 12 repetições',
    'Mergulho entre bancos - 3 séries até a falha',
];

export default function TelaInicio() {
    const [activeExercises, setActiveExercises] = useState(
        initialArmExercises.map((name, index) => ({ name, index }))
    );
    const [completedExercises, setCompletedExercises] = useState([]);
    const [showCompleted, setShowCompleted] = useState(false);
    const [showCongratulations, setShowCongratulations] = useState(false);

    useEffect(() => {
        if (activeExercises.length === 0 && completedExercises.length === initialArmExercises.length) {
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
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Treino de Braços</Text>
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
                    <Text style={styles.congratulationsText}>Parabéns! O de hoje tá pago! .</Text>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
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
    },
    exerciseContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
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
