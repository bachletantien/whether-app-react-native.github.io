import React from 'react'
import { StyleSheet, Text, View , Image } from 'react-native'
import {colors} from '../utils/index'

const {PRIMARY_COLORS , SECONDARY_COLOR} = colors

const WeatherInfo = ({currentWeather}) => {
    const {
        main : { temp },
        weather : [details],
        name,
    } = currentWeather 

    const { icon , main , description } = details

    const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`


    return (
        <View style = {styles.weatherInfo}>
            <Text>{name}</Text>
            <Image style = {styles.weatherIcon} source = {{uri : iconUrl}}/>
            <Text style = {styles.textPrimary}>{temp}°</Text>
            <Text style = {styles.weatherDescription}>{description}</Text>
            <Text style = {styles.textSecondary}>{main}</Text>
        </View>
    )
}

export default WeatherInfo

const styles = StyleSheet.create({
    weatherInfo : {
        alignItems : 'center'
    },
    weatherDescription : {
        textTransform : 'capitalize'
    },
    weatherIcon: {
        width : 100 ,
        height : 100,
    },
    textPrimary:{
        fontSize : 40,
        color: PRIMARY_COLORS,
    },
    textSecondary:{
        fontSize: 20,
        marginTop:10,
        fontWeight:'500',
        color:SECONDARY_COLOR,
    }
    
})
