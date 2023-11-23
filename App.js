import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import Home from './screens/home';
import Navigator from './routes/homeStack';

const loadFonts = () => {
  return useFonts({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
  });
};

export default function App() {
  const [isFontLoaded] = loadFonts();

  if (!isFontLoaded) {
    return 
    <Text>Loading fonts...</Text>;
  }

  return (
    <Navigator />
  );
}

