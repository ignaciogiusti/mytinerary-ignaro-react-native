import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, ImageBackground } from 'react-native';

const city = {
    photo: 'http://mytinerary-ignaro.herokuapp.com/static/media/Venice.2dab1fd4b1b567bcc5db.jpg',
    city: 'City'
};
export default function CityCard() {
    return (
        // {cities?.map((val, key) => (
        <View style={styles.container}>
            <Image source={city.photo} resizeMode="cover" style={styles.test} />
            <View style={styles.paddingText}>
                <Text style={styles.text}>{city.city}</Text>
            </View>
        </View>
    )
}

//----------------------------------------------------
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f5f5f5',
        height: '500%',
        width: '95%',
    },
    text: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
    },
    test: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        margin: 12,
    },
    paddingText: {
        paddingBottom: 12,
    }
});