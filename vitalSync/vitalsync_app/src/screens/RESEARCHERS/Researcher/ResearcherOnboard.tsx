/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useState} from 'react';

import {TextInput, Button} from 'react-native-paper';

import {THEME} from '../../../utils/theme';

import DocumentPicker from 'react-native-document-picker';
import RNFetchBlob from 'rn-fetch-blob';

const ResearcherOnboard = () => {
  const [name, setName] = useState('');
  const [institute, setInstitute] = useState('');
  const [independent, setIndependent] = useState('');
  const [incharge, setIncharge] = useState('');

  const [selectedFile, setSelectedFile] = useState(null);

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

  const handleFileUpload = () => {
    if (selectedFile) {
      // Replace 'YOUR_UPLOAD_API_ENDPOINT' with the actual endpoint for file upload
      const uploadUrl = 'YOUR_UPLOAD_API_ENDPOINT';

      RNFetchBlob.fetch(
        'POST',
        uploadUrl,
        {
          'Content-Type': 'multipart/form-data',
        },
        [
          {
            name: 'file',
            filename: selectedFile.name || 'file',
            data: RNFetchBlob.wrap(selectedFile.uri),
          },
        ],
      )
        .then(res => {
          // Handle the response from the server after successful upload
          console.log('File uploaded successfully:', res);
          Alert.alert(
            'File Uploaded',
            'The file has been successfully uploaded.',
          );
        })
        .catch(err => {
          console.error('Error uploading file:', err);
          Alert.alert('Error', 'An error occurred during file upload.');
        });
    } else {
      Alert.alert('No File Selected', 'Please select a file before uploading.');
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
        <Text>Institute of Research</Text>
        <TextInput
          style={{marginTop: 10}}
          label="Email"
          value={institute}
          onChangeText={text => setInstitute(text)}
        />
      </View>
      <View style={{width: '100%', padding: 15}}>
        <Text>Are you and indipemdent researcher?</Text>
        <TextInput
          style={{marginTop: 10}}
          label="Email"
          value={independent}
          onChangeText={text => setIndependent(text)}
        />
      </View>

      <View style={{width: '100%', padding: 15}}>
        <Text>Researcher in charge?</Text>
        <TextInput
          style={{marginTop: 10}}
          label="Email"
          value={incharge}
          onChangeText={text => setIncharge(text)}
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
          <Button mode="outlined" uppercase onPress={handleFilePick}>
            Upload Documents
          </Button>
        </View>
      </View>
    </View>
  );
};

export default ResearcherOnboard;

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
