  import React from 'react';
  import { NavigationContainer } from '@react-navigation/native';
  import { createNativeStackNavigator } from '@react-navigation/native-stack';
  import RootStack from './src/navigations/RootStack';
  const Stack = createNativeStackNavigator();
  export default function App() {
    return (
      <NavigationContainer>
        <RootStack/>
      </NavigationContainer>
    );
  } 