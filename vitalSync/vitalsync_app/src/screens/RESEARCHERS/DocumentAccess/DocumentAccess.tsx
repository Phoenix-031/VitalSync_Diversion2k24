import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';

import {THEME} from '../../../utils/theme';

import {STATUS} from '../../../utils/theme';

import {userData} from '../../../data/userData';
import {userAccessData} from '../../../data/userAccessData';

const DocumentAccess = () => {
  return (
    <View style={styles.mainContainer}>
      <Text>DocumentAccess</Text>
      <View>
        <FlatList
          data={userAccessData}
          renderItem={({item}) => (
            <Item walletAddress={item.walletAddress} st={item.status} />
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default DocumentAccess;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    color: 'red',
    backgroundColor: THEME.COLORS.Background,
    padding: 10,
  },
  item: {
    backgroundColor: THEME.COLORS.Foreground,
    borderRadius: 15,
    padding: 15,
    width: '100%',
    paddingVertical: 10,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: 'red',
  },
  title: {
    fontSize: 15,
    color: 'white',
  },
});

const Item = ({walletAddress, st}) => {
  return (
    <View style={{...styles.item, borderColor: STATUS[st]}}>
      <Text style={styles.title}>{walletAddress}</Text>
    </View>
  );
};
