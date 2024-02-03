import {StyleSheet, View} from 'react-native';
import React from 'react';
import {useState} from 'react';

import {SelectList} from 'react-native-dropdown-select-list';

import {
  Modal,
  Portal,
  Text,
  Button,
  PaperProvider,
  Checkbox,
  TextInput,
} from 'react-native-paper';

import {THEME} from '../../../utils/theme';
import LocationPickerComponent from '../../../components/LocationPickerComponent';

const ResearcherDashboard = () => {
  const [checkdeMale, setCheckdeMale] = React.useState(false);
  const [checkedFemale, setCheckedFemale] = React.useState(false);

  const [visible, setVisible] = useState(false);
  const [age, setAge] = useState('');

  const showModal = () => setVisible(true);

  const hideModal = () => setVisible(false);

  const [selectedDisease, setSelectedDisease] = useState(null);

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
          </Modal>
        </Portal>
        <Button style={{marginTop: 30}} onPress={showModal}>
          Show
        </Button>
        {/* <LocationPickerComponent /> */}
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
