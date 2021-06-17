import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignInScreen from '../Screens/SignInScreen'

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
          }} name="Sign In Screen" component={SignInScreen} />
    </Stack.Navigator>
  );
};