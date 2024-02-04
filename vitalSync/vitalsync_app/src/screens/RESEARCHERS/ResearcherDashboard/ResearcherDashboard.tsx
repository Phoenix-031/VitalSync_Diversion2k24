import {Alert, StyleSheet, View} from 'react-native';
import React from 'react';
import {useState} from 'react';

import {SelectList} from 'react-native-dropdown-select-list';

import {Pressable} from 'react-native';

import {
  Modal,
  Portal,
  Text,
  Button,
  PaperProvider,
  Checkbox,
  TextInput,
} from 'react-native-paper';

import {FlatList} from 'react-native';

import {THEME} from '../../../utils/theme';
import LocationPickerComponent from '../../../components/LocationPickerComponent';
import {userData} from '../../../data/userData';

interface ItemProps {
  id: number;
  walletAddress: string;
}

const ResearcherDashboard = () => {
  const [checkdeMale, setCheckdeMale] = React.useState(false);
  const [checkedFemale, setCheckedFemale] = React.useState(false);

  const [visible, setVisible] = useState(false);
  const [age, setAge] = useState('');

  const showModal = () => setVisible(true);

  const hideModal = () => setVisible(false);

  const [selectedDisease, setSelectedDisease] = useState(null);

  const handleViewData = () => {
    hideModal();
  };

  const data = [
    {key: '1', value: 'Heart Disease'},
    {key: '2', value: 'diabetes'},
    {key: '3', value: 'cancer'},
    {key: '4', value: 'Respiratory Disorders'},
  ];

  const modalStyle = {
    backgroundColor: 'white',
    height: '70%',
    padding: 20,
    margin: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: THEME.COLORS.Background,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 15,
  };

  return (
    <PaperProvider>
      <View style={styles.mainContainer}>
        <Portal>
          <Modal
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={modalStyle}>
            <View
              style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 15,
                marginVertical: 10,
              }}>
              <Text>Select Gender</Text>
              <View>
                <Text>Male</Text>
                <Checkbox
                  status={checkdeMale ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setCheckdeMale(!checkdeMale);
                  }}
                />
              </View>

              <View>
                <Text>Female</Text>
                <Checkbox
                  status={checkedFemale ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setCheckdeMale(!checkedFemale);
                  }}
                />
              </View>
            </View>

            <View
              style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 15,
                marginVertical: 10,
              }}>
              <Text>Specify Age</Text>
              <TextInput
                label="Age"
                value={age}
                onChangeText={text => setAge(text)}
                style={{width: '40%'}}
              />
            </View>

            <View>
              <Text style={styles.label}>
                Select the type of disease for research:
              </Text>
              <SelectList
                setSelected={val => setSelectedDisease(val)}
                data={data}
                save="value"
              />
            </View>

            <View
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginVertical: 15,
              }}>
              <Text style={styles.label}>Select location</Text>
              <TextInput
                label="Location"
                value={age}
                onChangeText={text => setAge(text)}
                style={{width: '90%'}}
              />
            </View>

            <View style={{width: '100%'}}>
              <Button
                mode="outline"
                uppercase
                style={{borderColor: 'gray'}}
                onPress={handleViewData}>
                Proceed
              </Button>
            </View>
          </Modal>
        </Portal>
        <Button
          style={{marginTop: 30}}
          mode="outlined"
          uppercase
          onPress={showModal}>
          Filter Data
        </Button>
        {/* <LocationPickerComponent /> */}
        <View style={styles.flatComponent}>
          <FlatList
            data={userData}
            renderItem={({item}) => <Item walletAddress={item.walletAddress} />}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    </PaperProvider>
  );
};

export default ResearcherDashboard;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    color: 'red',
    backgroundColor: THEME.COLORS.Background,
    padding: 10,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
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
  flatComponent: {
    width: '100%',
    padding: 10,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    color: 'black',
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'gray',
    borderRadius: 8,
    color: 'black',
  },
});

const Item = ({walletAddress}: ItemProps) => {
  const handleRequestAccess = () => {
    setReqModal(true);
  };

  const [reqModal, setReqModal] = useState(false);
  const [visible, setVisible] = useState(false);

  const modalStyle = {
    backgroundColor: 'white',
    height: '30%',
    padding: 20,
    margin: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: THEME.COLORS.Background,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 15,
  };

  const handleAsk = () => {
    Alert.alert('Request Sent');
    // setVisible(true);
    setReqModal(false);
  };

  const handleCancel = () => {
    setReqModal(false);
  };

  return (
    <>
      <Portal>
        <Modal
          visible={reqModal}
          onDismiss={() => setReqModal(false)}
          contentContainerStyle={modalStyle}>
          <View>
            <Text>Request Access for medical docs</Text>
          </View>
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 10,
              flexDirection: 'row',
              gap: 10,
            }}>
            <Button mode="outlined" onPress={handleAsk}>
              Ask
            </Button>
            <Button mode="outlined" onPress={handleCancel}>
              Cancel
            </Button>
          </View>
        </Modal>
      </Portal>
      <Pressable style={styles.item} onPress={handleRequestAccess}>
        <Text style={styles.title}>{walletAddress}</Text>
      </Pressable>
    </>
  );
};
