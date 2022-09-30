import React from 'react';
import CallToAction from '../components/CallToAction'
import Carousel from '../components/Carousel';
import backgroundScreens from '../components/Background'
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image, ImageBackground } from 'react-native';

export default function HomeScreen() {
    return (
        <View>
            <ImageBackground source={backgroundHome} resizeMode="cover" style={{ width: '100%', height: '1000px' }} >
                <View style={styles.container}>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={styles.title}>My<Text style={styles.titleOrange}>Tinerary</Text></Text>
                        <Text style={styles.slogan}>Find your perfect trip, designed by insiders who know and love their cities!</Text>
                        <CallToAction />
                    </View>
                </View>
            </ImageBackground>
            <ImageBackground source={backgroundScreens} resizeMode="cover" style={{ width: '100%', height: '105%' }} >
                <Carousel />
            </ImageBackground>
        </View>
    )
};

//----------------------------------------------------
const backgroundHome = { uri: 'http://mytinerary-ignaro.herokuapp.com/static/media/Venice.2dab1fd4b1b567bcc5db.jpg' };
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#f5f5f5',
        textShadowColor: '#000',
        textShadowOffset: {width: -1, height: -1},
        textShadowRadius: 10
    },
    titleOrange: {
        color: '#ffa500',
    },
    slogan: {
        margin: 100,
        textAlign: 'center',
        paddingVertical: 10,
        width: '40%',
        borderRadius: 6,
        backgroundColor: '#0000004d',
        width: '75%',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#f5f5f5',
    },
});