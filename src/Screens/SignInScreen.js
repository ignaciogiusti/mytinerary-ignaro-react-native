import React from 'react'
import backgroundScreens from '../components/Background';
import { ScrollView, StyleSheet, Text, SafeAreaView, View, Image, TextInput, ImageBackground, Pressable } from 'react-native';

export default function SignInScreen() {
  const [email, onChangeMail] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  

  return (
    <ImageBackground source={backgroundScreens} resizeMode="cover" style={{ width: '100%', height: '105%' }} >
      <SafeAreaView style={{ alignItems: 'center' }} >
        <Text style={styles.label}>Email:</Text>
        <TextInput style={styles.input}
          onChangeText={onChangeMail}
          value={email} />

        <Text style={styles.label}>Password:</Text>
        <TextInput style={styles.input}
          onChangeText={onChangePassword}
          value={password} />

        <Pressable style={styles.button} >
          <Text style={styles.text}>Sign In</Text>
        </Pressable>
      </SafeAreaView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    height: '500%',
    width: '95%',
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
    margin: 12,
    color: '#f5f5f5',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderRadius: 6,
    padding: 10,
    backgroundColor: '#f5f5f5',
    width: '70%',
  },
  button: {
    backgroundColor: '#f5f5f5',
    margin: 24,
    paddingTop: 8,
    height: 40,
    borderWidth: 1,
    borderRadius: 6,
    width: '70%',
  },
  text: {
    textAlign: 'center',
    color: '#000',
  }
});