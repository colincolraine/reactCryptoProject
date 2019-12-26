import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native'

export default function Header(props){
    return (
        <View style={s.container}>
            <TouchableOpacity 
                onPress={()=>{
                    props.navigation.navigate('DrawerOpen')
                }}
                style={s.menu}>
                <View>
                    <View style = {s.menuBar}></View>
                    <View style = {s.menuBar}></View>
                    <View style = {s.menuBar}></View>
                </View>
            </TouchableOpacity>
            <Text style = {s.title}>
              {props.title} Price
            </Text>
        </View>
    )
}

const s = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 12,
        alignSelf: 'stretch',
        ...Platform.select({
            ios: {
                paddingTop: 37
            }
        })
    },
    title: {
        flex: 1,
        marginLeft: -25,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 30
    },
    menu:{
        zIndex: 2,
        marginTop: 8,
        marginLeft: 8,
        width: 25,
        height: 30,
    },
    menuBar: {
        height: 3,
        marginBottom: 5,
        backgroundColor: 'black'
    }
})