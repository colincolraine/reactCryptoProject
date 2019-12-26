import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Header from './Header'

export default class PriceCard extends React.Component{
    constructor(props){
        super(props)
        this.state= {
            isLoading: true,
            price: {
                USD: 0,
                EUR: 0
            }
        }
        this.getPrice = this.getPrice.bind(this)
    }


    getPrice(){
        const symbol = this.props.symbol
        const name = this.props.name
        fetch(`https://min-api.cryptocompare.com/data/price?fsym=${symbol}&tsyms=USD,JPY,EUR`)
            .then((response)=>{
                return response.json()
            })
            .then((json)=>{
                this.setState({
                    isLoading: false,
                    price: {
                        USD: json.USD,
                        EUR: json.EUR
                    }
                })
            })
            .catch((err)=>{
                console.log(err)
            })
    }

    componentWillMount(){
        this.getPrice()
        this.interval = setInterval(()=>{
            this.getPrice()
        },3000)
    }

    componentWillUnmount(){
        clearInterval(this.interval)
    }

    render(){
        return (
            <View style = {s.container}>
                {
                    this.state.isLoading?
                    <Text style = {s.price}>Loading...</Text>:
                    <View>
                        <Text style = {s.label}>{this.props.name} Price:</Text>
                        <Text style = {s.price}>$ {this.state.price.USD}</Text>
                        <Text style = {s.price}>{this.state.price.EUR} Euro</Text>
                    </View>
                }
            </View>
        )
    }
}

const s = StyleSheet.create({
    container: {
        margin: 30,
        minWidth: 300,
        maxWidth: 350,
        paddingRight: 20,
        paddingLeft: 20,
        paddingTop: 30,
        borderWidth: 2,
        backgroundColor: 'white',
        borderRadius: 10
    },
    label: {
        fontSize: 20,
        textAlign: 'center',
        color: '#000000'
    },
    price: {
        fontSize: 50,
        textAlign: 'center',
        color: '#000000'
    }
})