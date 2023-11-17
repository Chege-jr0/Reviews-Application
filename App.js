import Home from './screens/home';
import * as Font from 'expo-font';
import { useFonts } from 'expo-font';
import React, { useState } from 'react';
import { AppLoading } from 'expo';

const getFonts = () =>  Font.loadAsync({
  'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
  'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
  });


export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if(fontsLoaded){
    return(
      <Home />
    )
  } 
  
}


