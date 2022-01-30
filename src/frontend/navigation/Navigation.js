import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import LoginScreen from '../screens/Login/LoginScreen';
import BottomTabNav from './bottomTabNav';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
       <NavigationContainer >
      <Stack.Navigator initialRouteName='LoginScreen' screenOptions={{headerShown: false}}>
        <Stack.Screen component={BottomTabNav} name='HomeTabs'/>
        <Stack.Screen component={LoginScreen} name='LoginScreen'/>
      </Stack.Navigator>
    </NavigationContainer>
    )
  }
  
  export default Navigation
  