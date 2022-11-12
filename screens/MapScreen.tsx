import React, {type PropsWithChildren,useState, useEffect, useContext} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions,
  Button
} from 'react-native';
import MapView, {Marker,MapPressEvent} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { locationContext, Point } from '../contexts/LocationContext';


const MapScreen = () => {
  const locContext = useContext(locationContext);
  const endLocation = locContext.endLocation;
  const currentLocation = locContext.currentLocation;
  const { width, height } = Dimensions.get('window');
  const ASPECT_RATIO = width / height;
  const LATITUDE_DELTA = 0.0922;
  const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

  const [region,setRegion] = useState({
    latitude: currentLocation.lat,
    longitude: currentLocation.lon,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  });
  const updateLocationAndChangeScreenDelay = (event:MapPressEvent) => {
      const {latitude, longitude} = event.nativeEvent.coordinate
      locContext.setEndLocation({lat:latitude,lon:longitude})
      setTimeout(() => locContext.setNavigate(true),3000)
  }
  useEffect(() => {
    Geolocation.getCurrentPosition(info => {locContext.setCurrentLocation({lat:info.coords.latitude,lon:info.coords.longitude})},err => {console.log(err)});
  },[]);

  return (
    <View style={{ position: 'relative', height: height, width:width}}>
      <Text>{locContext.currentLocation.lat+ " " + locContext.currentLocation.lon}</Text>
      <Text>End lat {endLocation.lat}</Text>
      <Text>End lon {endLocation.lon}</Text>
    <MapView
      onPress={updateLocationAndChangeScreenDelay}
      style={{ height: height, width:width}}
      region={region}>
        {endLocation.lat != 0 && endLocation.lon != 0 ? <Marker coordinate={{latitude:endLocation.lat,longitude:endLocation.lon}}></Marker> : <Text></Text>}
      </MapView>
  </View>
  )
}
const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default MapScreen;