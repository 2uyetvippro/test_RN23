import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Danhsach from './src/screens/Danhsach';
import Taomoi from './src/screens/Taomoi';
import Chitiet from './src/screens/Chitiet';



const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Danhsach"
      >
        <Stack.Screen name="Danhsach" component={Danhsach} />
        <Stack.Screen name="Taomoi" component={Taomoi} />
        <Stack.Screen name="Chitiet" component={Chitiet} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})

