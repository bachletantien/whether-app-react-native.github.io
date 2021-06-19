import React from 'react'
import { StyleSheet, Platform, View  } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import {colors} from '../utils/index'

const ReloadIcon = ({load}) => {
    const reloadIconName = Platform.OS === 'android' ?  'ios-refresh' : 'md-refresh'


    return (
        <View style = {styles.reloadIcon}>
            <Ionicons onPress={load} name={reloadIconName} size={28} color={colors.PRIMARY_COLORS}  />
        </View>
    )
}

export default ReloadIcon

const styles = StyleSheet.create({
    reloadIcon: {
        position: 'absolute',
        top: 50,
        right: 25,
    }
})
