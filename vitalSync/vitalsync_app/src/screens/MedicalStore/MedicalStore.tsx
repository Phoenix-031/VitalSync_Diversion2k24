import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {THEME} from '../../utils/theme';

const MedicalStore = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={{marginVertical: 10}}>
        <Text style={{fontSize: 18}}>Get medicines at your doorstep </Text>
      </View>

      <FlatList
        data={[
          {id: '1', title: 'Medicine 1', price: '100'},
          {id: '2', title: 'Medicine 2', price: '200'},
          {id: '3', title: 'Medicine 3', price: '300'},
          {id: '4', title: 'Medicine 4', price: '400'},
          {id: '5', title: 'Medicine 5', price: '500'},
        ]}
        renderItem={({item}) => <Item title={item.title} price={item.price} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default MedicalStore;

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

const Item = ({title, price}) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.title}>Price: {price}</Text>
    </View>
  );
};
