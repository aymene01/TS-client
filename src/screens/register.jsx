import React from 'react';
import { ScrollView, StyleSheet, TextInput, Button, Text, TouchableOpacity } from 'react-native';

export default function register ( { navigation }){
    return(
        <ScrollView contentContainerStyle={styles.container}>
            <TextInput
            style={styles.input}
            keyboardType="email-address"
            placeholder="firstname"
            />
                        <TextInput
            style={styles.input}
            keyboardType="email-address"
            placeholder="lastname"
            />
                        <TextInput
            style={styles.input}
            keyboardType="email-address"
            placeholder="email"
            />
                        <TextInput
            style={styles.input}
            keyboardType="email-address"
            placeholder="password"
            />
                        <TextInput
            style={styles.input}
            keyboardType="email-address"
            placeholder="confirm password"
            />
            <Button>

            </Button>
            <Button style={styles.button}
            title="Already have an account ?"
            onPress={() => navigation.navigate('Login')}
        ></Button>
        </ScrollView>
    )
}

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
})