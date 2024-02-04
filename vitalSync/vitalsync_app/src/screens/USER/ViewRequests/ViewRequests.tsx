import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {FlatList} from 'react-native';

import {THEME} from '../../../utils/theme';

const ViewRequests = () => {
  const requestData = [
    {
      id: 1,
      researchwallet: '0x1234567890',
      disease: 'Heart Disease',
      status: 'Pending',
      accestodoc: '0x1234567890',
    },
    {
      id: 2,
      researchwallet: '0x1234567890',
      disease: 'Heart Disease',
      status: 'Pending',
      accestodoc: '0x1234567890',
    },
    {
      id: 3,
      researchwallet: '0x1234567890',
      disease: 'Heart Disease',
      status: 'Pending',
      accestodoc: '0x1234567890',
    },
    {
      id: 4,
      researchwallet: '0x1234567890',
      disease: 'Heart Disease',
      status: 'Pending',
      accestodoc: '0x1234567890',
    },
    {
      id: 5,
      researchwallet: '0x1234567890',
      disease: 'Heart Disease',
      status: 'Pending',
      accestodoc: '0x1234567890',
    },
    {
      id: 6,
      researchwallet: '0x1234567890',
      disease: 'Heart Disease',
      status: 'Pending',
      accestodoc: '0x1234567890',
    },
    {
      id: 7,
      researchwallet: '0x1234567890',
      disease: 'Heart Disease',
      status: 'Pending',
      accestodoc: '0x1234567890',
    },
    {
      id: 8,
      researchwallet: '0x1234567890',
      disease: 'Heart Disease',
      status: 'Pending',
      accestodoc: '0x1234567890',
    },
    {
      id: 9,
      researchwallet: '0x1234567890',
      disease: 'Heart Disease',
      status: 'Pending',
      accestodoc: '0x1234567890',
    },
  ];

  return (
    <View style={styles.mainContainer}>
      <Text style={{fontSize:20,marginVertical:10}}>ViewRequests From Researchers</Text>
      <View style={{width: '90%',marginVertical:15,paddingVertical:15}}>
        <FlatList
          data={requestData}
          renderItem={({item}) => (
            <Item
              researchwallet={item.researchwallet}
              disease={item.disease}
              status={item.status}
              accestodoc={item.accestodoc}
            />
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default ViewRequests;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    color: 'red',
    backgroundColor: THEME.COLORS.Background,
    padding: 10,
    width: '100%',
  },
  item: {
    backgroundColor: THEME.COLORS.Foreground,
    borderRadius: 15,
    padding: 15,
    width: '100%',
    paddingVertical: 10,
    marginVertical: 8,
  },
  title: {
    fontSize: 15,
    color: 'white',
  },
});

const Item = ({researchwallet, disease, status, accestodoc}) => {
  return (
    <View style={styles.item}>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 10,
          flexDirection: 'row',
        }}>
        <Text style={styles.title}>{researchwallet}</Text> 
        <Text>---></Text>
        <Text style={styles.title}>{accestodoc}</Text>
      </View>

      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 10,
        }}>
        <Text style={styles.title}>{disease}</Text>
        <Text style={styles.title}>{status}</Text>
      </View>
    </View>
  );
};
