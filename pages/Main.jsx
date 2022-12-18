import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const Main = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("profile")}
      >
        <Text style={styles.buttonTxt}>Profile Details</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("signIn")}
      >
        <Text style={styles.buttonTxt}>Sign in</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("doctor")}
      >
        <Text style={styles.buttonTxt}>Doctor Details</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#00c8d7",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 64,
    marginBottom: 20,
  },
  buttonTxt: {
    color: "#fff",
    fontWeight: "600",
  },
});
