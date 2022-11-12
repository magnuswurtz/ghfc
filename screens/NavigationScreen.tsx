import Arrow from '@elsdoerfer/react-arrow';
import React, {type PropsWithChildren,useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import Triangle from '../components/Triangle';

const Navigation = () => {
  

  useEffect(() => {
    //Geolocation.getCurrentPosition(info => {console.log(info);setLat(info.coords.latitude);setLon(info.coords.longitude)},err => {console.log(err)});
  },[]);

    return(
      <View>
        <Triangle color="red"></Triangle>
      </View>
    )
}
export default Navigation; 