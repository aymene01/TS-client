import React, { useEffect, useState } from 'react';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import splashscreen from './screens/splashscreen';
import login from './screens/login';
import register from './screens/register';










export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName='splashscreen'screenOptions={{headerShown: false}}>
        <Stack.Screen name="splashscreen" component={splashscreen} />
        <Stack.Screen name="Login" component={login} />
        <Stack.Screen name="Register" component={register} />
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}


      


































