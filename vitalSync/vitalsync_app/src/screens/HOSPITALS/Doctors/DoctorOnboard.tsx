/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useState} from 'react';

import {TextInput, Button} from 'react-native-paper';

import DocumentPicker from 'react-native-document-picker';
import RNFetchBlob from 'rn-fetch-blob';

import {SelectList} from 'react-native-dropdown-select-list';

import {THEME} from '../../../utils/theme';

const DoctorOnboard = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const [selectedFile, setSelectedFile] = useState(null);

  const [selected, setSelected] = React.useState('');

  const handleDoctorinfosubmit = () => {
    console.log('name', name);
    console.log('address', address);
    console.log('selected', selected);
  };

  const data = [
    {key: '1', value: 'Radiology'},
    {key: '2', value: 'Pathology'},
    {key: '3', value: 'General surgery'},
    {key: '4', value: 'Crdiology'},
    {key: '5', value: 'Neurology'},
    {key: '6', value: 'Immunology'},
    {key: '7', value: 'Plastic Surgery'},
  ];

  const handleFilePick = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });

      setSelectedFile(result);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User canceled the file picker
        console.log('File picker canceled');
      } else {
        console.error(`Error picking file: ${err}`);
      }
    }
  };

  return (
    <View style={styles.mainContainer}>
      <View style={{width: '100%', padding: 15}}>
        <Text>Name</Text>
        <TextInput
          style={{marginTop: 10}}
          label="Name"
          value={name}
          onChangeText={text => setName(text)}
        />
      </View>

      <View style={{width: '100%', padding: 15}}>
        <Text>Address</Text>
        <TextInput
          style={{marginTop: 10}}
          label="Email"
          value={address}
          onChangeText={text => setAddress(text)}
        />
      </View>

      <View
        style={{
          width: '100%',
          padding: 15,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Upload Documents</Text>
        <View style={{width: '100%', padding: 15}}>
          <Button mode="outlined" uppercase onPress={handleFilePick}>
            Upload Documents
          </Button>
        </View>
      </View>

      <View
        style={{
          width: '100%',
          padding: 15,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Digitally Signed Id</Text>
        <View style={{width: '100%', padding: 15}}>
          <Button mode="outlined" uppercase onPress={handleFilePick}>
            Upload
          </Button>
        </View>
      </View>

      <View style={{width: '100%', padding: 15}}>
        <SelectList
          setSelected={val => setSelected(val)}
          data={data}
          save="value"
        />
      </View>

      {/* if solo researcher then pay a nominal fee */}

      {/* institute id */}

      <View
        style={{
          width: '100%',
          padding: 15,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Upload Documents</Text>
        <View style={{width: '100%', padding: 15}}>
          <Button mode="outlined" uppercase onPress={handleDoctorinfosubmit}>
            Submit
          </Button>
        </View>
      </View>
    </View>
  );
};

export default DoctorOnboard;

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
