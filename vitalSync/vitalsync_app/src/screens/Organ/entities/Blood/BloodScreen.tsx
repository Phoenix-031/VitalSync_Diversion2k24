import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {THEME} from '../../../../utils/theme';

const BloodScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <Text>BloodScreen</Text>
    </View>
  );
};

export default BloodScreen;

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
