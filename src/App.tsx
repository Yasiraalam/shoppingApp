import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
//navigation
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
// screens
import Home from './screen/Home'
import Detail from './screen/Detail'

export type RootStackParamList = {
  Home: undefined;
  Detail: { product: Product };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          options={{
            title: 'Trending Products',
          }}
          component={Home} />
        <Stack.Screen
          name="Detail"
          options={{
            title: 'Detail Products',
          }}
          component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})