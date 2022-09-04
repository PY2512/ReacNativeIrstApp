// import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';

import * as Font  from 'expo-font';

import { useRoute } from './helpers/router';


const loadApplication  = async () => {
  await Font.loadAsync({
    'Roboto-Regular': require('./assets/fonts/roboto/Roboto-Regular.ttf'),
  })
}



export default function App() {

  const [isready, setIsReady] = useState(false)
  const routing = useRoute({})

  if(!isready) {
    return (
        <AppLoading
          startAsync={loadApplication}
          onFinish={()=> setIsReady(true)}
          onError={console.warn}
        />
      );
  }

  return (

    <NavigationContainer>

      {routing}

    </NavigationContainer>


    
  );
}