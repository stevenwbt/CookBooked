import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SomeComponent from './src/SomeComponent';
import HomePage from './src/HomePage';
import ReceiptPage from './src/ReceiptPage';
import VirtualPage from './src/VirtualPantry';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="ReceiptPage" component={ReceiptPage} />
        <Stack.Screen name="VirtualPantry" component={VirtualPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}