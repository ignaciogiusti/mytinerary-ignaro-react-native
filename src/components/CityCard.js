import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import urlAPI from '../API';
// import '../styles/Cities.css';
// import axios from 'axios'
// import { useEffect, useState } from 'react';
// import { Link as LinkRouter } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchFromServer } from '../features/citiesSlice';
import { useGetAllCitiesQuery } from '../features/citiesAPI';

// const city = {
//     photo: 'http://mytinerary-ignaro.herokuapp.com/static/media/Venice.2dab1fd4b1b567bcc5db.jpg',
//     city: 'City'
// };
export default function CityCard() {

    const { 
        data: cities,
        error,
        isLoading,
        isSuccess,
        isFailed
    } = useGetAllCitiesQuery()
    

    return (
        <>
            <View className='citiesPageContainer'>
                {cities.map((city) => (
                    // <LinkRouter key={city._id} to={`/citydetails/${city._id}`}>
                        <View className='City-container'>
                            <img className="City-img" src={city.photo} />
                            <h3 className='City-text text-center'>{city.city}</h3>
                        </View>
                    // </LinkRouter>
                ))}
            </View>
        </>
    )
    return (
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