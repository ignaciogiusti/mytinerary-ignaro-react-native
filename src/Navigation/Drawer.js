import React from 'react'
import HomeScreen from '../Screens/HomeScreen';
import CitiesScreen from '../Screens/CitiesScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';

const DrawerNavigation = createDrawerNavigator();
export default function DrawerNavigator() {
    return (
        <DrawerNavigation.Navigator>
            <DrawerNavigation.Screen name='Home' component={HomeScreen}/>
            <DrawerNavigation.Screen name='Cities' component={CitiesScreen}/>
        </DrawerNavigation.Navigator>
    )
}
