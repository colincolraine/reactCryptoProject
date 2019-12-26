import React from 'react'
import {View,Text} from 'react-native'
import 'react-native-gesture-handler'
import { createDrawerNavigation } from 'react-navigation-drawer'
import Price from './Price'

const Drawer = createDrawerNavigation({
    Bitcoin: {
        screen: function Bitcoin(props){
            return <Price name='Bitcoin' symbol='BTC' {...props} />
        }
    },
    LiteCoin: {
        screen: function LiteCoin(){
            return <Price name='LiteCoin' symbol='LTC' {...props} />
        }
    },
    Ethereum: {
        screen: function Ethereum(){
            return <Price name='Ethereum' symbol='ETH' {...props} />
        }
    }
})

export default Drawer