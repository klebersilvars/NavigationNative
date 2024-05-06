import React from "react";
import {createStackNavigator} from '@react-navigation/stack'
import Home from "../pages/Home";
import Detalhes from "../pages/Detalhes";


export default function StackRoute() {

    const Stack = createStackNavigator()
    return(
        <Stack.Navigator>
            <Stack.Screen 
            component={Home} 
            name="Home" 
            options={{
                headerShown: false
            }}
            />
            <Stack.Screen component={Detalhes} name="Detalhes" />
        </Stack.Navigator>
    )
}