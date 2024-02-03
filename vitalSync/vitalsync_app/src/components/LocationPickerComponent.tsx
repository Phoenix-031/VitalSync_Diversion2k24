// LocationPickerComponent.js
import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

const LocationPickerComponent = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleMapPress = event => {
    const {coordinate} = event.nativeEvent;
    setSelectedLocation(coordinate);
  };

  const handleButtonPress = () => {
    if (selectedLocation) {
      alert(
        `Selected Location: ${selectedLocation.latitude}, ${selectedLocation.longitude}`,
      );
    } else {
      alert('Please select a location on the map first.');
    }
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        onPress={handleMapPress}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {selectedLocation && (
          <Marker coordinate={selectedLocation} title="Selected Location" />
        )}
      </MapView>
      <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
        <Text style={styles.buttonText}>Pinpoint Location</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  button: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
    backgroundColor: '#3498db',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default LocationPickerComponent;
