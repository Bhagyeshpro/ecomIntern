import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './src/frontend/navigation/Navigation';
import {StateProvider} from "./src/backend/StateProvider"
import reducer, {initialState} from "./src/backend/Reducer"

export default function App() {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
    <Navigation/>
    </StateProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
