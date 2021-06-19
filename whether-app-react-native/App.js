import { StatusBar } from 'expo-status-bar';
import React , {useEffect  , useState} from 'react';
import { StyleSheet, Text, View  , ActivityIndicator} from 'react-native';
import * as Location from 'expo-location';
import WeatherInfo from './components/WeatherInfo';
import UnitsPicker from './components/UnitsPicker';
import {colors} from './utils/index';
import ReloadIcon from './components/ReloadIcon';
import WeatherDetails from './components/WeatherDetails';
// import {WEATHER_API_KEYS} from 'react-native-dotenv';

const WEATHER_API_KEYS = '0bdaa7a6a3f1756e500b908de1c78910'
const BASE_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather?'


export default function App() {
  const [errMessage, setErrMessage] = useState(null)
  const [currentWeather, setcurrentWeather] = useState(null)
  const [unitsSystem, setUnitsSystem] = useState('metric')


  useEffect(() => {
    load()
  }, [unitsSystem])


  async function load(){
    setcurrentWeather(null)
    setErrMessage(null)
    try {
      let { status } = await Location.requestForegroundPermissionsAsync()

      if (status != 'granted'){
        setErrMessage('Access to location is needed to run the app')
        return 
      }
      const location = await Location.getCurrentPositionAsync()

      const  {latitude, longitude } = location.coords

      const weatherUrl = `${BASE_WEATHER_URL}lat=${latitude}&lon=${longitude}&units=${unitsSystem}&appid=${WEATHER_API_KEYS}`

      const response = await fetch(weatherUrl)

      const result = await response.json()

      if(response.ok){
        setcurrentWeather(result)
      } else {
        setErrMessage(result.message)
      }

    } catch (error) {
      setErrMessage(error.message)
    }
  }
    if(currentWeather){
     
      return (
        <View style={styles.container}>
          <StatusBar style="auto" />
          <View style = {styles.main}>
              <UnitsPicker unitsSystem = {unitsSystem} setUnitsSystem = {setUnitsSystem} />
              <ReloadIcon load = {load}/>
              <WeatherInfo currentWeather = {currentWeather} />
          </View>

          <WeatherDetails currentWeather = {currentWeather} unitsSystem ={unitsSystem}/>

        </View>
    )} else if(errMessage){
       return (
          <View style={styles.container}>
            <ReloadIcon load= {load}/>
            <Text style= {{textAlign: 'center' } }>{errMessage}</Text>
            <StatusBar style="auto" />
          </View>
    )} else {
        return(
         <View style={styles.container}>
            <ActivityIndicator size="large" color={colors.PRIMARY_COLORS} />
            <StatusBar style="auto" />
          </View>
      )
    }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  main : {
    flex: 1,
    justifyContent: 'center',
  }
});
