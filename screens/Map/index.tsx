import React, { useState, useLayoutEffect, useCallback } from "react";
import MapView, { Marker } from "react-native-maps";
import { Alert, StyleSheet, View } from "react-native";
import IconButton from "../../components/UI/IconButton";

export default function Map({ navigation }) {
  const [selectedLocation, setSelectedLocation] = useState({
    lat: undefined,
    lng: undefined,
  });
  const region = {
    latitude: -22.922157,
    longitude: -43.2124111,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const selectLocationHandler = (event) => {
    const { coordinate } = event.nativeEvent;

    if (coordinate) {
      const { latitude, longitude } = coordinate;
      setSelectedLocation({
        lat: latitude,
        lng: longitude,
      });
    }
  };

  const savePickedLocationHandler = useCallback(() => {
    if (!selectedLocation.lat || !selectedLocation.lng) {
      Alert.alert(
        "No location picked",
        "you have to pick a location by tapping on the map"
      );
      return;
    }
    navigation.navigate("AddPlace", {
      pickedLat: selectedLocation.lat,
      pickedLng: selectedLocation.lng,
    });
  }, [navigation, selectedLocation]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: ({ tintColor }) => (
        <IconButton
          icon="save"
          size={24}
          color={tintColor}
          onPress={savePickedLocationHandler}
        />
      ),
    });
  }, [navigation, savePickedLocationHandler]);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={region}
        onPress={selectLocationHandler}
      >
        {selectedLocation.lat && selectedLocation.lng ? (
          <Marker
            title="Picked Location"
            coordinate={{
              latitude: selectedLocation.lat,
              longitude: selectedLocation.lng,
            }}
          />
        ) : null}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
