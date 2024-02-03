/* eslint-disable @typescript-eslint/no-unused-vars */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {Button, Avatar} from 'react-native-paper';

import {FontAwesome} from 'react-native-vector-icons/FontAwesome';

import {THEME} from '../../utils/theme';

import {useNavigation} from '@react-navigation/native';
import {SCREENS} from '../../utils/screens';

import prof from '../../assets/MetaMask.png';

const Profile = () => {
  const navigation = useNavigation();

  const handleRegisterResearcher = () => {
    navigation.navigate(SCREENS.ResearcherOnboard);
  };

  const handleRegisterDoctor = () => {
    navigation.navigate(SCREENS.DoctorOnboard);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.avatarImg}>
        <Avatar.Image size={50} source={prof} />
      </View>

      <View style={styles.researcherContainer}>
        <Text style={styles.genText}>Are you a researcher?</Text>
        <Text style={styles.genText}>We can help in your research</Text>

        <View style={styles.buttonSection}>
          <Button mode="outlined" uppercase onPress={handleRegisterResearcher}>
            Proceed
          </Button>
        </View>
      </View>

      <View style={styles.researcherContainer}>
        <Text style={styles.genText}>Doctors on board</Text>

        <View style={styles.buttonSection}>
          <Button mode="outlined" uppercase onPress={handleRegisterDoctor}>
            Proceed
          </Button>
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    color: 'red',
    backgroundColor: THEME.COLORS.Background,
    padding: 10,
  },
  avatarImg: {
    width: '100%',
    padding: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  researcherContainer: {
    width: '100%',
    padding: 10,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
  },
  genText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: THEME.COLORS.Textprimary,
  },
  buttonSection: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 15,
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 50,
  },
});
