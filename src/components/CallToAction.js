import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';

export default function CallToAction(/* navigation */) {
    const onPressCities = () => {
        navigation.navigate('Cities')
    }

    return (
        <View>
            <Pressable style={styles.button} onPress={onPressCities}>
                <Text style={styles.text} >Get Started!</Text>
            </Pressable>
        </View>
    );
}

//----------------------------------------------------
const styles = StyleSheet.create({
    button: {
        margin: 100,
        alignItems: 'center',
        paddingVertical: 10,
        backgroundColor: '#571002',
        width: '40%',
        borderRadius: 6
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#f5f5f5',
    },
});