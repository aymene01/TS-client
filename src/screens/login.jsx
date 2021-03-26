import React, { useState } from 'react';
import { ScrollView, StyleSheet, TextInput, Button, Text } from 'react-native';

export default function login ( { navigation }){
    
        const [email, onChangeEmail] = useState('');
        const [password, onChangePassword] = useState('');
        const [errorMessage, setErrorMessage] = useState('');
    return (
        <ScrollView contentContainerStyle={styles.container}>
          <TextInput
            style={styles.input}
            onChangeText={(text) => onChangeEmail(text)}
            value={email}
            keyboardType="email-address"
            placeholder="email"
          />
          <TextInput
            style={styles.input}
            onChangeText={(text) => onChangePassword(text)}
            value={password}
            placeholder="password"
            secureTextEntry
          />
        <Button style={styles.button}
            title="Log in"
            
        ></Button>
        <Button style={styles.button}
            title="Sign in"
            onPress={() => navigation.navigate('Register')}
        ></Button>
        <Text style={styles.text}>forget your password ?</Text>
          
        </ScrollView>
      );
    };

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor:'#191970'
        },
        input: {
          height: 40,
          width: 200,
          borderColor: 'gray',
          borderWidth: 1,
          paddingLeft: 5,
          marginTop: 20,
          borderRadius:15
        },
        button: {
            color: 'black',

        },
        text:{
            color: 'black',
        },
      });