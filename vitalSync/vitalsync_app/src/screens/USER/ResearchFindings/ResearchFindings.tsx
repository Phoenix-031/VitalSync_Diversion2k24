import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {THEME} from '../../../utils/theme';

const ResearchFindings = () => {
  return (
    <View style={styles.mainContainer}>
      <Text>ResearchFindings</Text>
    </View>
  );
};

export default ResearchFindings;

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
