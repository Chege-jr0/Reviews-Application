import React, { useState } from 'react';
import * as Font from 'expo-font';
import Home from './screens/home';
import { AppLoading } from 'expo-app-loading';
import Navigator from './routes/homeStack'


const getFonts = () => Font.loadAsync({
    'nunito-regular': require('./assets/fonts/nunito-regular.ttf'),
    'nunito-bold': require('./assets/fonts/nunito-bold.ttf')
  });

export default function App() {
  return (
    <Navigator/>
   );
}
