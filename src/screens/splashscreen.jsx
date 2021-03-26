import React, { useEffect, useState } from 'react';
import { ScrollView, View, StyleSheet, TextInput, Button, Text } from 'react-native';




export default function splashscreen({navigation}){
    setTimeout(()=>{
      navigation.navigate('Login')
    }, 3000);
    return (
      <View style={styles.container}>
        <Text>Loading ...</Text>
      </View>
      
    );
  }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'#191970'
    },
});