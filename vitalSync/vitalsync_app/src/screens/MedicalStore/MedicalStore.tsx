import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';

import {Button} from 'react-native-paper';

import {THEME} from '../../utils/theme';

import graymimg from '../../assets/grayedimg.png';

const MedicalStore = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={{marginVertical: 10}}>
        <Text style={{fontSize: 18}}>Get medicines at your doorstep </Text>
      </View>

      <View style={{width: '100%', marginBottom: 10}}>
        <FlatList
          data={[
            {
              id: '1',
              title: 'lorem sdvakh kajsnuiefvnkdvv kjndfviu',
              image: graymimg,
            },
            {
              id: '2',
              title: 'lorem sdvakh kajsnuiefvnkdvv kjndfviu',
              image: graymimg,
            },
            {
              id: '3',
              title: 'lorem sdvakh kajsnuiefvnkdvv kjndfviu 3',
              image: graymimg,
            },
            {
              id: '4',
              title: 'lorem sdvakh kajsnuiefvnkdvv kjndfviu 4',
              image: graymimg,
            },
            {
              id: '5',
              title: 'lorem sdvakh kajsnuiefvnkdvv kjndfviu 5',
              image: graymimg,
            },
          ]}
          renderItem={({item}) => <Item title={item.title} />}
          keyExtractor={item => item.id}
        />
      </View>
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
    padding: 15,
  },
  storeimg: {
    width: 100,
    height: 100,
    overflow: 'hidden',
    borderRadius: 10,
    borderColor: 'gray',
  },
  item: {
    backgroundColor: THEME.COLORS.Foreground,
    borderRadius: 15,
    padding: 15,
    width: '100%',
    paddingVertical: 10,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: 'gray',
  },
});

const Item = ({title}) => {
  return (
    <SafeAreaView style={styles.item}>
      <View
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          gap: 15,
          marginBottom: 10,
        }}>
        <View>
          <Image source={graymimg} style={styles.storeimg} />
        </View>
        <View style={{width: '50%'}}>
          <Text>{title}</Text>
        </View>
      </View>

      <View style={{width: '100%'}}>
        <Button mode="outlined" uppercase>
          Avail Discounts
        </Button>
      </View>
    </SafeAreaView>
  );
};
