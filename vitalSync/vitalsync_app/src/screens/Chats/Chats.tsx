import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {THEME} from '../../utils/theme';

const Chats = () => {
  return (
    <View style={styles.mainContainer}>
      <Text>Chats</Text>
    </View>
  );
};

export default Chats;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    color: 'red',
    backgroundColor: THEME.COLORS.Background,
  },
});
