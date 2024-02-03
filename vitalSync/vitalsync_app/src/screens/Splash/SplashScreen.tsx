/* eslint-disable @typescript-eslint/no-unused-vars */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {ImageBackground} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {Button} from 'react-native-paper';

import docimg from '../../assets/doctorimg.jpeg';

import {SCREENS} from '../../utils/screens';

const SplashScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.mainContainer}>
      <ImageBackground source={docimg} style={styles.imgContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.textOne}>Welcome to</Text>

          <Text style={styles.textTwo}>Vital Sync</Text>

          <View style={styles.catchline}>
            <Text style={styles.textCatch}>
              Your Health, Your Data, Your Control,
            </Text>
            <Text style={styles.textCatch}>Connecting you to quality care</Text>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <Button
            mode="contained"
            onPress={() => navigation.navigate(SCREENS.Login)}>
            On board
          </Button>
        </View>
      </ImageBackground>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'red',
    backgroundColor: 'gray',
  },
  catchline: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    color: 'red',
  },
  textContainer: {
    position: 'absolute',
    flex: 1,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    top: 80,
  },
  imgContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textOne: {
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 20,
    color: 'gray',
  },
  textTwo: {
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: 20,
    color: 'gray',
  },
  textCatch: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'gray',
  },
  buttonContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 50,
    padding: 20,
    paddingHorizontal: 80,
  },
});
