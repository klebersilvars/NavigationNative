import React from "react";
import { View, Text, Image } from "react-native";
import {DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer'

export default function CustomDrawer(props) {
    return(
        <DrawerContentScrollView {...props}>

            <View style={{width: '100%', height: 85, justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: 20}}>
                <Image style={{width: 65, height: 65}} source={require('../../assets/perfil.png') }/>
                <Text style={{color: 'black', fontSize: 17, marginTop: 5, marginBottom: 35,}}>Seja bem-vindo</Text>
            </View>

            <DrawerItemList {...props}/>
        </DrawerContentScrollView>
    )
}