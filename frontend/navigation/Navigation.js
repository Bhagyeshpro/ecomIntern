import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import HomeScreen from '../screens/Home/HomeScreen';
import LoginScreen from '../screens/Login/LoginScreen';
import ProductScreen from '../screens/ProductScreen/ProductScreen';
import ShoppingCartScreen from '../screens/ShoppingCartScreen/ShoppingCartScreen';
import AddressScreen from '../screens/AddressScreen/AddressScreen';


const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
       <NavigationContainer >
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen 
        options={{headerShown: true, 
          headerStyle: {
            backgroundColor: "#222e3c"
          },
          headerTintColor: "white",
            headerTitleStyle: {
              fontWeight: "bold"
            }
        }} name="Home" 
        component={HomeScreen} 

        />
        <Stack.Screen 
        options={{headerShown: true}} name="Product" 
        component={ProductScreen} 
      
        />
        <Stack.Screen 
          options={{headerShown: true, headerStyle: {
            backgroundColor: '#222e3c'
          },
          headerTintColor: "white",
            headerTitleStyle: {
              fontWeight: "bold"
            }
           }} 
          name="Cart" component={ShoppingCartScreen} 
        />
        <Stack.Screen 
          options={{headerShown: true, headerStyle: {
            backgroundColor: '#222e3c'
          },
          headerTintColor: "white",
            headerTitleStyle: {
              fontWeight: "bold"
            }
           }} 
          name="Address" component={AddressScreen} 
        />
      </Stack.Navigator>
    </NavigationContainer>
    )
}

export default Navigation

const styles = StyleSheet.create({})
