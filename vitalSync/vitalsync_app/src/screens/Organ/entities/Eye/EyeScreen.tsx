import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {THEME} from '../../../../utils/theme';

const EyeScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <Text>EyeScreen</Text>
    </View>
  );
};

export default EyeScreen;

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
});
