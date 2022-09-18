import { View, Text,StyleSheet,I18nManager} from 'react-native'
import * as  React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './Screens/Home';
import Settings from './Screens/Settings';
import Profile from './Screens/Profile';
import {useTranslation} from 'react-i18next';

const homename="Home";
const profilename="Profile";
const settingsname="Settings";

const Tab=createBottomTabNavigator();

export default function MainContainer(){
    const {t, i18n} = useTranslation();
    return (
       <NavigationContainer>
        <Tab.Navigator initialRouteName={homename}
        screenOptions={({route})=>({
           



        })}
        tabBarOptions={{
            activeTintColor:"red",
            inactiveTintColor:"grey",
            labelStyle:{paddignBottom:10,fontSize:10},
            style:{paddign:10,height:70}
        }}
        >

            <Tab.Screen name={homename}    component={Home} />
            <Tab.Screen name={profilename}    component={Profile} />
            <Tab.Screen name={settingsname}    component={Settings} />

        </Tab.Navigator>

       </NavigationContainer>
    )
}