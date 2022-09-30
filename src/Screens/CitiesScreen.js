// import React from 'react';
// import urlAPI from '../API';
import CityCard from '../components/CityCard';
import React, { useState, useEffect } from 'react'
// import { Link as LinkRouter } from 'react-router-dom';
import { useGetAllCitiesQuery } from '../features/citiesAPI';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';

export default function CitiesScreen() {
    const [search, setSearch] = useState("")

    const {
        data: cities
    } = useGetAllCitiesQuery(search)

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <ScrollView>
                <View className='Main-Cities'>
                    <View className='Search-Cities'>
                        <input className='Input-Cities' type="text" name="" placeholder=' Search by city...' onChange={(city) => { setSearch(city.target.value) }} />
                    </View>
                    <View className='citiesPageContainer'>
                        {cities?.response?.map((city) => (
                                <View className='City-container'>
                                    <img className="City-img" src={city.photo} />
                                    <h3 className='City-text text-center'>{city.city}</h3>
                                </View>
                        ))}
                    </View>
                </View>
                <Image source={{ uri: 'http://mytinerary-ignaro.herokuapp.com/img/logo.png' }} />
            </ScrollView>
        </View>
    )
}


// import urlAPI from '../API';
// import CityCard from '../components/CityCard';
// import React, { useState, useEffect } from 'react'
// import { Link as LinkRouter } from 'react-router-dom';
// import { useGetAllCitiesQuery } from '../features/citiesAPI';
// import { StatusBar } from 'expo-status-bar';
// import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';

// // El onChange es una función de tipo "escuchador" que se va a actualizar cada vez que el input cambie

// export default function Cities() {
//     const [search, setSearch] = useState("")

//     const {
//         data: cities
//     } = useGetAllCitiesQuery(search)

//     return (
//         <>
//             <view className='Main-Cities'>
//                 <view className='Search-Cities'>
//                     <input className='Input-Cities' type="text" name="" placeholder=' Search by city...' onChange={(city) => { setSearch(city.target.value) }} />
//                 </view>
//                 <view className='citiesPageContainer'>
//                     {cities?.response?.map((city) => (
//                         <LinkRouter className='decoration-none flex-center' key={city._id} to={`/citydetails/${city._id}`}>
//                             <view className='City-container'>
//                                 <img className="City-img" src={city.photo} />
//                                 <h3 className='City-text text-center'>{city.city}</h3>
//                             </view>
//                         </LinkRouter>
//                     ))}
//                 </view>
//             </view>
//         </>
//     )
// }


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});