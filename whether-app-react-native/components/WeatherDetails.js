import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import {colors}  from '../utils/index'

import {FontAwesome5 , MaterialCommunityIcons} from '@expo/vector-icons'


const {PRIMARY_COLORS , SECONDARY_COLORS , BORDER_COLORS , WATER_COLORS , PRESSURE_COLORS , WINDY_COLORS} = colors 


const WeatherDetails = ({currentWeather , unitsSystem}) => {

    
    const {
        main : {feels_like , humidity , pressure},
        wind : {speed},
    } = currentWeather

    const windSpeed = unitsSystem === 'metric' ?  `${Math.round(speed)} m/s` : `${Math.round(speed)} mile/h`

    return (
        <View style = {styles.weatherDetails}>
            <View style = {styles.weatherDetailsRow}> 
                <View style = {{...styles.weatherDetailsBox , borderRightWidth: 1 , borderRightColor: BORDER_COLORS}}>
                    <View style = {styles.weatherDetailsRow}> 
                        <FontAwesome5 name = 'temperature-low' size={30} color = {colors.PRIMARY_COLORS} />
                        <View style = {styles.weatherDetailsItem}>
                            <Text>Feel Like:</Text>
                            <Text style = {styles.textSecondary}>{feels_like} °</Text>
                        </View>
                    </View>    
                </View>
                <View style = {styles.weatherDetailsBox}>
                    <View style = {styles.weatherDetailsRow}> 
                        <MaterialCommunityIcons name = 'water' size={30} color = {colors.WATER_COLORS} />
                        <View style = {styles.weatherDetailsItem}>
                            <Text>Humidity:</Text>
                            <Text style = {styles.textSecondary}>{humidity} %</Text>
                        </View>
                    </View>    
                </View>
            </View>
            <View style = {{...styles.weatherDetailsRow , borderTopWidth: 1 , borderTopColor:BORDER_COLORS }}> 
                <View style = {{...styles.weatherDetailsBox , borderRightWidth: 1 , borderRightColor: BORDER_COLORS}}>
                    <View style = {styles.weatherDetailsRow}> 
                        <MaterialCommunityIcons name = 'weather-windy' size={30} color = {colors.WINDY_COLORS} />
                        <View style = {styles.weatherDetailsItem}>
                            <Text>Wind speed:</Text>
                            <Text style = {styles.textSecondary}>{windSpeed}</Text>
                        </View>
                    </View>    
                </View>
                <View style = {styles.weatherDetailsBox}>
                    <View style = {styles.weatherDetailsRow}> 
                        <MaterialCommunityIcons name = 'speedometer' size={30} color = {colors.PRESSURE_COLORS} />
                        <View style = {styles.weatherDetailsItem}>
                            <Text>Pressure:</Text>
                            <Text style = {styles.textSecondary}>{pressure} hPa</Text>
                        </View>
                    </View>    
                </View>
            </View>
        </View>
    )
}
export default WeatherDetails

const styles = StyleSheet.create({
    weatherDetails : {
        marginTop: 'auto', 
        margin: 15,
        borderWidth: 1,
        borderColor : BORDER_COLORS,
        borderRadius: 10,
    },
    weatherDetailsRow:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    weatherDetailsBox: {
        flex : 1,
        padding: 20,
    },
    weatherDetailsItem :{
        alignItems : 'flex-end' , 
        justifyContent : 'flex-end',
    },
    textSecondary : {
        fontSize : 17,
        color : SECONDARY_COLORS , 
        fontWeight : '700',
        margin : 7,
    }
});
