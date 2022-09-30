import React from 'react';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import citiesAPI from './redux/citiesAPI';
import DrawerNavigator from './src/Navigation/Drawer';
import StackNavigate from './src/Navigation/Stack';

export default function App() {
  // const reduxStore = configureStore({ reducer: citiesAPI })
  return (

    // <Provider /* store={reduxStore} */>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
      // </Provider>
  );
}