import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignInScreen from '../Screens/SignInScreen'
import CreateAccountScreen from '../Screens/CreateAccountScreen'
import { Button } from 'react-native' 

const Stack = createStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerBackTitleVisible: false}}>
      <Stack.Screen options={{
            title: 'Carbon Ninja',
            headerStyle: {
              backgroundColor: '#212121',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} name="SignInScreen" component={SignInScreen} />
      <Stack.Screen options={{
            title: 'Carbon Ninja',
            headerStyle: {
              backgroundColor: '#212121',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} name="CreateAccountScreen" component={CreateAccountScreen} />
    </Stack.Navigator>
  );
};