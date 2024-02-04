/* eslint-disable @typescript-eslint/no-unused-vars */
import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {ImageBackground} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {Button} from 'react-native-paper';

import docimg from '../../assets/doctorimg.jpeg';

import {SCREENS} from '../../utils/screens';

import useStore from '../../store/store';
import {THEME} from '../../utils/theme';

const SplashScreen = () => {
  const navigation = useNavigation();

  const {address} = useStore();

  return (
    <View style={styles.mainContainer}>
      {/* <ImageBackground source={docimg} style={styles.imgContainer}> */}
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

      <Image source={docimg} style={styles.imgContainer} />

      <View style={styles.buttonContainer}>
        <Button
          mode="contained"
          onPress={() => {
            if (address) {
              navigation.navigate(SCREENS.Main);
            } else {
              navigation.navigate(SCREENS.Login);
            }
          }}>
          On board
        </Button>
      </View>
      {/* </ImageBackground> */}
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
    backgroundColor: THEME.COLORS.Background,
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
    position: 'absolute',
    top: '40%',
  },
  textOne: {
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 20,
    color: THEME.COLORS.Textprimary,
  },
  textTwo: {
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: 20,
    color: THEME.COLORS.Textprimary,
  },
  textCatch: {
    fontSize: 20,
    fontWeight: 'bold',
    color: THEME.COLORS.Textprimary,
  },
  buttonContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 50,
    padding: 20,
    paddingHorizontal: 80,
  },
});
