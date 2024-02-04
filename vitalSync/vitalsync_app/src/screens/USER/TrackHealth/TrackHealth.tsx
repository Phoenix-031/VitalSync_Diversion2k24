/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {THEME} from '../../../utils/theme';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const TrackHealth = () => {
  return (
    <View style={styles.mainContainer}>
      <View
        style={{
          width: '100%',
          padding: 10,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 20, fontWeight: 'semibold'}}>
          Track Your Health
        </Text>
      </View>

      <View
        style={{
          width: '100%',
          padding: 10,
        }}>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            gap: 20,
          }}>
          <View
            style={{
              borderColor: 'gray',
              borderWidth: 1,
              borderRadius: 10,
              padding: 10,
            }}>
            <Text style={{fontSize: 15, fontWeight: 'semibold'}}>
              Blood Pressure
            </Text>
            <View
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginVertical: 10,
              }}>
              <MaterialIcons name="bloodtype" size={30} color="gray" />
            </View>
          </View>

          <View
            style={{
              borderColor: 'gray',
              borderWidth: 1,
              borderRadius: 10,
              padding: 10,
            }}>
            <Text style={{fontSize: 15, fontWeight: 'semibold'}}>
              Heart Monitor
            </Text>
            <View
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginVertical: 10,
              }}>
              <MaterialIcons name="bloodtype" size={30} color="gray" />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TrackHealth;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    color: 'red',
    backgroundColor: THEME.COLORS.Background,
    padding: 10,
  },
});
