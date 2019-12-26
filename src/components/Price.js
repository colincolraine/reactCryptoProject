import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Header from './Header'
import PriceCard from './PriceCard'

export default function Price(props){
    return (
        <View style={s.container}>
        <Header title={props.name} navigation={props.navigation} />
        <PriceCard name={props.name} symbol={props.symbol} />
        </View>
    )
}

const s = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#38C172',
        alignItems: 'center'
    }
})