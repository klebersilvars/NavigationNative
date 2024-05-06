
import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Sobre from '../pages/Sobre';
import Feather from 'react-native-vector-icons/Feather'
import StackRoute from './stackRoute';

const Tab = createBottomTabNavigator()

export default function Routes() {

  
  return (

        <Tab.Navigator screenOptions={{
          tabBarHideOnKeyboard: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: 'white',

          tabBarStyle: {
            backgroundColor: '#252525'
          }
        }}>

          <Tab.Screen
           name='HomeStack' 
           component={StackRoute}

           options={{
            headerShown: false,
            tabBarIcon: ({color, size})=> {
              return <Feather name='home' color={color} size={size}/>
            }
           }}
           />

          <Tab.Screen 
          name='Sobre' 
          component={Sobre}
          options={{
            headerShown: false,
            tabBarIcon: ({color, size})=> {
              return <Feather name='file-text' color={color} size={size}/>
            }
           }}
          />
        </Tab.Navigator>
  );
}
