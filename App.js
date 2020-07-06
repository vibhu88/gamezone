import React, { useState } from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import Home from './screens/home';

//Font Registration
const getFonts = () => Font.loadAsync({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  if (fontsLoaded){
    return (
      <Home />
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={ () => setFontsLoaded(true)}
        />
    );
  }
  
}