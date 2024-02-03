/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable semi */
/* eslint-disable eol-last */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {SCREENS} from '../utils/screens';

import {Login} from '../screens/Login';
// import {Register} from '../screens/Register';
import {SplashScreen} from '../screens/Splash';
import HomeTabNavigator from './TabNavigator';

import {BloodScreen, EyeScreen} from '../screens/Organ/entities';
import {ResearcherOnboard} from '../screens/RESEARCHERS/Researcher';
import {DoctorOnboard} from '../screens/HOSPITALS/Doctors';

const RootStack = createNativeStackNavigator();

const RootStackNavigator = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
        }}>
        {/* BASIC NESSECITY SCRENS COMMON FOR ALL USERS */}
        <RootStack.Screen name={SCREENS.Splash} component={SplashScreen} />
        <RootStack.Screen name={SCREENS.Login} component={Login} />
        {/* <RootStack.Screen name={SCREENS.Signup} component={Register} /> */}
        <RootStack.Screen name={SCREENS.Main} component={HomeTabNavigator} />

        <RootStack.Screen name={SCREENS.EyeScreen} component={EyeScreen} />
        <RootStack.Screen name={SCREENS.BloodScreen} component={BloodScreen} />

        {/* RESEARCHER ONBOARD AND DOCTOR ONBOARD SCREEN */}

        <RootStack.Screen
          name={SCREENS.ResearcherOnboard}
          component={ResearcherOnboard}
        />
        <RootStack.Screen
          name={SCREENS.DoctorOnboard}
          component={DoctorOnboard}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootStackNavigator;
