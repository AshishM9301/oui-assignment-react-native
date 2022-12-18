import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const RenderButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => onPress}>
      <Text style={styles.buttonTxt}>{title}</Text>
    </TouchableOpacity>
  );
};

export default RenderButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#00c8d7",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 64,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonTxt: {
    color: "#fff",
    fontWeight: "600",
  },
});
