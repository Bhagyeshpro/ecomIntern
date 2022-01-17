import React from 'react'
import { View, Text } from 'react-native'
import HomeScreen from '../screens/Home/HomeScreen'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"

const Tab = createBottomTabNavigator();

const bottomTabNav = () => {
    return (
       <Tab.Navigator>
           <Tab.Screen component={HomeScreen} />
       </Tab.Navigator>
    )
}

export default bottomTabNav
