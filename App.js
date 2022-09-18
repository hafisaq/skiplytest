import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import i18n from './src/i18';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/Navigation/Screens/Home';
import MainContainer from './src/Navigation/MainContainer';


const stack = createNativeStackNavigator();

export default function App() {
  return (
    
        <MainContainer/>
   
  );
}
