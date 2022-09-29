import React from 'react';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import citiesAPI from './redux/citiesAPI';
import DrawerNavigator from './src/Navigation/Drawer';

export default function App() {
  // const reduxStore = configureStore({ reducer: citiesAPI })
  return (
//     <View style={styles.container}>
//       <View>
//         <Text>HomeScreen</Text>
//         <Text>HomeScreen</Text>
//         <Text>HomeScreen</Text>
//       </View>
//     </View>
//   )
// }

    // <Provider /* store={reduxStore} */>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
      // </Provider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });