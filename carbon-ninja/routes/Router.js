import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {ScreenStack} from './ScreenStack';
import {AuthStack} from './AuthStack';
import {useAuth} from '../contexts/Auth';
import {Loading} from '../components/Loading';

export const Router = () => {
  const {authData, loading} = useAuth();
//  console.log(authData);

  if (loading) {
    return <Loading />;
  }
  return (
    <NavigationContainer>
      {authData ? <ScreenStack /> : <AuthStack />}
    </NavigationContainer>
  );
};
