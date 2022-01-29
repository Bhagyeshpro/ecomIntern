import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ShoppingCartScreen from '../screens/ShoppingCartScreen/ShoppingCartScreen';
import AddressScreen from '../screens/AddressScreen/AddressScreen';


const Stack = createNativeStackNavigator();

const ShoppingCartStack = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: true}} >
        <Stack.Screen component={ShoppingCartScreen}  name='ShoppingCartScreen' 
          options={{
                   headerStyle: {
                       backgroundColor: "#222e3c"
                   },
                   headerTintColor: "#fff",
               }}
        />
        <Stack.Screen component={AddressScreen} name='AddressScreen' />
      </Stack.Navigator>
)
  }
  
  export default ShoppingCartStack
  