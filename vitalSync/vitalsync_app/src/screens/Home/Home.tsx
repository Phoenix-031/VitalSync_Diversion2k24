import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {THEME} from '../../utils/theme';
import {ContractTesting} from '../ContractTesting';

const Home = () => {
  return (
    <View style={styles.mainContainer}>
      <Text>Home</Text>
      <ContractTesting />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    color: 'red',
    backgroundColor: THEME.COLORS.Background,
    padding: 15,
  },
});
