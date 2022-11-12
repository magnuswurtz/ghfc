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
import { endLocationContext, Point } from '../contexts/endLocationContext';


const MapScreen = () => {
  const { width, height } = Dimensions.get('window');
  const ASPECT_RATIO = width / height;
  const LATITUDE_DELTA = 0.0922;
  const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
  const [lat,setLat] = useState(55.44424);
  const [lon,setLon] = useState(11.55881);
  const [region,setRegion] = useState({
    latitude: lat,
    longitude: lon,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  });
  const elContext = useContext(endLocationContext);
  const endLocation = elContext.location;
  const updateLocationAndChangeScreenDelay = (event:MapPressEvent) => {
      const {latitude, longitude} = event.nativeEvent.coordinate
      elContext.setLocation({lat:latitude,lon:longitude})
      setTimeout(() => elContext.setNavigate(true),3000)
  }
  useEffect(() => {
    Geolocation.getCurrentPosition(info => {console.log(info);setLat(info.coords.latitude);setLon(info.coords.longitude)},err => {console.log(err)});
  },[]);

  return (
    <View style={{ position: 'relative', height: height, width:width}}>
      <Text>{lat+ " " + lon}</Text>
      <Text>End lat {endLocation.lat}</Text>
      <Text>End lon {endLocation.lon}</Text>
      <Button title="changeLoc" onPress={() => {elContext.setLocation({lat:1,lon:1})}}></Button>
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