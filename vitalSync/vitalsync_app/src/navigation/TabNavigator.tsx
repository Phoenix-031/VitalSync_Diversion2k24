/* eslint-disable semi */
/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {THEME} from '../utils/theme';
import {SCREENS} from '../utils/screens';
import {View, Text} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {Home} from '../screens/Home';
import {Profile} from '../screens/Profile';
import {Chats} from '../screens/Chats';
import {Organ} from '../screens/Organ';

import useStore from '../store/store';
import {ResearcherDashboard} from '../screens/RESEARCHERS/ResearcherDashboard';

const Tab = createBottomTabNavigator();
export const HomeTabNavigator = () => {
  const {isResearcher} = useStore();

  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarStyle: {
          borderRadius: 20,
          borderTopColor: 'transparent',
          height: 65,
          position: 'absolute',
          marginHorizontal: 40,
          marginBottom: 20,
          //   bottom: Platform.OS === 'ios' ? insets.bottom : 20,
          backgroundColor: THEME.COLORS.Foreground,
          elevation: 20,
          alignItems: 'center',
          paddingBottom: 'auto', // for ios to make it vertically center
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: THEME.COLORS.Primarydark,
      })}>
      <Tab.Screen
        name={SCREENS.Home}
        component={Home}
        options={{
          header: () => null,
          tabBarIcon: ({color, size, focused}) => (
            <CustomTabIcon focused={focused}>
              <Ionicons name="home" color={color} size={size} />
            </CustomTabIcon>
          ),
        }}
      />

      <Tab.Screen
        name={SCREENS.Chats}
        component={Chats}
        options={{
          header: () => null,
          tabBarIcon: ({color, size, focused}) => (
            <CustomTabIcon focused={focused}>
              <MaterialIcons name="message" color={color} size={size} />
            </CustomTabIcon>
          ),
        }}
      />

      {isResearcher && (
        <Tab.Screen
          name={SCREENS.Researcher}
          component={ResearcherDashboard}
          options={{
            header: () => null,
            tabBarIcon: ({color, size, focused}) => (
              <CustomTabIcon focused={focused}>
                <AntDesign name="book" color={color} size={size} />
              </CustomTabIcon>
            ),
          }}
        />
      )}

      <Tab.Screen
        name={SCREENS.Organ}
        component={Organ}
        options={{
          header: () => null,
          tabBarIcon: ({color, size, focused}) => (
            <CustomTabIcon focused={focused}>
              <Ionicons name="medical" color={color} size={size} />
            </CustomTabIcon>
          ),
        }}
      />

      <Tab.Screen
        name={SCREENS.Profile}
        component={Profile}
        options={{
          header: () => null,
          tabBarIcon: ({color, size, focused}) => (
            <CustomTabIcon focused={focused}>
              <FontAwesome name="user" color={color} size={size} />
            </CustomTabIcon>
          ),
        }}
      />

      {/* <Tab.Screen
        name={SCREENS.Profile}
        component={Profile}
        options={{
          header: () => (
            <View
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                paddingVertical: 12,
                backgroundColor: THEME.COLORS.Background,
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: THEME.COLORS.Primarylight,
                }}>
                LeaderBoard
              </Text>
            </View>
          ),
          tabBarIcon: ({color, size, focused}) => (
            <CustomTabIcon focused={focused}>
              <Ionicons name="trophy" color={color} size={size} />
            </CustomTabIcon>
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
};

interface CustomTabIconProps {
  children: React.ReactNode; // Fix the type error for the children prop
  focused: boolean;
}

function CustomTabIcon({children, focused}: CustomTabIconProps) {
  // Fix the type error for the function parameter
  return (
    <View
      style={{
        backgroundColor: focused
          ? THEME.COLORS.Primarylight
          : THEME.COLORS.Foreground,
        borderRadius: 50,
        padding: 12,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {children}
    </View>
  );
}

export default HomeTabNavigator;
