/* eslint-disable react-native/no-inline-styles */
/* eslint-disable curly */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {Button, Avatar, TextInput} from 'react-native-paper';

import {THEME} from '../../utils/theme';

import {useNavigation} from '@react-navigation/native';
import {SCREENS} from '../../utils/screens';

import prof from '../../assets/MetaMask.png';

import contractAbi from '../../contract/RolesAbi.json';

import {CONTRACT_ADDRESS} from '@env';

import useStore from '../../store/store';

import Entypo from 'react-native-vector-icons/Entypo';
import {EventType} from '@thirdweb-dev/react-native';

const Profile = () => {
  const navigation = useNavigation();

  const {isNormalUser, isResearcher, walletAddress} = useStore();

  const [abhaId, setAbhaId] = React.useState('');

  const handleStoreFront = () => {
    navigation.navigate(SCREENS.MedicalStore);
  };

  const handlewallet = () => {
    navigation.navigate(SCREENS.Wallet);
  };

  const handleRegisterResearcher = () => {
    navigation.navigate(SCREENS.ResearcherOnboard);
  };

  const handleRegisterDoctor = () => {
    navigation.navigate(SCREENS.DoctorOnboard);
  };

  return (
    <View style={styles.mainContainer}>
      <ScrollView style={styles.scrollCont}>
        <View>
          <Text style={{fontSize: 25}}>
            {walletAddress === '0x55184A2Ce702AEE30E39D7Ecc01135a44ceB306F' &&
              'Researcher'}
            {walletAddress === '0xaB08112249Ece980FE179AB29086CC6305273ae6' &&
              'Doctor'}
            {walletAddress === '0x93BdA32F17f908C6a80f711aDCAeb686e68FE217' &&
              'User'}
          </Text>
        </View>

        <View style={styles.avatarImg}>
          <Avatar.Image size={50} source={prof} />
        </View>

        <View
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 10,
            marginBottom: 10,
          }}>
          <TextInput
            label="Enter Abha ID"
            value={abhaId}
            onChangeText={text => setAbhaId(text)}
            style={{width: '90%'}}
          />
        </View>

        <View
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Pressable
            onPress={handlewallet}
            style={{
              borderColor: 'gray',
              borderRadius: 10,
              padding: 10,
              borderWidth: 1,
              width: '75%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              gap: 20,
            }}>
            <Text style={{fontSize: 25}}>Wallet</Text>
            <Entypo name="wallet" size={30} color="gray" />
            <View
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                gap: 10,
              }}>
              <Text>+50</Text>
              <View
                style={{
                  padding: 12,
                  borderRadius: 500,
                  borderWidth: 1,
                  borderColor: 'gray',
                }}>
                <Text>VC</Text>
              </View>
            </View>
          </Pressable>
        </View>

        <View style={styles.researcherContainer}>
          <Text style={{fontSize: 20, marginVertical: 10}}>Get your meds</Text>
          <Text style={{fontSize: 15}}>
            Order in app to avail discounts through in app tokens
          </Text>

          <View style={{width: '100%', padding: 10, paddingHorizontal: 30}}>
            <Button mode="outlined" onPress={handleStoreFront}>
              Order Now
            </Button>
          </View>
        </View>

        <View style={styles.researcherContainer}>
          <Text style={styles.genText}>Are you a researcher?</Text>
          <Text style={styles.genText}>We can help in your research</Text>

          <View style={styles.buttonSection}>
            <Button
              mode="outlined"
              uppercase
              onPress={handleRegisterResearcher}>
              Proceed
            </Button>
          </View>
        </View>
        {walletAddress !== '0xaB08112249Ece980FE179AB29086CC6305273ae6' && (
          <View style={styles.researcherContainer}>
            <Text style={styles.genText}>Doctors on board</Text>

            <View style={styles.buttonSection}>
              <Button mode="outlined" uppercase onPress={handleRegisterDoctor}>
                Proceed
              </Button>
            </View>
          </View>
        )}

        {walletAddress !== '0xaB08112249Ece980FE179AB29086CC6305273ae6' && (
          <View
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 10,
              flexDirection: 'row',
              gap: 12,
            }}>
            <Text>Document Access Status</Text>
            <Button
              mode="outlined"
              uppercase
              onPress={() => navigation.navigate(SCREENS.DocumentAccess)}>
              View
            </Button>
          </View>
        )}

        {isNormalUser && (
          <View
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 10,
              flexDirection: 'row',
              gap: 12,
            }}>
            <Text>View Research Findings</Text>
            <Button
              mode="outlined"
              uppercase
              onPress={() => navigation.navigate(SCREENS.ResearchFindings)}>
              View
            </Button>
          </View>
        )}

        {walletAddress === '0x93BdA32F17f908C6a80f711aDCAeb686e68FE217' && (
          <View>
            <View
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 10,
                flexDirection: 'row',
                gap: 12,
              }}>
              <Text>View Requests from Researchers</Text>
              <Button
                mode="outlined"
                uppercase
                onPress={() => navigation.navigate(SCREENS.ViewRequests)}>
                View
              </Button>
            </View>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // justifyContent: 'flex-start',
    // alignItems: 'center',
    color: 'red',
    backgroundColor: THEME.COLORS.Background,
    padding: 10,
    paddingBottom: 85,
  },
  scrollCont: {
    alignContent: 'center',
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
