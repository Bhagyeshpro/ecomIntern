import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import HomeScreen from '../screens/Home/HomeScreen';
import ProductScreen from '../screens/ProductScreen/ProductScreen';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: true}} >
        <Stack.Screen
         component={HomeScreen}  name='HomeScreen' 
              options={{
                   headerStyle: {
                       backgroundColor: "#222e3c"
                   },
                   headerTintColor: "#fff",
                   tabBarIcon: ({color}) => ( <Entypo name="home" color={color} size={20} />
                   ),
               }}
         />
        <Stack.Screen component={ProductScreen} name='ProductDetails' 
             options={{
                   headerStyle: {
                       backgroundColor: "#222e3c"
                   },
                   headerTintColor: "#fff",
               }}
        />
      </Stack.Navigator>
)
  }
  
  export default HomeStack
  