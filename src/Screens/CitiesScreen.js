// import React from 'react';
// import urlAPI from '../API';
import CityCard from '../components/CityCard';
import React, { useState, useEffect } from 'react'
// import { Link as LinkRouter } from 'react-router-dom';
import { useGetAllCitiesQuery } from '../features/citiesAPI';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image, ImageBackground, TextInput } from 'react-native';

export default function CitiesScreen() {
    const [search, setSearch] = useState("")

    const {
        data: cities
    } = useGetAllCitiesQuery(search)

    return (
        <View>
            <StatusBar style="auto" />
            <ScrollView>
                <View style={styles.container}>
                    <View>
                        <TextInput style={styles.input} type="text" name="" placeholder=' Search by city...' onChange={(city) => { setSearch(city.target.value) }} />
                    </View>
                    <View>
                        {cities?.response?.map((city) => (
                            <View style={styles.cityContainer}>
                                <Image resizeMode='cover' style={{
                                    width: 300,
                                    height: 300,
                                    margin: 12
                                    }} source={{ uri: city.photo }} />
                                <Text style={styles.text}>{city.city}</Text>
                            </View>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1d1e23',
        height: '500%',
        width: '100%',
    },
    cityContainer: {
        backgroundColor: '#f5f5f5',
        marginBottom: 10
    },
    text: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
        paddingBottom: 12,
    },
    input: {
        height: 30,
        borderWidth: 1,
        borderRadius: 6,
        padding: 10,
        margin: 10,
        backgroundColor: '#f5f5f5',
        width: '100%',
    }
});