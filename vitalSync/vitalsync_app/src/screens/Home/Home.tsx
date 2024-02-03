import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {THEME} from '../../utils/theme';

const Home = () => {
  return (
    <View style={styles.mainContainer}>
      <Text>Home</Text>
    </View>
  );
};

export default Home;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
