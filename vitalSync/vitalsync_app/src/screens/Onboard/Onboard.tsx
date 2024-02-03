import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {Button} from 'react-native-paper';

import {THEME} from '../../utils/theme';

const Onboard = () => {
  return (
    <View style={styles.mainContainer}>
      {/* <View>
        <Text>Are you a researcher? </Text>
        <Text>Want to use our app for your research?</Text>
      </View>

      <View>
        <Button>Agree</Button>
      </View> */}
    </View>
  );
};

export default Onboard;

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
