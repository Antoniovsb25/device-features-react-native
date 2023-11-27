import { useState } from "react";
import { ScrollView, View, Text, TextInput, StyleSheet } from "react-native";
import { Colors } from "../../../constants/colors";
import ImagePicker from "../ImagePicker";
import LocationPicker from "../LocationPicker";
import React from "react";

function PlaceForm() {
  const [title, setTitle] = useState("");
  const changeTitleHandler = (enteredTitle: string) => {
    setTitle(enteredTitle);
  };
  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          onChangeText={changeTitleHandler}
          value={title}
        />
      </View>
      <ImagePicker />
      <LocationPicker />
    </ScrollView>
  );
}

export default PlaceForm;

const styles = StyleSheet.create({
  form: { flex: 1, padding: 24 },
  label: { fontWeight: "bold", marginBottom: 4, color: Colors.primary500 },
  input: {
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    borderBottomColor: Colors.primary700,
    borderBottomWidth: 2,
    backgroundColor: Colors.primary100,
  },
});
