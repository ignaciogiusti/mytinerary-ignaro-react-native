import React from 'react';
import CityCard from './CityCard';
import { ScrollView, StyleSheet, Text, View, Image, ImageBackground } from 'react-native';

export default function Carousel() {
    return (
        <View>
            <View style={{ alignItems: 'center' }}>
                <Text style={styles.title}>Popular My<Text style={styles.titleOrange}>Tineraries</Text></Text>
                <CityCard />
            </View>
        </View>
    )
}

//----------------------------------------------------
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        textAlign: 'center',
        margin: 10,
        fontSize: 32,
        fontWeight: 'bold',
        color: '#f5f5f5',
    },
    titleOrange: {
        color: '#ffa500',
    }
});