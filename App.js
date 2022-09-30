import React from 'react';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import citiesAPI from './src/features/citiesAPI';
import store from './src/store';
import DrawerNavigator from './src/Navigation/Drawer';

export default function App() {
  return (
    <Provider store={store} >
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
      </Provider>
  );
}