import React from 'react';
import CityCard from './CityCard';
import { ScrollView, StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
// import '../styles/Carousel.css'
// import SlideArrow from '../../../mitinerary-alessandro-giusti/src/components/Carousel/SlideArrow';
// import axios from 'axios';
import { useEffect, useState } from 'react';
// import CityCard from './CityCard';
// import { Link as LinkRouter } from 'react-router-dom';
import { useGetAllCitiesQuery } from '../features/citiesAPI';
export default function Carousel(props) {
        const itemRange = props.range;
        const slidesLimit = (props.slides * itemRange);
        const [rangeItemStart, setStart] = useState(0);
        const [rangeItemEnd, setEnd] = useState(rangeItemStart + itemRange);
        const [intervalTime, setIntervalTime] = useState();
        const interval = props.interval * 1000;

        const {
            data: cities
        } = useGetAllCitiesQuery()

        useEffect(() => {
            let slideTimer = setInterval(function () {
                nextSlide()
            }, interval)

            setIntervalTime(slideTimer)

            return clearInterval(intervalTime);
        }, [rangeItemStart])

        function previousSlide() {
            if (rangeItemStart >= itemRange) {
                setStart(rangeItemStart - itemRange)
                setEnd(rangeItemEnd - itemRange)
            } else {
                setStart(slidesLimit - itemRange)
                setEnd(slidesLimit)
            }
        }
        function nextSlide() {
            if (rangeItemStart < slidesLimit - itemRange) {
                setStart(rangeItemStart + itemRange)
                setEnd(rangeItemEnd + itemRange)
            } else {
                setStart(0)
                setEnd(itemRange)
            }
        }

        // const [cities, setCities] = useState([])
        const cityCard = (itemsMap) => (
            // <LinkRouter className='decoration-none flex-center' key={itemsMap._id} to={`/citydetails/${itemsMap._id}`}>
                <View className='City-container'>
                    <img className="City-img" src={itemsMap.photo} />
                    <h3 className='City-text text-center'>{itemsMap.city}</h3>
                </View>
            // </LinkRouter>
        )

        return (
            <>
                <View className='Carousel-bg'>
                    <h5 className='Carousel-Title text-light text-center'>Popular My<Text className='Title-Tinerary'>Tineraries</Text></h5>
                {/* <CityCard /> */}
                    <View className='Carousel-container'>
                        {/* <SlideArrow icon={<img className='Arrow-img' src='img/arrow-left-light.png' />} click={previousSlide} /> */}
                        <View>
                            <View className='Carousel-slide justify-center'>
                                {cities?.response?.slice(rangeItemStart, rangeItemEnd).map(cityCard)}
                            </View>
                        </View>
                        {/* <SlideArrow icon={<img className='Arrow-img' src='img/arrow-right-light.png' />} click={nextSlide} /> */}
                    </View>
                </View>
            </>
        )
        return (
            <View>
                <View style={{ alignItems: 'center' }}>
                    <Text style={styles.title}>Popular My<Text style={styles.titleOrange}>Tineraries</Text></Text>
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