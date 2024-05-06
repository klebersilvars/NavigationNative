
import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer'
import Sobre from '../pages/Sobre';
import Feather from 'react-native-vector-icons/Feather'
import StackRoute from './stackRoute';

const Drawer = createDrawerNavigator()

export default function Routes() {

  
  return (
    <Drawer.Navigator>
        <Drawer.Screen name="HomeStack" component={StackRoute}/>
    </Drawer.Navigator>
      
  );
}
