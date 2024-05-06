import React from "react";
import {View, Text, StyleSheet, Button} from 'react-native'
import {useNavigation} from '@react-navigation/native'


export default function Home() {

const navigation = useNavigation()


    return(
        <View style={styles.container}>
            <Text>Tela Home</Text>
            <Button title="ir para detalhes" onPress={()=> {navigation.navigate('Detalhes')}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})