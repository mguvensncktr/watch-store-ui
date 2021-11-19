import React from 'react';
import { useFonts } from 'expo-font';
import Router from './navigation/Router';

export default function App() {

  const [loaded] = useFonts({
    'Helvetica-Bold': require('./assets/fonts/Helvetica-Bold.ttf'),
    'Helvetica-Regular': require('./assets/fonts/Helvetica-Regular.ttf'),
    'Helvetica-Light': require('./assets/fonts/Helvetica-Light.ttf'),
    'TrajanPro-Bold': require('./assets/fonts/TrajanPro-Bold.ttf'),
  })

  if (!loaded) {
    return null;
  }

  return (
    <Router />
  );
}


