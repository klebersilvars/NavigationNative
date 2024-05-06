
import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer'
import Sobre from '../pages/Sobre';
import Feather from 'react-native-vector-icons/Feather'
import StackRoute from './stackRoute';
import CustomDrawer from '../component/CustomDrawer';

const Drawer = createDrawerNavigator()

export default function Routes() {

  
  return (
    <Drawer.Navigator
    drawerContent={CustomDrawer}
    screenOptions={{
        drawerStyle: {
            backgroundColor: 'white'
        },
        drawerActiveTintColor: 'white',
        drawerActiveBackgroundColor: '#00dae4',
        drawerInactiveBackgroundColor: '#f1f1f1',
        drawerInactiveTintColor: 'black'
    }}
    >
        <Drawer.Screen name="HomeStack" component={StackRoute}/>
        <Drawer.Screen name="Sobre" component={Sobre}/>
    </Drawer.Navigator>
      
  );
}
