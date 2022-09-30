import React from 'react';
import HomeScreen from '../Screens/HomeScreen'
import CitiesScreen from '../Screens/CitiesScreen'
import SignInScreen from '../Screens/SignInScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';

const DrawerNavigation = createDrawerNavigator();
export default function DrawerNavigator() {
    return (
        <DrawerNavigation.Navigator>
            <DrawerNavigation.Screen name='Home' component={HomeScreen}/>
            <DrawerNavigation.Screen name='Cities' component={CitiesScreen}/>
            {/* <DrawerNavigation.Screen name='New City' component={NewCityScreen}/> */}
            {/* <DrawerNavigation.Screen name='Edit City' component={EditCityScreen}/> */}
            <DrawerNavigation.Screen name='Sign In' component={SignInScreen}/>
            {/* <DrawerNavigation.Screen name='Profile' component={ProfileScreen}/> */}
        </DrawerNavigation.Navigator>
    )
}