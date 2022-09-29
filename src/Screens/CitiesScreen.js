import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';

export default function CitiesScreen() {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <ScrollView>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae porttitor enim, eleifend fringilla magna. Nulla sollicitudin congue tempus. Praesent condimentum sem vitae nulla condimentum, nec gravida ante semper. Aliquam neque enim, imperdiet et iaculis eu, porta a dui. Aenean vitae dictum odio, eget lacinia ligula. Morbi vel sagrittis neque. Mauris ac nisi nec diam mollis convallis. Duis semper dui ac dapibus mattis. Proin vitae pellentesque sapien. Nulla suscipit euismod tortor vitae vulputate. Cras congue metus sit amet felis lobortis, ut dapibus libero molestie.
                </Text>
                <Image source={{ uri: 'http://mytinerary-ignaro.herokuapp.com/img/logo.png' }} />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });