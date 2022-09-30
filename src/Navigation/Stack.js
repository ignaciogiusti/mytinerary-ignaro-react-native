import React from 'react';
import HomeScreen from '../Screens/HomeScreen';
import CitiesScreen from "../Screens/CitiesScreen";
// import CityDetails from "../Screens/CityDetails";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const StackNav = createNativeStackNavigator()

export default function StackNavigate() {
    return (
        <StackNav.Navigator initialRouteName="Home">
            <StackNav.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
            <StackNav.Screen name="Cities" component={CitiesScreen} options={{ headerShown: false}}/>
            {/* <StackNav.Screen name="CityDetails" component={CityDetails} options={{headerShown: false}} initialParams={{ id: "" }}/> */}
        </StackNav.Navigator>
        )
    }