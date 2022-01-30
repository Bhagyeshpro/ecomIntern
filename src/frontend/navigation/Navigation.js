import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import BottomTabNav from './bottomTabNav';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
       <NavigationContainer >
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen component={BottomTabNav} name='HomeTabs'/>
      </Stack.Navigator>
    </NavigationContainer>
    )
  }
  
  export default Navigation
  