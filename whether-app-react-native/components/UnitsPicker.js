import React from 'react'
import {View, StyleSheet , Platform} from 'react-native'
import { Picker } from '@react-native-community/picker'

export default function UnitsPicker({unitsSystem , setUnitsSystem}) {
    return (
        <View style = {styles.unitsSystem}>
            <Picker 
                    selectedValue = {unitsSystem}
                    onValueChange={(item) => setUnitsSystem(item)}
                    mode="dropdown"
                    itemStyle={{fontSize: 10}}
            >
                <Picker.Item label= "C°" value='metric'/>
                <Picker.Item label= "F°" value='imperial'/>
            </Picker>
        </View>
    )
}

const styles = StyleSheet.create({
    unitsSystem:{
        position: 'absolute',
        ...Platform.select({
            ios:{
            },
            android:{
                top:80,
            }
        }),
        top: 50,
        left: 20,
        height: 50,
        width: 90,
    }
})



