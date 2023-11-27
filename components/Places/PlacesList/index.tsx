import { FlatList, Text, View, StyleSheet } from "react-native";
import PlaceItem from "../PlaceItem";
import { Colors } from "../../../constants/colors";
import React from "react";

function PlacesList({ places }) {
  if (!places || places.length) {
    return (
      <View style={styles.fallbackContainer}>
        <Text style={styles.fallbackText}>No places added yet</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={places}
      keyExtractor={(place) => place.id}
      renderItem={({ place }) => <PlaceItem place={place} />}
    />
  );
}

export default PlacesList;

const styles = StyleSheet.create({
    fallbackContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    fallbackText: {
        fontSize: 16,
        color: Colors.primary200
    }
})
