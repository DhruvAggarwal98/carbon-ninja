import React, {useState} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../Screens/HomeScreen'
import ManualScreen from '../Screens/ManualScreen'
import CameraScreen from '../Screens/CameraScreen'
import CameraResultsScreen from '../Screens/CameraResultsScreen'
import ManualResultsScreen from '../Screens/ManualResultsScreen'
import { Button } from 'react-native' 
import {useAuth} from '../contexts/Auth';

const Stack = createStackNavigator();

export const ScreenStack = () => {
  const [loading, isLoading] = useState(false);
  const auth = useAuth();
  
  const signOut = async () => {
    isLoading(true);
    await auth.signOut();
  };
  return (
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerBackTitleVisible: false}}>
          <Stack.Screen options={{
            title: 'Carbon Ninja',
            headerStyle: {
              backgroundColor: '#212121',
            },
            headerRight: () => (
              <Button
                onPress={signOut}
                title="Log Out"
                color="#fff"
              />
          ),
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
            headerRight: () => (
              <Button
                onPress={signOut}
                title="Log Out"
                color="#fff"
              />),
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
            headerRight: () => (
              <Button
                onPress={signOut}
                title="Log Out"
                color="#fff"
              />),
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
            headerRight: () => (
              <Button
                onPress={signOut}
                title="Log Out"
                color="#fff"
              />),
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
            headerRight: () => (
              <Button
                onPress={signOut}
                title="Log Out"
                color="#fff"
              />),
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} name="CameraResults" component={CameraResultsScreen} />
        </Stack.Navigator>
  );
};