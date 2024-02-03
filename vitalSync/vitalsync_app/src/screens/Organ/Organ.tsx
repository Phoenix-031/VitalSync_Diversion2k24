import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {THEME} from '../../utils/theme';

import eyedonation from '../../assets/eyedonation.jpg';

const Organ = () => {
  const navigation = useNavigation();

  const handleEye = () => {
    navigation.navigate('EyeScreen');
  };

  const handleBlood = () => {
    navigation.navigate('BloodScreen');
  };

  const handleOrgans = () => {
    console.log('Organs');
  };

  const handleSkin = () => {
    console.log('Skin');
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.firstRow}>
        <Pressable onPress={handleEye} style={styles.eyedonationContainer}>
          <Image source={eyedonation} style={styles.eyedonationImg} />
          <Text style={styles.cardText}>Donate Your eyes</Text>
          <Text>Let Someone else see the world with your eyes</Text>
        </Pressable>

        <Pressable onPress={handleBlood} style={styles.eyedonationContainer}>
          <Image source={eyedonation} style={styles.eyedonationImg} />
          <Text style={styles.cardText}>Blood Donation</Text>
          <Text>Help others Live</Text>
        </Pressable>
      </View>
      <View style={styles.firstRow}>
        <Pressable onPress={handleOrgans} style={styles.eyedonationContainer}>
          <Image source={eyedonation} style={styles.eyedonationImg} />
          <Text style={styles.cardText}>Donate Your Organs</Text>
          <Text>Lorem ipsum dolor sit amet.</Text>
        </Pressable>

        <Pressable onPress={handleSkin} style={styles.eyedonationContainer}>
          <Image source={eyedonation} style={styles.eyedonationImg} />
          <Text style={styles.cardText}>Skin Donation</Text>
          <Text>Lorem ipsum dolor sit amet.</Text>
        </Pressable>
      </View>

      <View>
        <Text>Look For Organs</Text>
      </View>
    </View>
  );
};

export default Organ;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    color: 'red',
    backgroundColor: THEME.COLORS.Background,
    padding: 10,
    paddingTop: 30,
  },
  eyedonationContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // marginTop: 20,
    width: '45%',
    height: '50%',
  },
  eyedonationImg: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  firstRow: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'row',
    gap: 10,
    height: '30%',
    padding: 5,
  },
  cardText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    color: THEME.COLORS.Textprimary,
    marginVertical: 5,
  },
});
