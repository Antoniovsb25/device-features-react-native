import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

function PlaceItem({ place, onSelect }) {
  return (
    <TouchableOpacity onPress={onSelect}>
      <Image source={{ uri: place.imageUri }} />
      <View>
        <Text>{place.title}</Text>
        <Text>{place.address}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default PlaceItem;

const styles = StyleSheet.create({

})