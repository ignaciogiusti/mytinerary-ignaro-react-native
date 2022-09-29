import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';

export default function HomeScreen() {
    return (
        <View>
            <View>
                <Text>MyTinerary</Text>
                <Text>Find your perfect trip, designed by insiders who know and love their cities!</Text>
                <Text>Get Started!</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});