import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';

export default function Button(props) {
    const { onPress, title = 'Get Started!' } = props;

    return (
        <View>
            <Pressable style={styles.button} onPress={onPress}>
                <Text style={styles.text}>{title}</Text>
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