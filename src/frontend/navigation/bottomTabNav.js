import React from 'react'
import { View, Text } from 'react-native'
import HomeScreen from '../screens/Home/HomeScreen'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import ShoppingCartScreen from "../screens/ShoppingCartScreen/ShoppingCartScreen"
import { Entypo, Feather, FontAwesome, Ionicons } from '@expo/vector-icons'
import HomeStack from './HomeStack'
import ShoppingCartStack from './ShoppingCartStack'

const Tab = createBottomTabNavigator();

const bottomTabNav = () => {
    return (
       <Tab.Navigator
        tabBarOptions={{
            showLabel: false,
        }}
       >
           <Tab.Screen component=   {HomeStack} name='Home' 
               options={{
                   headerStyle: {
                       backgroundColor: "#222e3c"
                   },
                   headerTintColor: "#fff",
                   tabBarIcon: ({color}) => ( <Entypo name="home" color={color} size={20} />
                   ),
               }}
           />
           <Tab.Screen component={HomeScreen} name='Profile' 
                 options={{
                     headerStyle: {
                         backgroundColor: "#222e3c"
                     },
                     headerTintColor: "#fff",
                   tabBarIcon: ({color}) => ( <FontAwesome name="user" color={color} size={20} />
                   ),
               }}
           />
           <Tab.Screen component={ShoppingCartStack} name='shoppingCart' 
                 options={{
                     headerStyle: {
                         backgroundColor: "#000"
                     },
                     headerTintColor: "#fff",
                     
                   tabBarIcon: ({color}) => ( <Feather name="shopping-cart" color={color} size={20} />
                   ),
               }}
           />
           <Tab.Screen component={HomeScreen} name='More' 
                 options={{
                     headerStyle: {
                         backgroundColor: "#222e3c"
                     },
                     headerTintColor: "#fff",
                   tabBarIcon: ({color}) => ( <Ionicons name="menu" color={color} size={20} />
                   ),
               }}
           />
       </Tab.Navigator>
    )
}

export default bottomTabNav
