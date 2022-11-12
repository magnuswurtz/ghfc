/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {type PropsWithChildren,useState, useContext} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  
} from 'react-native';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { locationContext } from './contexts/LocationContext';
import MapScreen from './screens/MapScreen';
import NavigationScreen from './screens/NavigationScreen';



const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {backgroundColor: isDarkMode ? Colors.darker : Colors.lighter};
  const [endLocation,setEndLocation] = useState({lat:0,lon:0});
  const [currentLocation,setCurrentLocation] = useState({lat:0,lon:0})
  const [navigate,setNavigate] = useState(false);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <locationContext.Provider value={{endLocation,currentLocation,navigate,setEndLocation,setCurrentLocation,setNavigate}} >
      {navigate ?
      <NavigationScreen></NavigationScreen>
      : 
      <MapScreen></MapScreen>


    }
    </locationContext.Provider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
