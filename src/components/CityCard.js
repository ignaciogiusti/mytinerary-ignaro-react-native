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
                    <View >
                        <Image resizeMode='cover' style={{
                            width: 300,
                            height: 300,
                            margin: 12
                        }} source={{ uri: city.photo }} />
                        <Text style={styles.text}>{city.city}</Text>
                    </View>
                    // </LinkRouter>
                ))}
            </View>
        </>
    )
}


//----------------------------------------------------
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f5f5f5',
        height: '500%',
        width: '95%',
    },
    cityContainer: {
        backgroundColor: '#f5f5f5',
        marginBottom: 10
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