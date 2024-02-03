/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {StyleSheet, Text, View, Image, Alert} from 'react-native';
import React from 'react';
import {
  ConnectWallet,
  useAddress,
  useConnect,
} from '@thirdweb-dev/react-native';

import {TextInput} from 'react-native-paper';

import {THEME} from '../../utils/theme';

import plusimg from '../../assets/plus.jpeg';
import metamaskimg from '../../assets/MetaMask.png';

import {useNavigation} from '@react-navigation/native';

import {useEffect} from 'react';
import {SCREENS} from '../../utils/screens';

const Login = () => {
  const connect = useConnect();
  const address = useAddress();

  const navigation = useNavigation();

  useEffect(() => {
    // console.log('connect', connect);
    // console.log('address', address);
    if (address?.length > 5) {
      navigation.navigate(SCREENS.Main);

      Alert.alert('Alert Title', 'My Alert Msg', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
      //   console.log('address', address);
    }
  }, [address]);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.toptitleContainer}>
        <Text style={{fontSize: 25, fontWeight: 'bold'}}>
          Sign In to vital Sync
        </Text>
        <Text>Import all your medical data in a place</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <View>
          <Image source={metamaskimg} style={styles.plusImg} />
        </View>
        <ConnectWallet />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    color: 'red',
    backgroundColor: THEME.COLORS.Background,
  },
  toptitleContainer: {
    flex: 1,
    padding: 10,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  textLogin: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
    color: THEME.COLORS.Textprimary,
  },
  buttonsContainer: {
    flex: 2,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 20,
  },
  plusImg: {
    width: 60,
    height: 60,
    marginBottom: 20,
  },
});
