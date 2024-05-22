import React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';

const DimensionsExample = () => {
    const { width, height } = Dimensions.get('window');
    const windowWidth = Dimensions.get('window').width;

    return (
        <View style={styles.container}>
            <Text>{width}</Text>
            <Text>{height}</Text>
            <Text>{windowWidth}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default DimensionsExample;
