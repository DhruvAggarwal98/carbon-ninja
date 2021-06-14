import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Screens/HomeScreen'
import ManualScreen from './Screens/ManualScreen'
import CameraScreen from './Screens/CameraScreen'
import ManualResultsScreen from './Screens/ManualResultsScreen'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Manual" component={ManualScreen} />
        <Stack.Screen name="Camera" component={CameraScreen} />
        <Stack.Screen name="ManualResults" component={ManualResultsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
