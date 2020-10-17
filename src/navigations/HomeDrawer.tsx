import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../screens/Home';
const Drawer = createDrawerNavigator();

export default function HomeDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
}
