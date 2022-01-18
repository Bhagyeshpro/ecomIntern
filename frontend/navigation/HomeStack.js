import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import HomeScreen from '../screens/Home/HomeScreen';
import ProductScreen from '../screens/ProductScreen/ProductScreen';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}} >
        <Stack.Screen component={HomeScreen}  name='HomeScreen' />
        <Stack.Screen component={ProductScreen} name='ProductDetails' />
      </Stack.Navigator>
)
  }
  
  export default HomeStack
  