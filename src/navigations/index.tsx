import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeDrawer from './HomeDrawer';

export default function Navigator() {
  return (
    <NavigationContainer>
      <HomeDrawer />
    </NavigationContainer>
  );
}
