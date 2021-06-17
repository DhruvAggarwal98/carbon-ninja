import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Screens/HomeScreen'
import ManualScreen from './Screens/ManualScreen'
import CameraScreen from './Screens/CameraScreen'
import CameraResultsScreen from './Screens/CameraResultsScreen'
import ManualResultsScreen from './Screens/ManualResultsScreen'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerBackTitleVisible: false}}>
        <Stack.Screen options={{
          title: 'Carbon Ninja',
          headerStyle: {
            backgroundColor: '#212121',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} name="Home" component={HomeScreen} />
        <Stack.Screen options={{
          title: 'Carbon Ninja',
          headerStyle: {
            backgroundColor: '#212121',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} name="Manual" component={ManualScreen} />
        <Stack.Screen options={{
          title: 'Carbon Ninja',
          headerStyle: {
            backgroundColor: '#212121',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} name="Camera" component={CameraScreen} />
        <Stack.Screen options={{
          title: 'Carbon Ninja',
          headerStyle: {
            backgroundColor: '#212121',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} name="ManualResults" component={ManualResultsScreen} />
        <Stack.Screen options={{
          title: 'Carbon Ninja',
          headerStyle: {
            backgroundColor: '#212121',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} name="CameraResults" component={CameraResultsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
